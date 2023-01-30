import React from "react";


const Navbar = () => {

  const navList = ['Projcts', 'Tasks'];

  return (
    <div className="bg-sky-100 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 container mx-auto flex items-center justify-between text-blue-gray-900">
      <div className='flex items-center justify-between text-blue-gray-900'>
        <a className="mr-4 cursor-pointer py-1.5 font-normal font-bold">
          <span>Project Management</span>
        </a>
        <ul className="ml-5 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          {navList.map((item, index) =>
            <li key={index} className='text-sm text-grey p-1 font-normal'>
              <a href="#" className="flex items-center">
                {item}
              </a>
            </li>)}
        </ul>
      </div>
      <div className="flex items-center md:ml-12">
        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Sign in</a>
        <a href="#" className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-700">Sign up</a>
      </div>
    </div>
  );

};

export default Navbar;
