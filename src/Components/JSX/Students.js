import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StudentsCard from './StudentsCard';

const Students = () => {

  const [students, setStudents] = useState([]);

  const fetchData = async () => {
    try{
      const res = await axios.get('https://fierce-plateau-21755.herokuapp.com/fetchData');
      setStudents(res.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  })

  return (
    <div className="m-auto container mt-5">
      
      <h1 className="text-center mt-5 p-5">All Students</h1>

      {
        students.map((student) => {
          return <StudentsCard name = {student.name} std = {student.std} roll = {student.roll} />
        })
      }

      <button className="btn btn-primary w-75 mt-5" onClick={fetchData}>Refresh</button>
    </div>
  ) 
}

export default Students;