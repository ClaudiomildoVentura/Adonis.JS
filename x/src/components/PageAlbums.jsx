import React, { Component } from 'react'
import axios from 'axios'
import Albums from './Albums'
import AlbumCreate from './AlbumCreate'

export default class PageAlbums extends Component {
    constructor() {
        super()

        this.state = {
            albums: [],
            album: "",
            artist: ""
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:3333/albums")
            .then(res => this.setState({ albums: res.data }))
    }
    handleInputChange = ({ target }) => {  // Método do estado dos inputs
        this.setState({ [target.name]: target.value })
    }
    handleSubmit = () => {
        const { album, artist } = this.state
        if (album === '' || artist === '') return  //Método para adicionar

        axios
            .post("http://localhost:3333/albums", { album, artist })
            .then(res => this.setState((prev) => ({
                albums: [res.data, ...prev.albums],
                artist: "",  //Limpar inputs 
                album: ""
            })))
            .catch(err => console.log(err))
    }

    render() {
        const { album, albums, artist } = this.state
        return (
            <div className="section container">
                <AlbumCreate artist={artist} album={album} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
                <div className="columns">
                    <div className="column">
                        <Albums albums={albums} />
                    </div>
                </div>
            </div>
        );
    }
}