import React from 'react';
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import './NoteItem.css'

export default function NoteItem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;

    const { note, updateNote, shareNote } = props;

    let addday = note.date.substr(8, 2);
    let addmonth = note.date.substr(5, 2);
    let addyear = note.date.substr(0, 4);

    let expday = note.expdate.substr(8, 2);
    let expmonth = note.expdate.substr(5, 2);
    let expyear = note.expdate.substr(0, 4);

    const date = new Date();
    let curryear = date.getFullYear();
    let currmonth = date.getMonth() + 1;
    let currday = date.getDate();

    let flag = false;
    if (expyear < curryear) {
        flag = true;
    }
    else if (expyear == curryear && expmonth < currmonth) {
        flag = true;
    }
    else if (expmonth == currmonth && expday < currday) {
        flag = true;
    }

    return (
        <div className='col-md-3'>
            <div className=" card notecard text-center my-3">
                <div className='card-header d-flex justify-content-between align-items-center rounded' style={{ backgroundColor: flag == true ? "#ffb8b8" : "#A5D7E8" }}>
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
                    <strong>Creation </strong>: {addday} - {addmonth} - {addyear}
                </div>
                <div className="card-footer text-muted">
                    <strong>Expiry </strong>: {expday} - {expmonth} - {expyear}
                </div>
                <div className="card-footer text-muted">
                    {(currmonth == expmonth &&
                        curryear == expyear &&
                        (expday - currday) <= 7 &&
                        (expday - currday > 0)) &&
                        <div className="timer mb-2" style={{ color: "#c03535" }}><strong> {expday - currday}d </strong>
                            <i className="fa-sharp fa-solid fa-clock fa-xl" style={{ color: "#c03535" }}> </i>
                        </div>
                    }
                    {(currmonth == expmonth &&
                        curryear == expyear &&
                        (expday - currday <= 0)) &&
                        <div className="timer mb-2" style={{ color: "#c03535" }}>
                            <i className="fa-sharp fa-solid fa-circle-xmark fa-xl" style={{ color: "#c03535" }}> </i><strong>
                                &nbsp; Expired </strong>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
