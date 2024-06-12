import React from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "slices";
import {dataAspectReview, dataReview} from "helpers/api_data_models"
import { filterReviews } from "helpers/processdata/process";
 




function AspectBasedElement({absaData}:{absaData:dataReview}) {
  return <React.Fragment>
    <div className="py-3 px-5 grid-row-2 gap-1 h-20 my-2 flex items-center ">
        <div className="py-2">{absaData.review_text}</div>
        <div className="text-xs text-center">
            {absaData!.review_aspect!.map(
                ({aspect,sentiment}:dataAspectReview,i)=>{
                    let color = "slate"
                    if(sentiment===1){
                        color="green"
                    }else if(sentiment===-1){
                        color="red"
                    }
                    return <span key={i} className={`me-2 px-2.5 py-0.5 inline-block text-[0.75rem] font-medium rounded border bg-${color}-100 border-transparent text-${color}-500 dark:bg-${color}-500/20 dark:border-transparent`}>{aspect}</span>
                }
            )}
        </div>
    </div>
  </React.Fragment>;
}

export default function AspectBasedList({searchKey,filterSentiment, filterAspect}:any) {
  
  

  const absaSelector = createSelector(
    (state: RootState)=> state.Review,
    (review)=>({
      absaList:filterReviews(review.reviews,searchKey,filterAspect,filterSentiment)
    })
  )

  const {absaList} = useSelector(absaSelector);

  return (
    <>
      <div className="divide-y h-[80vh] md:h-[172vh] overflow-auto">
        
          {absaList.map(
            (absa,i): React.ReactElement => (
              <AspectBasedElement absaData={absa} key={i} />
            )
          )}
        
      </div>
    </>
  );
}
