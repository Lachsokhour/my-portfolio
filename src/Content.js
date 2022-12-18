import "./App.css";

function Content() {
  return (
    <div className="justify-center">
      <div className="flex flex-row w-full text-center">
        {/* <div className="w-1/2 h-screen bg-blue-200"> */}
        <div className="flex flex-row">
          <div className="pt-6 pl-5">
            <div>
              <img
                className="shadow-lg
                rounded-full w-40 h-40"
                src="/profile.jpg"
                alt="My Profile"
              ></img>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* <div className="w-1/2 h-screen bg-gray-200"></div> */}
      </div>
    </div>
  );
}

export default Content;
