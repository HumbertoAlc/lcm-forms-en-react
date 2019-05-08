import React, { Component } from 'react'
import AddMovie from './AddMovie'
import ImprovedCard from './ImprovedCard'

export default class DynamicMoviesList extends Component {
  state={
    filteredMovies: [
      {
        title: 'Señor de los anillos',
        director: 'Peter Jackson',
        hasOscars: true,
        IMDbRating: '5'
      },
      {
        title: 'Señor de los anillos',
        director: 'Peter Jackson',
        hasOscars: true,
        IMDbRating: '5'
      },
      {
        title: 'Señor de los anillos',
        director: 'Peter Jackson',
        hasOscars: true,
        IMDbRating: '5'
      },
    ]
  }

  addMovie = (movie) => {
    this.setState((prevState) => {
      return ({
        filteredMovies: [...prevState.filteredMovies, movie]
      })
    })
  }

  render() {
    return (
      <div>
        <AddMovie addMovie={this.addMovie}/>  {/*<== add here!*/}
        {
          this.state.filteredMovies.map((oneMovie, index) => {
              // return <ImprovedCard key={index} {...oneMovie} clickToDelete={this.deleteMovieHandler.bind(this, index)} />
              return <ImprovedCard key={index} {...oneMovie} clickToDelete={() => this.deleteMovieHandler(index)} />
          })
        }
      </div>
    )
  }
}
