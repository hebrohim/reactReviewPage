
import React from "react";
import Review from "./components/Review";
import Data from "./components/Data"
function App() {

  // console.log(Data)
  return (
    <div className="App">
     <h2 id="reviewText">Reviews</h2>
     <div id="underline"></div>

     <Review  Reviews = {Data}/>
    </div>
  );
}

export default App;
