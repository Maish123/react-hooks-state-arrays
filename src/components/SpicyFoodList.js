import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods,newFood];
    setFoods(newFoodArray)
    console.log(newFood);
    // now we want to update our current data in the Array, we can use map so that when we click our value updates by 1
  }
  // we want to click a button and a food disappears, removing it from the list

  // function handleClick(id){
  //   const newFoodArrayOne = foods.filter((food)=> food.id !==id)
  //   setFoods(newFoodArrayOne);
  // }

  //we want to have an event such that when we click a button, the temperatures rise by even 10

  // function handleClickTwo(id){
    //must always return setfood, but will return the value being computed
    // handleclick will be passed when button is clicked, taking in id as an argument
  //   const newFoodArrayTwo = foods.map((food)=>{
  //     if(food.id===id){
  //       return{
  //         ...food,
  //         heatLevel:food.heatLevel + 1,
  //       }
  //     } else {
  //       return food;
  //     }
  //   })
  //   setFoods(newFoodArrayTwo)// newArrayFoodTwo will now be the new value of useState(spicyFoods)
  // }

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick = {handleClick(id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;



const [filterBy, setFilterBy] = useState("All");
const [foods, setFoods] = useState(spicyFoods);

const foodsToDisplay = foods.filter((food) => {
  if (filterBy === "All") {
    return true;
  } else {
    return food.cuisine === filterBy;
  }
})

function  handleFilterChange(event) {
  setFilterBy(event.target.value);
}

return (
  <select name="filter" onChange={handleFilterChange}>
    <option value="All">All</option>
    <option value="American">American</option>
    <option value="Sichuan">Sichuan</option>
    <option value="Thai">Thai</option>
    <option value="Mexican">Mexican</option>
  </select>
);