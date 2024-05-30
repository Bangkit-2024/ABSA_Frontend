import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { RootState } from 'slices';
import {generateWordCloud} from 'helpers/processdata/process'

 
const options : {rotations:number,rotationAngles:[number,number]} = {
  rotations: 2,
  rotationAngles: [-90, 0],
};
// const size:[number,number] = [600, 400];

function SimpleWordcloud() {
  const wordCloudSelector = createSelector(
    (state : RootState)=>state.Review,
    (review)=>({
        words:generateWordCloud(review.reviews)
    })
  )

  const {words} = useSelector(wordCloudSelector)
  return <ReactWordcloud words={words} 
  // size={size}
  options={options}
  />
}

export default SimpleWordcloud;