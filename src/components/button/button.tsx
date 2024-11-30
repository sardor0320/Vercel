

import iconca from "../../assets/img/Vector (20).png"

import ShineBorder from "../../components/ui/shine-border";


interface CustomButtonProps {
  textName: string;
 // Tugma nomi // Qo'shimcha sinflar (ixtiyoriy)
}

const ShinyButtonDemo: React.FC<CustomButtonProps> = ({
  textName,
  // Default class
}) => {
  return (
    <ShineBorder
      className="relative flex h-12 w-[94%] lg:w-48 dark:hover:bg-slate-800 hover:bg-gray-100 items-center justify-center overflow-hidden rounded-full border bg-background "
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b  bg-clip-text text-center text-8xl font-semibold leading-none text-transparent ">
        <div className="flex flex-wrap justify-center items-center h-16 w-max"><span className=" text-black dark:text-slate-300 text-lg font-normal">{textName}</span> <img src={iconca} alt="icon" className="ml-4" /></div>
      </span>
    </ShineBorder>
  );
};

export default ShinyButtonDemo;
