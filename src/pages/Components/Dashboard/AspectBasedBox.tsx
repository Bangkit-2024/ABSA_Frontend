import { createSelector } from "@reduxjs/toolkit";
import { ASPECT_LIST } from "Common/constants/constant";
import { calculateNPS, getSentimentRatio } from "helpers/processdata/process";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Tooltip } from 'react-tooltip'
import { RootState } from "slices";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'

import 'react-tooltip/dist/react-tooltip.css'
import { bulkReview } from "slices/thunk";


export default function AspectBasedStats({
  handleSearch,
  handleFilterAspect,
  handleFilterSentiment,
}: any) {
  const reviewSelector = createSelector(
    (state: RootState) => state.Review,
    (review) => ({
      reviews_total: review.reviews.length,
      ratio: getSentimentRatio(review.reviews),
      nps: calculateNPS(review.reviews),
      not_predict: review.reviews.filter((value)=>(value.review_aspect?.length??0)<=0).length,
    })
  );

  const {reviews_total, ratio, nps, not_predict: unpredict_num} = useSelector(reviewSelector);

  // Search Data
  const handleSearchInput = (e: any) => {
    const search = e.target.value;
    handleSearch(search == "" ? null : search);
  };

  const handleSentimentInput = (e: any) => {
    handleFilterSentiment(e?.value??null);
  };

  const handleAspectInput = (e: any) => {
    handleFilterAspect(e?.value ?? null);
  };

  const aspectOption = [
    { value: null, label: "-" },
    ...ASPECT_LIST.map((val) => ({ value: val.toLowerCase(), label: val })),
  ];

  const dispatch = useDispatch<any>();

  const sentimentOption = [
    { value: null, label: "-" },
    { value: 1, label: "Positif" },
    { value: 0, label: "Netral" },
    { value: -1, label: "Negatif" },
  ];

  const handleVerifyUpload = async ()=>{
    withReactContent(Swal).fire({
        title: `Confirm Predict`,
        text:`Do You Want to Run Predict For ${unpredict_num} reviews`,
        showDenyButton: true,
        confirmButtonText: "Confirm",
        denyButtonText: `Cancel`,
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(bulkReview())
        }
      })
}


  return (
    <>
      <div className="px-3">
        <div className="py-2 border-b-2 grid grid-cols-3 divide-x justify-center items-center">
          <div className="px-3 py-2 text-center">
            <div className="div text-xs">Total Comment</div>
            <div className="text lg text-2xl">{reviews_total}</div>
          </div>
          <div className="px-3 py-2 text-center" >
            <div className="div text-xs"><a data-tooltip-id="sentiment-ratio" data-tooltip-content={`Rasio antara ( Sentimen Positif / Sentiment Negatif )`}>Sentiment Ratio</a></div>
            <div className="text lg text-2xl">{ratio}</div>
          </div>
          <Tooltip id="sentiment-ratio" className="z-[1000]" place="right"/>
          <div className="px-3 py-2 text-center">
            <div className="div text-xs">NPS</div>
            <div className="text lg text-2xl">{nps}</div>
          </div>
        </div>
        <div className="py-2 border-b-2">
          <div className="relative lg:col-span-3">
            <input
              type="text"
              className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
              placeholder="Search for ..."
              onChange={(e) => handleSearchInput(e)}
              autoComplete="off"
            />
            <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
          </div>
          <div className="mt-3 flex gap-3">
            <button
              onClick={handleVerifyUpload}
              type="button"
              data-tooltip-id="predict-button"
              className="flex items-center justify-center py-1 px-3 text-sm rounded-md relative text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
            >
              <span className="absolute flex items-center justify-center size-5 text-[11px] font-medium bg-red-400 border border-red-400 rounded-full ltr:-right-2 rtl:-left-4 -top-2">
                {unpredict_num}
              </span>
              <div className="text-sm">Refresh Predict</div>
            </button>
            <Tooltip id="predict-button" className="z-[1000]" place="right" content={`There is ${unpredict_num} data is not predicted`} />
            <div className="w-1/3">
              <div className="xl:col-span-2">
                <Select
                  className="border-slate-200 focus:outline-none focus:border-custom-500"
                  isSearchable={false} // To disable search
                  name="aspectFilterSelect"
                  id="aspectFilterSelect"
                  options={aspectOption}
                  onChange={(e) => handleAspectInput(e)}
                />
              </div>
            </div>
            <div className="w-1/3">
              <div className="xl:col-span-2">
                <Select
                  className="border-slate-200 focus:outline-none focus:border-custom-500"
                  isSearchable={false} // To disable search
                  name="sentimentFilterSelect"
                  id="sentimentFilterSelect"
                  options={sentimentOption}
                  onChange={(e) => handleSentimentInput(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
