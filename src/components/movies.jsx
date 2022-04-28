import React from "react";
import MoviesTable from "./moviesTable";
import { paginate } from "../utils/paginate";
import { Link } from "react-router-dom";

const Movies = (props) => {
  const { currentPage, pageSize, sortColumn } = props.data;
  const { onDelete, onLike, onSort, items } = props;

  const movies = paginate(items, currentPage, pageSize);

  const moviesCount = movies.length;
  if (moviesCount === 0) return <p>There are no movies in the database.</p>;

  return (
    <React.Fragment>
      <Link to="/movies/new">
        <button className="btn btn-primary">New Movie</button>
      </Link>
      <p>Showing {moviesCount} movies in the database.</p>

      <MoviesTable
        movies={movies}
        sortColumn={sortColumn}
        onLike={onLike}
        onDelete={onDelete}
        onSort={onSort}
      />
    </React.Fragment>
  );
};

export default Movies;
