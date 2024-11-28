import { useReducer } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import TextField from "../../components/TextField";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_TELEPHONE_NUMBER":
      // Add validation for telephone number
      if (isNaN(action.payload) || state.telephoneNumber.length > 8)
        return state;
      return { ...state, telephoneNumber: action.payload };
    case "SET_ROLE":
      return { ...state, role: action.payload };
    case "SET_FREE_WEEKENDS":
      return { ...state, freeWeekends: action.payload };
    case "SET_CUSTOM_HOURS":
      return { ...state, customHours: action.payload };
    default:
      return state;
  }
};

export default function Employee() {
  const [state, dispatch] = useReducer(reducer, {
    firstName: "",
    lastName: "",
    email: "",
    telephoneNumber: "",
    role: "staff",
    freeWeekends: false,
    customHours: [
      { day: "Monday", startHour: "", endHour: "" },
      { day: "Tuesday", startHour: "", endHour: "" },
      { day: "Wednesday", startHour: "", endHour: "" },
      { day: "Thursday", startHour: "", endHour: "" },
      { day: "Friday", startHour: "", endHour: "" },
      { day: "Saturday", startHour: "", endHour: "" },
      { day: "Sunday", startHour: "", endHour: "" },
    ],
  });

  const handleTextFields = (text, type) => {
    dispatch({ type, payload: text });
  };

  const handleHourChange = (index, field, value) => {
    const newCustomHours = [...state.customHours];
    newCustomHours[index][field] = value;
    dispatch({ type: "SET_CUSTOM_HOURS", payload: newCustomHours });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const payload = {
      fName: state.firstName,
      lName: state.lastName,
      email: state.email,
      cellphone: state.telephoneNumber,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/employees`,
        payload
      );
      if (response.status === 201) {
        toast.success("Employee added successfully");
      }
    } catch (error) {
      toast.error(
        error.response.data.message ||
          "An error occurred, please try again later"
      );
    }
  };

  return (
    <section className="flex justify-center items-center">
      <article className="box-border border border-solid border-black shadow-md p-5 rounded-sm w-[80%] mt-10 mb-10">
        <form className="flex flex-col">
          <div className="w-full flex justify-center ">
            <h1 className="text-2xl font-bold">Add New Employee</h1>
          </div>
          <div className="flex gap-3 ">
            {/* Left side */}
            <div className="w-1/2 flex flex-col gap-5 items-center">
              <div className="flex gap-5">
                <TextField
                  id="first-name"
                  label="First Name"
                  setState={(e) => handleTextFields(e, "SET_FIRST_NAME")}
                  state={state.firstName}
                  height="h-8"
                />
                <TextField
                  id="last-name"
                  label="Last Name"
                  setState={(e) => handleTextFields(e, "SET_LAST_NAME")}
                  state={state.lastName}
                  height="h-8"
                />
              </div>
              <TextField
                id="email"
                label="Email"
                setState={(e) => handleTextFields(e, "SET_EMAIL")}
                state={state.email}
                height="h-8"
              />
              <TextField
                id="telephone-number"
                label="Telephone Number"
                setState={(e) => handleTextFields(e, "SET_TELEPHONE_NUMBER")}
                state={state.telephoneNumber}
                height="h-8"
              />
              <label className="flex flex-col w-full items-center">
                <h1 className="text-xl font-bold">Role</h1>
                <select
                  value={state.role}
                  onChange={(e) =>
                    dispatch({ type: "SET_ROLE", payload: e.target.value })
                  }
                  className="w-1/3 bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="staff">Staff</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                </select>
              </label>
              <label className="flex justify-center flex-col items-center">
                <h1 className="text-xl font-bold"> Free Weekends</h1>
                <input
                  type="checkbox"
                  checked={state.freeWeekends}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_FREE_WEEKENDS",
                      payload: e.target.checked,
                    })
                  }
                  className="ml-2"
                />
              </label>
            </div>
            {/* Separator */}
            <div className="box-border border-solid border border-black opacity-25"></div>
            {/* Right side */}
            <div className="w-1/2">
              <label className="flex items-center flex-col justify-center">
                <h1 className="text-xl mb-3 font-bold">Custom Hours</h1>
                {state.customHours.map((customHour, index) => (
                  <div
                    key={customHour.day}
                    className="w-full flex flex-col items-center gap-1"
                  >
                    <label className="self-center text-lg font-medium">
                      {customHour.day}:
                    </label>
                    <div className="w-full flex gap-5 justify-center">
                      <input
                        type="time"
                        value={customHour.startHour}
                        onChange={(e) =>
                          handleHourChange(index, "startHour", e.target.value)
                        }
                        placeholder="Start Hour"
                        className="w-1/4 bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                      <input
                        type="time"
                        value={customHour.endHour}
                        onChange={(e) =>
                          handleHourChange(index, "endHour", e.target.value)
                        }
                        placeholder="End Hour"
                        className="w-1/4 bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                ))}
              </label>
            </div>
          </div>
          {/* Send Button */}
          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Employee
            </button>
          </div>
        </form>
      </article>
      <ToastContainer position="bottom-right" />
    </section>
  );
}
