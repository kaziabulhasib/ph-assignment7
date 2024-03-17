const Recipie = ({ recipie, handleWantToCook }) => {
  const {
    recipe_name,
    short_description,
    ingredients,
    recipe_image,
    preparing_time,
    calories,
  } = recipie;
  return (
    <div className='w-[380px] border p-6 rounded-2xl'>
      <img
        className='w-[330px] h-[200px] rounded-2xl mb-6'
        src={recipe_image}
        alt=''
      />
      <h1 className='font-semibold text-xl mb-5'>{recipe_name} </h1>
      <p className='border-b-2 text-[#878787] pb-4 mb-6 '>
        {short_description}
      </p>
      <div>
        <h1 className='text-[18px] font-medium text-[#282828] text-left mb-4'>
          Ingredients: {ingredients.length}
        </h1>
        <ul className='list-disc ml-4 border-b-2 pb-4 '>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className='flex gap-4 my-6'>
        <div className='flex gap-1 text-[#282828CC]'>
          <h1>time:</h1>
          <h3>{preparing_time}</h3>
        </div>
        <div className='flex gap-1 text-[#282828CC]'>
          <h1>Calories:</h1>
          <h3>{calories}</h3>
        </div>
      </div>
      <button
        onClick={() => handleWantToCook(recipie)}
        className='bg-[#0BE58A] hover:bg-[#0be58ac8] py-3 px-6 rounded-3xl text-[18px] text-[#150B2B] font-medium'>
        Want to Cook
      </button>
    </div>
  );
};

export default Recipie;
