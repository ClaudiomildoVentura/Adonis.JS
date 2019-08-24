import React from 'react'
import { Link } from 'react-router-dom'

function Albums({ albums, onDelete }) {
    return (
        <div>
            {albums.map(album => (
                <div className="media box" key={album.id}>
                    <div className="media-left"><span className="tag is-info">{album.id}</span></div>
                    <div className="media-content"><p className="title is-4">{album.name}</p>Artista: {album.artist}<p></p></div>
                    <div className="media-right">
                        <Link to={`/albums/${album.id}`}className="button is-success"><i className="fas fa-info-circle"></i></Link>
                        <button className="button is-danger" onClick={() => onDelete(album.id)}><i className="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Albums
