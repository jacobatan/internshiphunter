import React from "react";
import "./index.css";
import Button from "../../components/Button";

const Jobs = () => {

  function handleChange() {
    console.log('hi');
  }

  return (
    <div>
        <Button text={"hello!"} handleChange={handleChange()}/>
    </div>
  )
};

export default Jobs;
