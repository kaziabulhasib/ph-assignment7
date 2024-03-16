const Recipie = () => {
  return (
    <div className='w-[380px] border p-6 rounded-2xl'>
      <img
        className='w-[330px] h-[200px] rounded-2xl mb-6'
        src='images/Chicken Stir-Fry.jpg'
        alt=''
      />
      <h1 className='font-semibold text-xl mb-5'>Spaghetti Bolognese </h1>
      <p className='border-b-2 text-[#878787] pb-4 mb-6 '>
        Classic Italian pasta dish with savory meat sauce.
      </p>
      <div>
        <h1 className='text-[18px] font-medium text-[#282828] text-left mb-4'>
          Ingredients: 6
        </h1>
        <ul className='list-disc ml-4 border-b-2 pb-4 '>
          <li>500g ground beef</li>
          <li>1 onion, chopped</li>
          <li>500g ground beef</li>
        </ul>
      </div>
      <div className='flex gap-4 my-6'>
        <div className='flex gap-1 text-[#282828CC]'>
          <h1>time:</h1>
          <h3>30 minitues</h3>
        </div>
        <div className='flex gap-1 text-[#282828CC]'>
          <h1>Calories:</h1>
          <h3>600 calories</h3>
        </div>
      </div>
      <button className='bg-[#0BE58A] py-3 px-6 rounded-3xl text-[18px] text-[#150B2B] font-medium'>
        Want to Cook
      </button>
    </div>
  );
};

export default Recipie;
