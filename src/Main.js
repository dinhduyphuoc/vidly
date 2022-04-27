import React, { Component } from "react";
import _ from "lodash";
import NavBar from "./components/commons/navBar";
import Movies from "./components/movies";
import Pagination from "./components/commons/pagination";
import ListGroup from "./components/commons/listgroups";
import { getGenres } from "./services/fakeGenreService";
import { getMovies } from "./services/fakeMovieService";
import { Route, Redirect, Switch } from "react-router-dom";
class Main extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  // Lifecycle Hook
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres, selectedGenre: genres[0] });
  }

  getPagedData = (selectedGenre, sortColumn) => {
    const filtered =
      selectedGenre && selectedGenre._id
        ? this.state.movies.filter((m) => m.genre._id === selectedGenre._id)
        : this.state.movies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    return { totalCount: filtered.length, items: sorted };
  };

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

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { genres, selectedGenre, sortColumn } = this.state;

    const { totalCount, items: movies } = this.getPagedData(
      selectedGenre,
      sortColumn
    );

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Movies
            data={this.state}
            items={movies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            data={this.state}
            itemsCount={totalCount}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Main;
