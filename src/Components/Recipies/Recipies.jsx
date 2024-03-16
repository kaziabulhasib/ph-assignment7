import { useEffect, useState } from "react";
import Recipie from "../Recipie/Recipie";
const Recipies = () => {
  const [recipies, setRecipies] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipies(data));
  }, []);
  return (
    <div className='grid grid-cols-2 gap-6'>
      {recipies.map((recpie) => (
        <Recipie key={recpie.recipe_id} recipie={recpie}></Recipie>
      ))}
    </div>
  );
};

export default Recipies;
