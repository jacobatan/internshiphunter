import React from "react";
import "./index.css";
import Spinner from "../../components/Spinner"
import JobCard from '../../components/JobCard'
import { useEffect } from "react";
import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser } from '@fortawesome/free-solid-svg-icons'

const Jobs = () => {

  const [loading, setLoading] = useState(true);
  const [modal, showModal] = useState(false);

  function onClick() {
    showModal(!modal);
  }


  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(loader);
  }, []);
  

  return (
    <div className="jobs">
        {/* <Button text={"hello!"} handleChange={handleChange()}/> */}  
      <div className="jobs-nav">
        <h1 className="jobs-found">
            Here are the jobs we found for you...
        </h1>
        <button className="profile-btn" onClick={onClick}>
          <FontAwesomeIcon icon={faUser} size="2x"/>
        </button>
        
      </div>

      { modal && 
        <div id="myModal" className="modal">
          <div className="modal-content">
          <span onClick={onClick} className="close">&times;</span>
          <p>hi dhruv bhai</p>
          </div>
        </div>
      }

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

  
      
      
      
    </div>
  )
};

export default Jobs;
