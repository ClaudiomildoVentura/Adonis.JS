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
      <div className="section">
        <div className="columns">
          <div className="column">
            {this.state.albums.map(album => (
              <div className="media box">
                <div className="media-left">{album.id}</div>
                <div className="media-content">{album.name}</div>
                <div className="media-right">
                  <button>Detalhes</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

//https://www.youtube.com/watch?v=PUqBKUNpDYQ&list=PLDLKWOQSNkl09bOUgiXfE9iyYrDblVJ85&index=8