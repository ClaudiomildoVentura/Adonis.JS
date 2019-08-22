import React from 'react'

function Albums({ albums }) {
    return (
        <div>
            {albums.map(album => (
                <div className="media box" key={album.id}>
                    <div className="media-left"><span className="tag is-info">{album.id}</span></div>
                    <div className="media-content">{album.name}</div>
                    <div className="media-right">
                        <button className="button is-success"><i className="fas fa-info-circle"></i></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Albums
