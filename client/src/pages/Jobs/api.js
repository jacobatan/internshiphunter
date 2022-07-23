import Axios from "axios";

export async function getAllJobs() {
  try {
    const response = await Axios.get(
      "https://internship-hunter.herokuapp.com/api/jobs/static"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getJob(location, field) {
  console.log(location, field);
  const URL = `https://internship-hunter.herokuapp.com/api/jobs?field=${field}&location=${location}`;
  try {
    const response = await Axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
