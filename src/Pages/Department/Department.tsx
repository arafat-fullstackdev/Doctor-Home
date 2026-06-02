const Department = () => {
  return (
    <div
      className="w-full max-w-5xl mx-auto p-6 md:p-12 bg-white  border-blue-100 "
    >
      <section className="bg-white py-16 px-4 flex flex-col items-center justify-center text-center">
        <h2 className="text-center text-3xl md:text-2xl font-semibold text-slate-900 tracking-tight">
          Eeature Department
        </h2>

        <div className="mt-4 flex items-center justify-center w-full max-w[150px]">
          <div className="h-0.5 bg-slate-300 flex-1"></div>
          <div className="h-1 bg-blue-600 w-12 rounded-sm z-10"></div>
          <div className="h-0.5 bg-slate-300 flex-1"></div>
        </div>

        <p className="mt-6 text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed ">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit


        </p>
      </section>
    </div>
  );
};

export default Department;
