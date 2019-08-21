import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state = { albums: [] }
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/albums")
      .then(res => this.setState({ albums: res.data }))
  }

  render() {
    return (
        <div className="App">
          {this.state.albums.map(album => (
            <p>
              {album.id}.{album.name}
            </p>
          ))}
        </div>
    );
  }
}