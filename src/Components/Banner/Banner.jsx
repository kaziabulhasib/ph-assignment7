// import bannerImage from "../../assets/images/bannerImage.png";

const Banner = () => {
  return (
    <div className='banner-container'>
      <h1 className='text-white text-5xl leading-normal font-bold text-center mb-6'>
        Discover an exceptional cooking <br /> class tailored for you!
      </h1>
      <p className='text-[18px] leading-7 mb-10 w-[50%] mx-auto text-center'>
        Discover tailored culinary courses for a remarkable cooking journey
        crafted exclusively for your unique preferences and skills
      </p>
      <div className='flex gap-6'>
        <button className='bg-[#0BE58A] text-black px-8 py-5 rounded-[50px] text-xl font-semibold'>
          Explore Now
        </button>
        <button className='border border-white text-white px-7 py-3 rounded-[50px] text-xl font-semibold'>
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;
