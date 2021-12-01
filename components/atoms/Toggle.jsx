import React from "react";

export default function Toggle() {
  return (
    <label
      for="toggle-example"
      class="flex items-center cursor-pointer relative mb-4"
    >
      <input type="checkbox" id="toggle-example" class="sr-only" />
      <div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
      <span class="ml-3 text-gray-900 text-sm font-medium"></span>
    </label>
  );
}
