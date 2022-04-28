import Form from "./commons/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", rate: "" },
    genres: [],
    errors: {},
  };

  componentDidMount() {
    const genres = getGenres();

    this.setState({ genres });
  }

  schema = {
    _id: Joi.string(),
    title: Joi.string().max(100).required().label("Title"),
    genreId: Joi.string().max(100).required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("numberInStock"),
    rate: Joi.number().min(0).max(5).required().label("Rate"),
  };

  doSubmit = () => {
    console.log(this.state);
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
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
