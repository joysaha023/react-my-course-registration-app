import React, { useEffect, useState } from "react";
import Course from "../course/Course";
import Cart from "../cart/Cart";

const courses = ({handleCourseSelect}) => {
    const [courseData, setCourseData] = useState([])

    useEffect(() =>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourseData(data))
    }, [])



  return (
    <div>
      
      <div className="flex flex-col lg:flex-row justify-center gap-4">
        <div className="basis-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
               courseData.map((course) => (
                <Course key={course.id} handleCourseSelect={handleCourseSelect} course={course}></Course>
               ))
            }
           
        </div>
        <div className="basis-[20%]">
            <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default courses;
