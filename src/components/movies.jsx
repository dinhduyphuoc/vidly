import React from "react";
import Like from "../commons/like";

const Movies = (props) => {
  const { movies } = props.data;
  const { onDelete, onLike } = props;

  const moviesCount = movies.length;
  if (moviesCount === 0) return <p>There are no movies in the database.</p>;

  return (
    <React.Fragment>
      <p>Showing {moviesCount} movies in the database.</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onLike={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger m-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Movies;
