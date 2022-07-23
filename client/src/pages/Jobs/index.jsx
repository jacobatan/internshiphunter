import React, {useEffect, useState} from "react";
import "./index.css";
import Spinner from "../../components/Spinner"
import JobCard from '../../components/JobCard'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import salman from '/Users/dhruvkanthpuli/Documents/modal-wdcc/internshiphunter/client/src/assests/salman.jpg'

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
                                <h1>hi dhruv bhai</h1>
                                <h4>Your Score : 999999</h4>
                            </div>
                        </div>
                        <div className="modal-leaderboard">
                            <h2>Leaderboard</h2>
                            <div className="modal-leaderboard-box">
                                <div className="modal-leaderboard-section">
                                    <span><h4>Name</h4></span>
                                    <span>Jacob</span>
                                    <span>Aditya</span>
                                    <span>Niraj</span>
                                    <span>Ayaan</span>
                                    <span>DK</span>
                                </div>
                                <div className="modal-leaderboard-section">
                                    <span><h4>Emotes</h4></span>
                                    <span><button>emote</button></span>
                                    <span><button>emote</button></span>
                                    <span><button>emote</button></span>
                                    <span><button>emote</button></span>
                                    <span><button>emote</button></span>
                                </div>
                                <div className="modal-leaderboard-section">
                                    <span><h4>Score</h4></span>
                                    <span>90</span>
                                    <span>80</span>
                                    <span>70</span>
                                    <span>60</span>
                                    <span>50</span>
                                </div>
                            </div>
                        </div>
                    </div>
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
