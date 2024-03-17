const Cookmark = ({ cookmark }) => {
  const { calories, preparing_time, recipe_name } = cookmark;
  return (
    <div className='flex items-center justify-between bg-[#28282808] px-6 py-4 gap-5 mb-6'>
      <div className='flex justify-around gap-[100px] mb-4'>
        <h1>{recipe_name}</h1>
        <h1>{preparing_time}</h1>
        <h1>{calories}</h1>
      </div>
      <button className='bg-[#0BE58A] py-2 px-4 rounded-3xl  text-[#150B2B] '>
        Preparing
      </button>
    </div>
  );
};

export default Cookmark;
