import logo from "./logo.svg";
import "./App.css";
import InputLabel from "./components/InputLabel";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="">
      <div className="h-screen flex  overflow-y-auto">
        {/* Left section */}
        <div className="w-1/4 bg-blue-300">
          <div className="m-2 p-2 bg-white rounded-sm">
            <div className="w-full border p-2 mb-2 bg-blue-300 text-white font-bold text-lg">
              Key info
            </div>
            <InputLabel str="Title" />
            <InputLabel str="First Name" />
            <InputLabel str="Surname" />
            <InputLabel str="Email" />
            <InputLabel str="Mobile" />
            <hr />
            <h3 className="font-bold text-sm underline">Address</h3>
            <div className="flex justify-between border rounded-full px-2 mt-2">
              {" "}
              <div className="text-xs font-thin text-center m-1">
                Find your address
              </div>
              <div>🔍</div>{" "}
            </div>
            <InputLabel str="Unit" />
            <InputLabel str="Street" />
            <InputLabel str="Suburb" />
            <InputLabel str="State" />
            <InputLabel str="Postcode" />
          </div>
          <div className="m-2 p-2 bg-white rounded-sm">
            <div className="w-full border p-2 mb-2 bg-blue-300 text-white font-bold text-lg">
              Status info
            </div>
            <InputLabel str="Status" />
            <InputLabel str="Start Date" />
            <InputLabel str="Expiry Date" />
            <hr />
            <InputLabel str="Reason for not interested" />
            <InputLabel str="Reason for no product available" />
          </div>
        </div>
        {/* End of left section */}
        <div className="w-2/3 bg-tabContent">
          <div className="h-[20vh] m-2 p-2 bg-white rounded-sm">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="col-span-1 bg-blue-400 p-4 border rounded-xl text-center font-extrabold text-lg ">
                Mrs. Lousiana Jane
              </div>
              <div className="col-span-1 bg-blue-400 p-4 border rounded-xl text-center font-extrabold text-lg">
                Lead no: 123123
              </div>
              <div className="col-span-1 bg-blue-400 p-4 border rounded-xl text-center font-extrabold text-lg">
                Date: 12/12/2023 5:29:23 PM
              </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-4 gap-x-4 gap-y-4">
              <div className="bg-purple-300 border rounded-lg font-semibold  p-2">
                <InputLabel str="Owner" />
              </div>
              <div className="bg-purple-300 border rounded-lg font-semibold  p-2">
                <InputLabel str="Company" />
              </div>
              <div className="bg-purple-300 border rounded-lg font-semibold  p-2">
                <InputLabel str="Product" />
              </div>
              <div className="bg-purple-300 border rounded-lg font-semibold  p-2">
                <InputLabel str="Referral" />
              </div>
              <div className="bg-purple-300 border rounded-lg font-semibold  p-2">
                <InputLabel str="Assigned to" />
              </div>
              <div className="bg-purple-300 border rounded-lg font-semibold  p-2">
                <InputLabel str="Bank Statements" />
              </div>
              <div className="bg-purple-300 border rounded-lg font-semibold  p-2">
                <InputLabel str="Default" />
              </div>
              <div className="bg-purple-300 border rounded-lg font-semibold  p-2">
                <InputLabel str="Contact time" />
              </div>
            </div>
          </div>

          <div className="m-2 p-2 bg-white rounded-sm ">
            <div className="w-full border p-2 mb-2 bg-blue-300 text-white font-bold text-lg">
              Lead Notes
            </div>
            <input
              className="h-[30vh] w-full border rounded-lg p-2"
              type="text"
            ></input>
          </div>
          <div className="m-2 p-2 bg-white rounded-sm ">
            <div className="w-full border p-2 mb-2 bg-blue-300 text-white font-bold text-lg">
              App Notes
            </div>
            <input
              className="h-[30vh] w-full border rounded-lg p-2"
              type="text"
            ></input>
          </div>
        </div>
        <div className="w-1/4 bg-blue-300">
          {" "}
          <div className="m-2 p-2 bg-white rounded-sm">
            <div className="w-full border p-2 mb-2 bg-blue-300 text-white font-bold text-lg">
              Tabs
            </div>
            <Tabs str="Open Web App" />
            <Tabs str="Open Budget" />
            <Tabs str="Open Financial Summary" />
            <Tabs str="Send Template" />
          </div>
          <div className="m-2 p-2 bg-white rounded-sm">
            <div className="w-full border p-2 mb-2 bg-blue-300 text-white font-bold text-lg">
              Debts
            </div>
            <InputLabel str="Debt amount" />
            <InputLabel str="How much would you like to borrow? " />
            <InputLabel str="Property" />
            <InputLabel str="Total loan" />
            <InputLabel str="Lender" />
            <InputLabel str="LVR" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
