import React from 'react';
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import './NoteItem.css'

export default function NoteItem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;

    const { note, updateNote , shareNote} = props;

    let day = note.date.substr(8, 2);
    let month = note.date.substr(5, 2);
    let year = note.date.substr(0, 4);

    return (
        <div className='col-md-3'>
            <div className=" card notecard text-center my-3">
                <div className='card-header d-flex justify-content-between align-items-center rounded' style={{ backgroundColor: "#A5D7E8" }}>
                    <h5 className="card-title text-start" >{note.title}</h5>
                    <div className="dropdown">
                        <a
                            type="button"
                            id="dropdownMenuicon"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fas fa-ellipsis-v fa-lg text-dark px-1"></i>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuicon">
                            <li><button className="dropdown-item text-center" onClick={() => {
                                updateNote(note)
                            }}> <i className="fa-solid fa-pen-to-square fa-sm px-1"></i> Edit</button></li>

                            <li><button className="dropdown-item text-center" onClick={() => {
                                deleteNote(note._id);
                                props.showAlert("success", "Note deleted successfully");
                            }} >  <i className="fa-solid fa-trash fa-sm px-1"></i> Delete</button></li>

                            <li><button className="dropdown-item text-center" onClick={() => {
                                shareNote(note)
                            }}><i className="fa-sharp fa-solid fa-share fa-sm px-1"></i> Share</button></li>
                        </ul>
                    </div>
                </div>
                <div className="card-body" style={{ backgroundColor: "white" }}>

                    <p className="card-text">{note.description}</p>

                </div>
                <div className="card-footer text-muted">
                    {day} - {month} - {year}
                </div>
            </div>
        </div>
    )
}
