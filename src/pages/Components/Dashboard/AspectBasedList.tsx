import React from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { Trash2Icon, PenBoxIcon } from "lucide-react";
import { filterReviews } from "helpers/processdata/process";
import { dataAspectReview } from "helpers/api_data_models";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { removeReview } from "slices/thunk";

function AspectBasedElement({ absaData , handleToogle, handleModalState} : any ) {

  const handleModal = ()=> {
    handleModalState(absaData)
    handleToogle(true)
  }
  const isReviewed = false;
  
  const dispatch = useDispatch<any>();
  
  const handleDelete = async (id:string)=>{
    withReactContent(Swal).fire({
        title: `Confirm Predict`,
        text:`Remove This`,
        showDenyButton: true,
        confirmButtonText: "Confirm",
        denyButtonText: `Cancel`,
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(removeReview(id))
        }
      })
    }

  return (
    <React.Fragment>
      <div
        className={`${
          isReviewed ? "pr-5" : "px-4 py-1"
        } grid-row-2 gap-1 min-h-20 flex items-center`}
      >
        <div className="flex gap-2 w-full justify-center items-center basis-11/12">
          {isReviewed ? (
            <div className="min-h-20 bg-blue-500 basis-1/12 max-w-5 min-w-5 flex content-center select-none">
              <div className="-rotate-90 text-white ml-1.5 text-sm select-none">
                REVIEWED
              </div>
            </div>
          ) : null}
          <div className="py-3 basis-11/12">{absaData.review_text}</div>
        </div>
        <div className="w-full flex basis-1/12 gap-1">
          <button onClick={()=>handleDelete(absaData.id)}>
            <Trash2Icon size={20} />
          </button>
        </div>
        <div className="text-xs text-center">
          {absaData!.review_aspect!.map(
            ({ aspect, sentiment }: dataAspectReview, i : number) => {
              let color = "slate";
              if (sentiment === 1) {
                color = "green";
              } else if (sentiment === -1) {
                color = "red";
              }
              return (
                <span
                  key={i}
                  className={`me-2 px-2.5 py-0.5 inline-block text-[0.75rem] font-medium rounded border bg-${color}-100 border-transparent text-${color}-500 dark:bg-${color}-500/20 dark:border-transparent`}
                >
                  {aspect}
                </span>
              );
            }
          )}
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default function AspectBasedList({
  searchKey,
  filterSentiment,
  filterAspect,
  handleToogle,
  handleModalState
}: any) {
  const absaSelector = createSelector(
    (state: RootState) => state.Review,
    (review) => ({
      absaList: filterReviews(
        review.reviews,
        searchKey,
        filterAspect,
        filterSentiment
      ),
    })
  );

  const { absaList } = useSelector(absaSelector);

  return (
    <>
      <div className="divide-y h-[80vh] md:h-[172vh] overflow-auto">
        {absaList.map(
          (absa, i): React.ReactElement => (
            <AspectBasedElement absaData={absa} key={i} handleToogle={handleToogle} handleModalState={handleModalState}/>
          )
        )}
      </div>
    </>
  );
}
