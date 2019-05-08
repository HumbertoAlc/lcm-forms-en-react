import React, { Component } from "react";

export default class AddMovie extends Component {
  state = {
    title: "",
    director: "",
    hasOscars: false,
    IMDbRating: ""
  };

  handleHasOscarsCheck = event => {
    this.setState({
      hasOscars:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
    });
  };

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault()
    this.props.addMovie(this.state)
    this.setState({
      title: "",
      director: "",
      hasOscars: false,
      IMDbRating: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          />

          <label>Director:</label>
          <input
            type="text"
            name="director"
            value={this.state.director}
            onChange={e => this.handleChange(e)}
          />

          <label>Oscar Awarded:</label>
          <input
            type="checkbox"
            name="hasOscars"
            checked={this.state.hasOscars}
            onChange={e => this.handleHasOscarsCheck(e)}
          />

          <label>IMDb Rating:</label>
          <input
            type="text"
            name="IMDbRating"
            value={this.state.IMDbRating}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
