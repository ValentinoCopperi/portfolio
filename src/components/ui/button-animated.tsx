"use client"


const ButtonAnimatedGradient = ({ children }: { children: React.ReactNode }) => {

  const handleClick = () => {
    const element = document.getElementById('projects-section');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',  
        block: 'start'     
      });
    }
  };

  return (
    <>
      <button onClick={handleClick} className='transition-background inline-flex h-12 items-center justify-center rounded-md border border-gray-800 bg-gradient-to-r from-gray-100 via-[#c7d2fe] to-[#8678f9] bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-gray-950 duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
        {children}
      </button>
    </>
  );
};

export default ButtonAnimatedGradient;
