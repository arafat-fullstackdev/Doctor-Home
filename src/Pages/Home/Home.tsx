import clinic from "../../images/stap.webp";
export const Home = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center
     bg-yellow-50 w-fullmax-w-5xl mx-auto p-8 md:p-12 rounded-2xl shadow-sm border border-blue-100"
    >
      <div className="title flex-1 space-y-4 text-center md:text-left mb-4 md:mb-4">
        <h2 className=" text-4xl py-4  font-extrabold  text-black">Excellence in <br />
         <span className="text-blue-600 underline">Healthcare</span> With <br /> Compassionate Care</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna <br />
           aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

           <div className="highLight flex flex-row">
              <div className=" flex flex-col mx-3 px-2">
                 <p className="text-2xl font-extrabold text-blue-500">15+</p>
                 <p className="text-gray-300 font-medium">Years Experience</p>
              </div>
              <div className=" flex flex-col mx-3 px-2">
                 <p className="text-2xl font-extrabold text-blue-500">5000+</p>
                 <p className="text-gray-300 font-medium">Patients Treat</p>
              </div>
              <div className=" flex flex-col mx-3 px-2">
                 <p className="text-2xl font-extrabold text-blue-500">50+</p>
                 <p className="text-gray-300 font-medium">Medical expart</p>
              </div>
           </div>

      </div>

      <div className="img flex-1 flex justify-center md:justify-end">
        <img src={clinic}
         alt="Clinic Image" 
         className="w-full rounded-md shadow-md"/>
      </div>
    </div>
  );
};
