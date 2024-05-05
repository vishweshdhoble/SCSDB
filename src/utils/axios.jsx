import axios from "axios";

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWQzZmQ2ZmNkOWY2ZTA4MTE0ZjFhZTYwYTMxYzU5MiIsInN1YiI6IjY2MzY2N2U0MGY1MjY1MDEyOGJiNjQyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m4uG38PuhVeFofz2Ul1yIE0-vtNnLLP0ELcRmOmZMg0'
      }
})

export default instance;