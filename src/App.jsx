import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <div className='max-w-[1350px] mx-auto'>
        <Header></Header>
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
