import React, {useEffect, useState} from "react";
import "./index.css";
import Spinner from "../../components/Spinner"
import JobCard from '../../components/JobCard'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import salman from '../../assests/salman.jpg'
import Button from '../../components/Button'

const Jobs = () => {

    const [loading, setLoading] = useState(true);
    const [modal, showModal] = useState(false);
    const [showEmotes, setShowEmotes] = useState(false);
    const userName = "Dhruv Bhai";
    const userScore = 999;

    const scores = [90, 80, 70, 60, 50];
    const names = ["Jacob", "Aditya", "Niraj", "Ayaan", "DK"];

    const showEmoteBtns = names.map((name, i) => {
      return (
        <span key={i}><Button text="emote" id={i} onClick={i=>emotesOnClick(i)}></Button></span>
      )
    })

    const showNames = names.map((name, i) => {
      return (
          <span key={i}><p className="name" >{name}</p></span>
      )
    })

    const showScores = scores.map((score, i)=> {
      return (
        <p key={i} className="score"> {score} </p>
      )
    })

    function onClick() {
        showModal(!modal);
    }

    const emotesOnClick = (event) => {
      console.log(event.currentTarget.id);
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

            {/* DHRUVVVV BHAIIIII */}
            {modal &&
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span onClick={onClick} className="close">&times;</span>
                        <div className="modal-info">
                            <div>
                                <img src={salman} className="profile-img" alt='salman khan'/>
                            </div>
                            <div className="modal-info-text">
                                <h1 className="username">Hello {userName}</h1>
                                <p className="points">Your Score : {userScore}</p>
                            </div>
                        </div>
                        <div className="modal-leaderboard">
                            <h2 className="leaderboard">Leaderboard</h2>
                            <div className="modal-leaderboard-box">
                                <div className="modal-leaderboard-section">
                                    <span><h4 className="heading" >Name</h4></span>
                                    {showNames}
                                </div>
                                <div className="modal-leaderboard-section">
                                    <span><h4 className="heading">Emotes</h4></span>
                                    {showEmoteBtns}
                                </div>
                                <div className="modal-leaderboard-section">
                                    <span><h4 className="heading">Score</h4></span>
                                    {showScores}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
            showEmotes &&
                <div className="emotes-modal">

                </div>
            }


            {/* DHRUVVVV BHAIIIII */}

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
