import React from 'react'

const AddSong = ({ song, handleInputChange, onCreateM }) => (
    <div className="field has-addons">
        <div className="control his-expanded">
            <input className="input" type="text" name="song" value={song} onChange={handleInputChange} />
        </div>
        <div className="control">
            <button className="button is-success" onClick={onCreateM}>
                <i className="fas fa-plus" />
            </button>
        </div>
    </div>
)
export default AddSong