import axios from "axios"

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "57eb58bd613c68c96e64866031eaf9e7",
    lenguage: "en-US"
  }
})

export default movieDB