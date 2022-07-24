import React, {useEffect, useState} from "react";
import "./index.css";
import Spinner from "../../components/Spinner";
import JobCard from "../../components/JobCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import salman from "../../assests/salman.jpg";
import Button from "../../components/Button";
import {getAllJobs, getGif, getJob} from "./api.js";
import Select from "react-select";
import Input from "./components/Input";
import axios from "axios";

const Jobs = () => {
    const [loading, setLoading] = useState(true);
    const [modal, showModal] = useState(false);
    const [showEmotes, setShowEmotes] = useState(false);
    const [points, setPoints] = useState(100);
    const [showGif, setShowGif] = useState(false);
    const userName = "Dhruv";

    const scores = [90, 80, 70, 60, 50];
    const names = ["Jacob", "Aditya", "Niraj", "Ayaan", "Mukesh."];
    const gif = [
        "https://c.tenor.com/bmFPh10gQtQAAAAC/salman-khan.gif", "https://c.tenor.com/WxxgkUaLvCsAAAAC/ghanta-salman.gif",
        "https://c.tenor.com/w2mCAR7kgUsAAAAC/clash-royale-emotes.gif", "https://c.tenor.com/YvwNrCfhvOIAAAAC/susu-varudhu-raghava-lawrence.gif",
        "https://c.tenor.com/a24Gl3uJus8AAAAM/salman-khan-angry.gif", "https://c.tenor.com/XvJfOBkN33MAAAAM/modi-ji-tapa-tapa.gif"
    ]

    const showEmoteBtns = names.map((name, i) => {
        return (
            <span key={i}>
        <Button text="emote" id={i} onClick={(i) => emotesOnClick(i)}></Button>
      </span>
        );
    });

    const showNames = names.map((name, i) => {
        return (
            <span key={i}>
        <p className="name">{name}</p>
      </span>
        );
    });

    const showScores = scores.map((score, i) => {
        return (
            <p key={i} className="score">
                {" "}
                {score}{" "}
            </p>
        );
    });

    const [theGifURL, setTheGifURL] = useState("")

    async function onProfileClick() {
        console.log("pain")
        try {
            const data = await getGif();
            setTheGifURL(data[0].gifURL);
            setShowGif(true);
        } catch (e) {
            console.log(e)
        }
        showModal(true);
    }

    function onClick() {
        showModal(false);
        setShowGif(false);
    }

    function onGifTeriMaa() {
        setTheGifURL("")
    }

    const emotesOnClick = (event) => {
        setShowEmotes(!showEmotes);
        showModal(!modal);
    };

    const [allJobsStatic, setAllJobsStatic] = useState([]);
    const maxCardsPerPage = 20;

    useEffect(() => {
        const temp = async () => {
            const allJobs = await getAllJobs();
            setAllJobsStatic(allJobs);
        };
        const loader = setTimeout(() => {
            setLoading(false);
        }, 700);
        temp();
        return () => clearTimeout(loader);
    }, []);

    const options = [
        {value: "all", label: "All"},
        {value: "auckland", label: "Auckland"},
        {value: "sydney", label: "Sydney"},
        {value: "hongkong", label: "Hong Kong"},
    ];

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSubmitClick = () => {
        console.log(selectedLocation.value);
        console.log(selectedOption);
        const temp = async () => {
            const allJobs = await getJob(selectedLocation.value, selectedOption);
            setAllJobsStatic(allJobs);
        };
        const loader = setTimeout(() => {
            setLoading(false);
        }, 700);
        temp();
        return () => clearTimeout(loader);
    };

    async function emoteClick(e) {
        points < 50 ? setPoints(points) : setPoints(points - 50)
        const gifLink = gif[e.currentTarget.id];
        try {
            const res = await axios.post(
                "https://internship-hunter.herokuapp.com/api/gifs",
                {"gifURL": gifLink}
            );
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="jobs">
            {/* <Button text={"hello!"} handleChange={handleChange()}/> */}
            <div className="jobs-nav">
                <h1 className="jobs-found">Here are the jobs we found for you...</h1>
                <button className="profile-btn" onClick={onProfileClick}>
                    <FontAwesomeIcon icon={faUser} size="2x"/>
                </button>
            </div>
            {/* DHRUVVVV BHAIIIII */}
            {theGifURL !== "" &&
                <div className="modal">
                    <div className="modal-content">
                        <img src={theGifURL} alt="hello"/>
                        <span onClick={onGifTeriMaa} className="close">
                          &times;
                        </span>
                    </div>
                </div>
            }

            {modal && (
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span onClick={onClick} className="close">
                            &times;
                        </span>
                        <div className="modal-info">
                            <div>
                                <img src={salman} className="profile-img" alt="salman khan"/>
                            </div>
                            <div className="modal-info-text">
                                <h1 className="username">Hello {userName}</h1>
                                <p className="points">Your Score : {points}</p>
                            </div>
                        </div>
                        <div className="modal-leaderboard">
                            <h2 className="leaderboard">Your Friends</h2>
                            <div className="modal-leaderboard-box">
                                <div className="modal-leaderboard-section">
                                    <span><h4 className="heading">Name</h4></span>
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
            )}

            {showEmotes && (
                <div id="myModal" className="modal">
                    <div className="modal-content">
            <span onClick={emotesOnClick} className="close">
              &times;
            </span>
                        <div className="modal-leaderboard">
                            <h1 className="points-score">Points : {points}</h1>
                            <div className="modal-leaderboard-box">
                                <div className="modal-leaderboard-section">
                  <span>
                    <img
                        src={gif[0]}
                        className="profile-img"
                        alt="salman khan"
                    />
                  </span>
                                    <span>
                    <Button
                        text="50PP"
                        id={0}
                        onClick={(e) => emoteClick(e)}
                    />
                  </span>
                                    <span>
                    <img
                        src={gif[1]}
                        className="profile-img"
                        alt="salman khan"
                    />
                  </span>
                                    <span>
                    <Button text="50PP"
                            id={1}
                            onClick={(e) => emoteClick(e)}
                    />
                  </span>
                                </div>
                                <div className="modal-leaderboard-section">
                  <span>
                    <img
                        src={gif[2]}
                        className="profile-img"
                        alt="salman khan"
                    />
                  </span>
                                    <span>
                    <Button text="50PP"
                            id={2}
                            onClick={(e) => emoteClick(e)}
                    />
                  </span>
                                    <span>
                    <img
                        src={gif[3]}
                        className="profile-img"
                        alt="salman khan"
                    />
                  </span>
                                    <span>
                    <Button text="50PP"
                            id={3}
                            onClick={(e) => emoteClick(e)}
                    />
                  </span>
                                </div>
                                <div className="modal-leaderboard-section">
                  <span>
                    <img
                        src={gif[4]}
                        className="profile-img"
                        alt="salman khan"
                    />
                  </span>
                                    <span>
                    <Button text="50PP"
                            id={4}
                            onClick={(e) => emoteClick(e)}
                    />
                  </span>
                                    <span>
                    <img
                        src={gif[5]}
                        className="profile-img"
                        alt="salman khan"
                    />
                  </span>
                                    <span>
                    <Button text="50PP"
                            id={5}
                            onClick={(e) => emoteClick(e)}
                    />
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* DHRUVVVV BHAIIIII */}
            <div className="dropdown__select--wrapper">
                <div className="dropdown__select">
                    <Select
                        placeholder={"Pick a location"}
                        defaultValue={selectedLocation}
                        onChange={setSelectedLocation}
                        options={options}
                    />
                    <Input
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <Button onClick={handleSubmitClick} text={"submit"}/>
                </div>
            </div>
            {loading ? (
                <div className="loading">
                    {" "}
                    <Spinner> </Spinner>
                </div>
            ) : (
                <div className="show-jobs">
                    {allJobsStatic?.map(
                        (job, i) =>
                            i < maxCardsPerPage && (
                                <JobCard
                                    key={i}
                                    link={job.link}
                                    title={job.company}
                                    content={job.jobDesc}
                                    subtitle={job.jobTitle}
                                />
                            )
                    )}
                </div>
            )}
        </div>
    );
}
export default Jobs;
