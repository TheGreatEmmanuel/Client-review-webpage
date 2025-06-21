import React,{useState} from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0);
   const {name, job, image, text} = reviews[index];

   const checkNumber = (newIndex) =>{

    if(newIndex > reviews.length - 1){
      return 0;
    }
    if(newIndex < 0 ){
     return reviews.length - 1
    }
    return newIndex;
   }

   const nextPerson = () => {
    setIndex((index) => {
    let newIndex = index + 1;
    return checkNumber(newIndex);
});
   };

   const prevPerson = () => {
    setIndex((index) =>{
    let newIndex = index - 1;
    return checkNumber(newIndex);

   });
};
const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
if (randomNumber === index){
randomNumber = index + 1
}
 setIndex(checkNumber(randomNumber));
};
    return (
<article>
    <div>
       <img src= {image} alt={name} className="images"/>

     <span className="quote">
          <FaQuoteRight/>
     </span>
    </div>
          <h4 className="name">{name}</h4>
          <p className="job">{job}</p>
          <p className="text">{text}</p>
          <div>
          <button className="prev" onClick={prevPerson}><FaChevronLeft/></button>
          <button className="next" onClick={nextPerson}><FaChevronRight/></button>
          </div>
          <button className="random" onClick={randomPerson}>surprise me !</button>

</article>
    
    
    );
}; 


export default Review;