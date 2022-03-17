import React from 'react';

const StudentsCard = (props) => {
  return (
    <div className="w-75 m-auto p-4 card" style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', marginTop : '1.4em'}}>
      <p className="m-1">Name : <span>{props.name}</span> </p>
      <p className="m-1">Standard : <span>{props.std}</span> </p>
      <p className="m-1">Roll no. : <span>{props.roll}</span> </p>
    </div>
  )
}

export default StudentsCard;