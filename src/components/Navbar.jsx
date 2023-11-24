import React from "react";
import { Card } from "@material-tailwind/react";

export function Navbar() {
  return (
    <Card className="bg-cyan-900 w-full h-20 flex justify-between items-center px-5">
      <div className="text-white text-lg font-bold">Joshua dos Santos</div>
      <div className="flex items-center space-x-4">
        <div className="text-white hover:text-gray-300 cursor-pointer transition duration-300">
          Home
        </div>
        <div className="text-white hover:text-gray-300 cursor-pointer transition duration-300">
          Projects
        </div>
        <div className="text-white hover:text-gray-300 cursor-pointer transition duration-300">
          Career
        </div>
      </div>
    </Card>
  );
}

export default Navbar;
