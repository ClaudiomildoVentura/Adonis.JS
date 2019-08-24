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

/* amanhã ve esse problema 
https://www.youtube.com/watch?v=iRa0nc79FZg&list=PLDLKWOQSNkl09bOUgiXfE9iyYrDblVJ85&index=14
 A component is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component
*/