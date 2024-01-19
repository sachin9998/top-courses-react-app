import { useState } from "react";
import Card from "./Card";

function Cards(props) {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);


  // Converting data into single array
  // returns you a list of all courses received from the API Response
  function getCourses() {

    if (category === "All") {
      let allCourses = [];

      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        })
      })

      return allCourses;
    }

    else {
      // Sirf specific category data should be passed
      return courses[category];
    }

  }

  return (

    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
      ))}
    </div>

  );
}

export default Cards;
