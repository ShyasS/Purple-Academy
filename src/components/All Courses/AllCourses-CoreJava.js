import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
function AllCoursesCoreJava() {
    const data = [
        {
            id:1,
            title:"Core Java"
        },
        {
            id:2,
            title:"DevOps and Cloud Computing"
        },
        {
            id:3,
            title:"Software Quality Assurance"
        }
    ]
    const {id} =  useParams();
    const [product,SetProducts] = useState(data);
  return (
    <div>
        {product.map((data) =>
      <h1>CoreJava:{data.id}</h1>
      )}
    </div>
  );
}

export default AllCoursesCoreJava;
