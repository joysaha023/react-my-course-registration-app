import React from "react";
import Course from "../course/Course";
import Cart from "../cart/Cart";

const courses = () => {
  return (
    <div>
      <h1>Courses</h1>
      <div className="flex flex-col lg:flex-row justify-center gap-4">
        <div className="basis-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
        </div>
        <div className="basis-[20%]">
            <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default courses;
