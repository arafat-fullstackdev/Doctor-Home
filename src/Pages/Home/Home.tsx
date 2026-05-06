import clinic from "../../images/stap.webp";
export const Home = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center
     bg-blue-100 w-fullmax-w-5xl mx-auto p-8 md:p-12 rounded-2xl shadow-sm border border-blue-100"
    >
      <div className="title flex-1 space-y-4 text-center md:text-left mb-4 md:mb-4">
        <h2 className=" text-3xl font-bold text-black">Your Home Clinic</h2>
      </div>

      <div className="img flex-1 flex justify-center md:justify-end">
        <img src={clinic}
         alt="Clinic Image" 
         className="w-full rounded-md shadow-md"/>
      </div>
    </div>
  );
};
