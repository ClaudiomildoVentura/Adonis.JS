import React from 'react'

const AlbumCreate = ({album, artist, handleInputChange}) => (
    <>
        <div className="box">
            <h1 className="title">Adicionar novo album</h1>
            <div className="field">
                <div className="control">
                    <input className="input" type="text" placeholder="Nome do Album" name="album" value={album} onChange={handleInputChange}></input>
                </div>
            </div>
            <div className="box">
                <h1 className="title">Adicionar novo artista</h1>
                <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="Nome do Artista" name="artist" value={artist} onChange={handleInputChange}></input>
                    </div>
                </div>
                <div className="field">
                    <button className="button">Adicionar</button>
                </div>
            </div>
        </div>
    </>
)


export default AlbumCreate
