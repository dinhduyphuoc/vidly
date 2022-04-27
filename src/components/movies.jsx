import React from "react";
import MoviesTable from "./moviesTable";
import { paginate } from "../utils/paginate";

const Movies = (props) => {
  const { currentPage, pageSize, sortColumn } = props.data;
  const { onDelete, onLike, onSort, items } = props;

  const movies = paginate(items, currentPage, pageSize);

  const moviesCount = movies.length;
  if (moviesCount === 0) return <p>There are no movies in the database.</p>;

  return (
    <React.Fragment>
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
