export const Footer = () => {
  return (
    <div>
      <footer className="px-9 py-4">
        <div className="px-0 lg:px-16">
          <p className="w-[100%] lg:w-full my-10 h-[1.5px] bg-gradient-to-br from-sky-300 to-blue-600"></p>
          <div className="w-full mx-auto max-w-screen-xl  lg:flex md:items-center lg:justify-between  justify-center">
            <h1 className="lg:text-xl text-lg text-gray-500 text-center lg:text-center dark:text-gray-400">
              Copyright © 2022 DOML. All rights reserved.
            </h1>
            <h1 className="lg:text-xl text-lg text-gray-500 text-center lg:text-center dark:text-gray-400">
              Terms of Use & Privacy Policy
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
};
