import Form from "./commons/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovies, getMovie, saveMovie } from "./../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const { path } = this.props.match;
    if (path.includes("new")) return;

    const movieId = this.props.match.params.id;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapToDisplaySchema(movie) });
  }

  schema = {
    _id: Joi.string().allow(null, ""),
    title: Joi.string().max(100).required().label("Title"),
    genreId: Joi.string().max(100).required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number In Stock"),
    dailyRentalRate: Joi.number().min(0).max(5).required().label("Rate"),
  };

  mapToDisplaySchema = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  doSubmit = () => {
    const check = saveMovie(this.state.data);
    console.log(check);
    this.props.history.push("/movies");
  };

  render() {
    const { genres } = this.state;
    return (
      <div>
        <h2>Adding new movie: </h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", genres)}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
