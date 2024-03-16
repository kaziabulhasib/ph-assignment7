import { RiSearchLine } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className='flex justify-between items-center py-12'>
      <div>
        <h1 className='font-bold text-3xl text-[#150B2B]'>Recipe Calories</h1>
      </div>
      <div>
        <ul className=' flex gap-12 text-[#150B2BB2] '>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>Recipes</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Search</a>
          </li>
        </ul>
      </div>
      <div className='flex gap-4 items-center relative '>
        <RiSearchLine className='search-icon absolute left-6 top-[50] ' />
        <input
          className='bg-[#150B2B0D] border-none outline-none px-10 py-3 rounded-[48px] text-[#150B2BB2] '
          type='text'
          placeholder='  Search'
        />

        <IoPersonCircleOutline className='bg-green-500 text-3xl rounded-full' />
      </div>
    </div>
  );
};

export default Header;
