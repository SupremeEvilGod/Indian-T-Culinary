import React, {useState} from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Recipies from '../../components/Recipies/Recipies';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <Recipies category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  );
}

export default Home
