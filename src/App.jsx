import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";

import Recipies from "./Components/Recipies/Recipies";
import RecipiesHead from "./Components/RecipiesHead/RecipiesHead";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className='max-w-[1350px] mx-auto'>
        <Header></Header>
        <Banner></Banner>
        <RecipiesHead></RecipiesHead>
        <div className='flex justify-between'>
          <Recipies></Recipies>
          <Sidebar></Sidebar>
        </div>
      </div>
    </>
  );
}

export default App;
