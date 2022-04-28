import Form from "./commons/form";
import Joi from "joi-browser";

class MovieForm extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", rate: "" },
    errors: {},
  };

  schema = {
    title: Joi.string().max(100).required().label("Title"),
    genre: Joi.string().max(100).required().label("Genre"),
    numberInStock: Joi.number().required().label("numberInStock"),
    rate: Joi.number().max(5).required().label("Rate"),
  };

  doSubmit = () => {
    console.log("Hello MovieForm");
  };

  render() {
    return (
      <div>
        <h2>Adding new movie: </h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
