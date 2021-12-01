import React from "react";

export default function Button({ children }) {
  return (
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3"
    >
      {children}
    </button>
  );
}
