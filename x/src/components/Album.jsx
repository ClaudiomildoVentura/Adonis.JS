import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AddSong from './AddSong'

export class Album extends Component {
    constructor() {
        super()
        this.state = {
            album: []
        }
    }
    componentDidMount() {
        const album = this.props.match.params.id   //Instrução para pegar o id enviado pela barra de endereço

        axios
            .get(`http://localhost:3333/albums/${album}`)
            .then(res => this.setState({ album: res.data }))
            .catch(err => console.log(err))
    }

    onDeleteM = id => {
        if (!window.confirm("Deseja excluir music")) return

        axios
            .delete(`http://localhost:3333/songs/${id}`)
            .then(res => this.setState(prev => ({
                album: {
                    ...prev.album,
                    songs: [...prev.album.songs.filter(song => song.id !== id)]
                }
            }))).catch(e => console.log(e))
    }
    
    handleInputChange = ({ target }) => {
        this.setState({ [target.name]: target.value || '' })
    }

    onCreateM = () => {
        const { song, album } = this.state
        if (song === "") return
        axios
            .post(`http://localhost:3333/albums/${album.id}/song/add`, { song })
            .then(res => this.setState(prev => ({
                album: {
                    ...prev.album,
                    songs: [...prev.album.songs, res.data]
                },
                song: ""
            }))
            )
            .catch(e => console.log(e))
    }

    render() {
        const { album, song } = this.state
        return (
            <div className="box">
                <h1 className="title">Detalhes {""}
                    <small>
                        <Link to="/">Voltar</Link>
                    </small>
                </h1>
                <div className="columns">
                    <div className="column">
                        <img src="" className="image" alt="" />
                        <br />
                        <div className="field is-grouped">
                            <div className="file control">
                                <label className="file-label">
                                    <input type="file" className="file-input" name="image" />
                                    <span className="file-cta">
                                        <span className="file-icon">
                                            <i className="fas fa-upload" />
                                        </span>
                                        <div className="file-label">escolher</div>
                                    </span>
                                </label>
                            </div>

                            <button className="button is-info control">Atualizar</button>
                        </div>
                    </div>

                    <div className="column">
                        <AddSong song={song} handleInputChange={this.handleInputChange} onCreateM={this.onCreateM} />  {/* Enviando a função por props */}
                        {album.songs ? album.songs.map((song, idx) => (
                            <p key={song.id}>
                                {idx + 1}.{song.name} {""}
                                <span className="icon has-text-danger" onClick={() => this.onDeleteM(song.id)}>
                                    {" "}
                                    <i className="fas fa-trash-alt" />
                                </span>
                            </p>
                        ))
                            : null}
                    </div>
                </div>
            </div>
        )
    }
}
export default Album