import React, { useEffect, useState } from "react";
import "./index.css";
import Spinner from "../../components/Spinner";
import JobCard from "../../components/JobCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import salman from "../../assests/salman.jpg";
import Button from "../../components/Button";
import { getAllJobs, getJob } from "./api.js";
import Select from "react-select";
import Input from "./components/Input";

const Jobs = () => {
  const [loading, setLoading] = useState(true);
  const [modal, showModal] = useState(false);
  const [showEmotes, setShowEmotes] = useState(false);
  const [points, setPoints] = useState(999);
  const userName = "Dhruv Bhai";

  const scores = [90, 80, 70, 60, 50];
  const names = ["Jacob", "Aditya", "Niraj", "Ayaan", "DK"];

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

  function onClick() {
    showModal(!modal);
  }

  const emotesOnClick = (event) => {
    setShowEmotes(!showEmotes);
    showModal(!modal);
  };

  const [allJobsStatic, setAllJobsStatic] = useState([]);
  const maxCardsPerPage = 20;

  useEffect(() => {
    const bitch = async () => {
      const allJobs = await getAllJobs();
      setAllJobsStatic(allJobs);
    };
    const loader = setTimeout(() => {
      setLoading(false);
    }, 700);
    bitch();
    return () => clearTimeout(loader);
  }, []);

  const options = [
    { value: "all", label: "All" },
    { value: "auckland", label: "Auckland" },
    { value: "sydney", label: "Sydney" },
    { value: "hongkong", label: "Hong Kong" },
  ];

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmitClick = () => {
    console.log(selectedLocation.value);
    console.log(selectedOption);
    const bitch = async () => {
      const allJobs = await getJob(selectedLocation.value, selectedOption);
      setAllJobsStatic(allJobs);
    };
    const loader = setTimeout(() => {
      setLoading(false);
    }, 700);
    bitch();
    return () => clearTimeout(loader);
  };

  return (
    <div className="jobs">
      {/* <Button text={"hello!"} handleChange={handleChange()}/> */}
      <div className="jobs-nav">
        <h1 className="jobs-found">Here are the jobs we found for you...</h1>
        <button className="profile-btn" onClick={onClick}>
          <FontAwesomeIcon icon={faUser} size="2x" />
        </button>
      </div>
      {/* DHRUVVVV BHAIIIII */}
      {modal && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span onClick={onClick} className="close">
              &times;
            </span>
            <div className="modal-info">
              <div>
                <img src={salman} className="profile-img" alt="salman khan" />
              </div>
              <div className="modal-info-text">
                <h1 className="username">Hello {userName}</h1>
                <p className="points">Your Score : {points}</p>
              </div>
            </div>
            <div className="modal-leaderboard">
              <h2 className="leaderboard">Leaderboard</h2>
              <div className="modal-leaderboard-box">
                <div className="modal-leaderboard-section">
                  <span>
                    <h4 className="heading">Name</h4>
                  </span>
                  {showNames}
                </div>
                <div className="modal-leaderboard-section">
                  <span>
                    <h4 className="heading">Emotes</h4>
                  </span>
                  {showEmoteBtns}
                </div>
                <div className="modal-leaderboard-section">
                  <span>
                    <h4 className="heading">Score</h4>
                  </span>
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
                      src="https://c.tenor.com/bmFPh10gQtQAAAAC/salman-khan.gif"
                      className="profile-img"
                      alt="salman khan"
                    />
                  </span>
                  <span>
                    <Button
                      text="50PP"
                      onClick={() => setPoints(points - 50)}
                    />
                  </span>
                  <span>
                    <img
                      src="https://c.tenor.com/WxxgkUaLvCsAAAAC/ghanta-salman.gif"
                      className="profile-img"
                      alt="salman khan"
                    />
                  </span>
                  <span>
                    <Button text="50PP" />
                  </span>
                </div>
                <div className="modal-leaderboard-section">
                  <span>
                    <img
                      src="https://c.tenor.com/w2mCAR7kgUsAAAAC/clash-royale-emotes.gif"
                      className="profile-img"
                      alt="salman khan"
                    />
                  </span>
                  <span>
                    <Button text="50PP" />
                  </span>
                  <span>
                    <img
                      src="https://c.tenor.com/YvwNrCfhvOIAAAAC/susu-varudhu-raghava-lawrence.gif"
                      className="profile-img"
                      alt="salman khan"
                    />
                  </span>
                  <span>
                    <Button text="50PP" />
                  </span>
                </div>
                <div className="modal-leaderboard-section">
                  <span>
                    <img
                      src="https://c.tenor.com/6GjVJS0Fn5cAAAAd/hila-lund.gif"
                      className="profile-img"
                      alt="salman khan"
                    />
                  </span>
                  <span>
                    <Button text="50PP" />
                  </span>
                  <span>
                    <img
                      src="https://c.tenor.com/XvJfOBkN33MAAAAM/modi-ji-tapa-tapa.gif"
                      className="profile-img"
                      alt="salman khan"
                    />
                  </span>
                  <span>
                    <Button text="50PP" />
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
          <Button onClick={handleSubmitClick} text={"submit"} />
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
};

export default Jobs;
