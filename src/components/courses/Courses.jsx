import React, { useEffect, useState } from "react";
import Course from "../course/Course";
import Cart from "../cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const totalCredits = 15;

const courses = () => {
    const [courseData, setCourseData] = useState([])
    const [carts, setCarts] = useState([])

    useEffect(() =>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourseData(data))
    }, [])

    const handleCourseSelect = (course) => {
        // console.log(course)
        const credits = carts.reduce((p, c) => p + c.credit, 0)

        if(credits + course.credit > totalCredits)
            toast.error(`only ${totalCredits} credits allowed`);
        const alreadyExists = carts.find(c =>c.id == course.id);
        if(!alreadyExists) {
            setCarts((c) => [...c, course]);
            return toast.success("Course Added");
        }else{
            return toast.warn("Course already selected")
        }
        // setCarts(c=>[...c, course])
      }


  return (
    <div>
      
      <div className="flex flex-col lg:flex-row justify-center gap-4">
        <div className="basis-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
               courseData.map((course) => (
                <Course key={course.id} handleCourseSelect={handleCourseSelect} course={course}></Course>
               ))
            }
           
        </div>
        <div className="basis-[25%]">
            <Cart carts={carts}></Cart>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default courses;
