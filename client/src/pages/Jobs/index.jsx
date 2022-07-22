import React from "react";
import "./index.css";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner"
import JobCard from '../../components/JobCard'
import { useEffect } from "react";
import { useState } from "react";

const Jobs = () => {

  function onClick() {
    console.log('hello');
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(loader);
  }, []);
  

  return (
<<<<<<< Updated upstream
    <div className="jobs">
        {/* <Button text={"hello!"} handleChange={handleChange()}/> */}  
      <h1 className="jobs-found">
          Here are the jobs we found for you...
      </h1>
      {
        loading ? 
          <div className="loading">
            <Spinner> </Spinner>
          </div>
        : 
          <div className="show-jobs">
                <JobCard 
                  title="Google"
                  content="hi"
                  subtitle="software intern"
                />
                <JobCard 
                  title="Google"
                  content="be pro software engineer"
                  subtitle="software intern"
                />
                <JobCard 
                  title="Google"
                  content="be pro software engineer"
                  subtitle="software intern"
                />
            </div>
      }

  
      
      
      
=======
    <div>
        <Button text={"hello!"} onClick={onClick()}/>
>>>>>>> Stashed changes
    </div>
  )
};

export default Jobs;
