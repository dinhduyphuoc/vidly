import React, { Component } from "react";
import Movies from "./components/movies";
import { getGenres } from "./services/fakeGenreService";
import { getMovies } from "./services/fakeMovieService";

class App extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  render() {
    return (
      <React.Fragment>
        <Movies />
      </React.Fragment>
    );
  }
}

export default App;
