import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-10 text-center mt-20">
      <div className="mb-4">
        <p className="m-4">Team Members: Manojith Bhat Vriddi Shetty Deeksha Hegde Sanjana Bhagwath</p>
        <p className="text-slate-400">Design Thinking Lab</p>
        <p>Department of Information Sceince and Engineering</p>
        <p>R V College of Engineering</p>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}
