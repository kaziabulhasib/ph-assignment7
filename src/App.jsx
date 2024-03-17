// toast testing
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";

import Recipies from "./Components/Recipies/Recipies";
import RecipiesHead from "./Components/RecipiesHead/RecipiesHead";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [cookmarks, setCookmarks] = useState([]);

  const handleWantToCook = (recipie) => {
    const isExist = cookmarks.find(
      (cookmark) => cookmark.recipe_id == recipie.recipe_id
    );

    if (!isExist) {
      const newCookmarks = [...cookmarks, recipie];
      setCookmarks(newCookmarks);
    } else {
      // toast part
      toast.error("Already Exist!");
    }
  };
  return (
    <>
      <div className='max-w-[1400px] mx-auto'>
        <Header></Header>
        <Banner></Banner>
        <RecipiesHead></RecipiesHead>
        <div className='flex justify-between'>
          <Recipies handleWantToCook={handleWantToCook}></Recipies>
          <Sidebar cookmarks={cookmarks}></Sidebar>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
