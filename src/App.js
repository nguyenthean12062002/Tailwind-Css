import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="travel pt-12">
        <h1 className="text-center text-[#ffa400] text-[1.8rem] sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">
          Live anywhere
        </h1>
        <h3 className="text-center text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-gray-500 font-light mb-35">
          Kepp calm travel on
        </h3>
        <div className="grid grid-cols-1 gap-y-5 gap-x-4 md:grid-cols-3 max-w-[420px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1280px] mx-auto">
          <div>
            <div className="h-86 mb-5">
              <img
                src="https://cdn.dribbble.com/userupload/11088129/file/original-3485532ff2b8a8dc1f2a34080e3cff1d.jpg?resize=752x421"
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="mb-5 text-center font-medium text-[0.8rem] sm:text-[1rem] md:text-[1.2rem]">
              Enjojoy the great
            </h3>
            <span className="block text-center text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] text-gray-500 font-light">
              34546 properties
            </span>
          </div>
          <div>
            <div className="h-86 mb-5">
              <img
                src="https://cdn.dribbble.com/userupload/11088129/file/original-3485532ff2b8a8dc1f2a34080e3cff1d.jpg?resize=752x421"
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="mb-5 text-center font-medium text-[0.8rem] sm:text-[1rem] md:text-[1.2rem]">
              Enjojoy the great
            </h3>
            <span className="block text-center text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] text-gray-500 font-light">
              34546 properties
            </span>
          </div>
          <div>
            <div className="h-86 mb-5">
              <img
                src="https://cdn.dribbble.com/userupload/11088129/file/original-3485532ff2b8a8dc1f2a34080e3cff1d.jpg?resize=752x421"
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="mb-5 text-center font-medium text-[0.8rem] sm:text-[1rem] md:text-[1.2rem]">
              Enjojoy the great
            </h3>
            <span className="block text-center text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] text-gray-500 font-light">
              34546 properties
            </span>
          </div>
        </div>
      </div>
      <div className="button mt-[20px] mb-[60px]">
        <button className="inline-block text-[1rem] rounded-lg bg-[#333] text-[#fff] px-[12px] py-[4px] hover:bg-[blue] transition-colors">
          Confirm
        </button>
        <input
          className="ml-[12px] py-[20px] border border-[#333] w-[200px] h-[34px] focus:border-[#fff]"
          placeholder="an"
        />
      </div>
    </div>
  );
}

export default App;
