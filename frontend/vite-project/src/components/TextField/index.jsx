import React from "react";
import PropsTypes from "prop-types";

export default function TextField({
  id,
  label,
  state,
  setState,
  error,
  width = "w-full",
  height = "h-24",
}) {
  return (
    <div className={`${width} max-w-sm min-w-[200px] ${height}`} id={id}>
      <div className="relative">
        <input
          className={`peer w-full bg-transparent placeholder:text-slate-400 text-gray text-sm border border-gray rounded-xl px-3 py-2 transition duration-300 ease focus:outline-none  shadow-sm focus:shadow hover:shadow-md hover:shadow-gray ${
            error && "border-red"
          }`}
          onChange={(e) => setState(e.target.value)}
          value={state}
        />
        <label
          className={`absolute cursor-text bg-white px-1 left-2.5 ${
            state.length > 0 ? "-top-2.5" : "top-2.5"
          } text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-gray peer-focus:scale-90 ${
            error && "text-red-500"
          }`}
        >
          {label}
        </label>
      </div>
    </div>
  );
}

TextField.propTypes = {
  id: PropsTypes.string.isRequired,
  label: PropsTypes.string.isRequired,
  state: PropsTypes.string.isRequired,
  setState: PropsTypes.func.isRequired,
  error: PropsTypes.bool,
  width: PropsTypes.string,
  height: PropsTypes.string,
  type: PropsTypes.string,
};
