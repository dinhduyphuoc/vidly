import React, { Component } from "react";
import Movies from "./components/movies";
import Pagination from "./commons/pagination";
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

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = () => {};

  render() {
    const { length: count } = this.state.movies;

    return (
      <React.Fragment>
        <Movies
          data={this.state}
          onDelete={this.handleDelete}
          onLike={this.handleLike}
        />
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default App;
