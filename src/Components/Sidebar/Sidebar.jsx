import Cookmark from "../Cookmark/Cookmark";

const Sidebar = ({ cookmarks }) => {
  return (
    <div className='border p-8 rounded-2xl w-[600px] max-w-[600px]'>
      <h1 className='text-2xl font-semibold pb-4 mb-6 border-b-2 text-center'>
        Want to cook: {cookmarks.length}
      </h1>
      <div className='flex justify-around gap-[100px] mb-4 items-center'>
        <h1>Name</h1>
        <h1>Time</h1>
        <h1>Calories</h1>
        <h1></h1>
      </div>
      {cookmarks.map((cookmark) => (
        <Cookmark key={cookmark.recipe_id} cookmark={cookmark}></Cookmark>
      ))}
    </div>
  );
};

export default Sidebar;
