import React, {useState} from 'react';
import axios from 'axios';

const Registration = () => {

  const [studentData, setStudentData] = useState({
    name : "",
    std : "",
    roll : ""
  });

  let name, value;
  const fillData = (e) => {
    
    name = e.target.name;
    value = e.target.value;
    setStudentData({...studentData, [name] : value});

  }

  const postData = async (e) => {
    e.preventDefault();

    const {name, std, roll} = studentData;

    try{
      const res = await axios.post('https://fierce-plateau-21755.herokuapp.com/register', {
        name: name,
        std: std,
        roll: roll
      });

      console.log(res);
      if(res){
        alert("Registration Successfull");
      }
    }
    catch (e) {
      console.log(e);
    }

  }

  return (
    <div className="m-auto container m-3">
      <h1 className="text-center m-5 p-5">Register Student</h1>
      <form method = "POST" className="container m-auto m-3">

        <div class="mb-3">
          <label for="name" class="form-label">Name of the student : </label>
          <input name="name" type="text" class="form-control" id="nameid" placeholder="Ravi Kumar" value = {studentData.name} onChange={fillData}/>
        </div>

        <div class="mb-3">
          <label for="standard" class="form-label">Standard of the student : </label>
          <input name="std" type="number" class="form-control" id="numberid" placeholder="10" value = {studentData.std} onChange={fillData}/>
        </div>

        <div class="mb-3">
          <label for="roll" class="form-label">Roll no. of the student : </label>
          <input name="roll" type="number" class="form-control" id="nameid" placeholder="77" value = {studentData.roll} onChange={fillData}/>
        </div>

        <button type="submit" class="p-3 btn btn-primary w-100 mb-5" onClick={postData}>REGISTER</button>

      </form>
    </div>
  ) 
}

export default Registration