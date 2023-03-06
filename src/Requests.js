const API_KEY = "fc39dd420e97c55872b1e573d732afd8";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&laguage=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMoviews: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
