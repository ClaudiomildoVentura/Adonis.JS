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
    onDelete = id =>{
        if(!window.confirm("Deseja realizar a exclusão?")) return

        axios
        .delete(`http://localhost:3333/albums/${id}`)
        .then(res => this.setState({albums: this.state.albums.filter(album => album.id !== id)
        })).catch(err => console.log(err))

    }

    render() {
        const { album, albums, artist } = this.state
        return (
            <div className="section container">
                <AlbumCreate artist={artist} album={album} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
                <div className="columns">
                    <div className="column">
                        <Albums albums={albums} onDelete={this.onDelete}/>
                    </div>
                </div>
            </div>
        );
    }
}

//https://www.youtube.com/watch?v=rKnxaIJzsQ4&list=PLDLKWOQSNkl09bOUgiXfE9iyYrDblVJ85&index=12