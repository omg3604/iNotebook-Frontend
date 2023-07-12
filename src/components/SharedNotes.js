import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
import userContext from '../context/user/userContext';
import NoteItem from './NoteItem';
import Spinner from './Spinner';

function SharedNotes(props) {

    // For maintaining the user data on the navbar upon reload also
    const Ucontext = useContext(userContext);
    const { getUserDetails, details } = Ucontext;
    useEffect(() => {
        getUserDetails(localStorage.getItem('token'));
    }, [])

    const context = useContext(noteContext);
    let navigate = useNavigate();
    const { notes, getNotes, editNote, getNotesByTag, noteLoad } = context;
    // Extracting out the shared notes only to show
    const sharedNotes = notes.filter(note => note.tag === "shared");

    useEffect(() => {
        getNotes();
    }, [])

    const [window, setwindow] = useState("");

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default", eexpdate: "" });

    const updateNote = (currentNote) => {
        setwindow("edit");
        ref.current.click();    // for opening the modal on clicking edit icon
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag, eexpdate: currentNote.expdate });   // for populating the form with current note values
    }

    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag, note.eexpdate);
        //console.log("Updating the note...", note);
        refClose.current.click();   // for closing the modal after clicking save changes button
        props.showAlert("success", "Note updated successfully");
    }

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    const ontagchange = (e) => {
        if (e.target.value !== "All") {
            getNotesByTag(e.target.value);
        }
        else {
            getNotes();
        }
        console.log(e.target.value);
    }

    // Sharing Note to other users
    const [snote, setsnote] = useState({ id: "", stitle: "", sdescription: "", stag: "default", sexpdate: "" });
    const [usermail, setusermail] = useState("");

    const shareNote = (note) => {
        setwindow("share");
        ref.current.click();
        setsnote({ id: note._id, stitle: note.title, sdescription: note.description, stag: note.tag, sexpdate: note.expdate });
    }

    const [validmail, setvalidmail] = useState(true);

    const onsharechange = (e) => {
        setUnknownUser(true);
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (e.target.value.match(validRegex)) {
            setvalidmail(true);
        }
        else {
            setvalidmail(false);
        }
        setusermail(e.target.value);
    }

    const [unknownUser, setUnknownUser] = useState(true);

    // We have fetched data from the API here only instead of in notestate because we want to know that if the user with given
    // email exists in the database or not and give result depending on that.
    const onshareclick = async (e) => {
        //let res = saveSharedNote(snote.stitle + `    ~${details.name}`, snote.sdescription, snote.stag, snote.sexpdate, usermail);
        // console.log(usermail);
        // console.log(snote);
        let title = snote.stitle + `    ~${details.name}`;
        let description = snote.sdescription;
        let tag = snote.stag;
        let expdate = snote.sexpdate;
        let email = usermail;
        const response1 = await fetch(`https://odd-mite-shoe.cyclic.app/api/auth/finduser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ email })
        })
        const json = await response1.json();
        // If the user with given email exixts.
        if (json.success === true) {
            const authtoken = json.authToken;
            console.log(authtoken);

            const response = await fetch(`https://odd-mite-shoe.cyclic.app/api/notes/addSharedNote`, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authtoken,
                },
                body: JSON.stringify({ title, description, tag, expdate }), // body data type must match "Content-Type" header
            });
            const newnote = await response.json();
            console.log(newnote);
            refClose.current.click();
            props.showAlert("success", `Note shared to user ${usermail} successfully`);
        }
        // If the user with given email doesnot exixt.
        else {
            setUnknownUser(false);
            //props.showAlert("Failure", `No user with given mail ${usermail} exists in the application!`);
        }
    }

    return (
        <div className='container'>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: "#A5D7E8" }}>
                            <h5 className="modal-title" id="exampleModalLabel">{window == "share" ? "Share Note" : "Edit Note"}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {window == "share" &&
                            <div className="modal-body">
                                <form className='container '>
                                    <div className="form-group d-flex my-3">
                                        <label htmlFor="etitle" className="form-label">Receiver's Email</label>
                                        <input type="text" className="form-control" id="etitle" name="etitle" placeholder="Enter email" onChange={onsharechange} value={usermail} minLength={5} required />
                                    </div>
                                    <p>The email must be a valid email of inotebook user.</p>
                                    {!validmail && <p className='p-2 rounded' style={{ backgroundColor: "#FA9884" }}>Please Enter a valid email.</p>}
                                    {!unknownUser && <p className='p-2 rounded' style={{ backgroundColor: "#FA9884" }}>Failure! No user with given email "{usermail}" exists in the application. Please enter a valid iNoteBook user mail.</p>}
                                </form>
                            </div>
                        }
                        {window == "share" &&
                            <div className="modal-footer" >
                                <button ref={refClose} type="button" className='btn btn-rounded editbtncss' data-bs-dismiss="modal">Close</button>
                                <button onClick={onshareclick} type="button" className={`btn btn-rounded editbtncss ${validmail === false ? "disabled" : ""}`}>Share</button>
                            </div>
                        }
                        {window == "edit" &&
                            <div className="modal-body">
                                <form className='container '>
                                    <div className="form-group d-flex my-3 justify-content-around">
                                        <label htmlFor="etitle" className="form-label">Title</label>
                                        <input type="text" className="form-control w-50" id="etitle" name="etitle" placeholder="Enter title" onChange={onchange} value={note.etitle} minLength={5} required />
                                    </div>
                                    <div className="form-group d-flex my-3 justify-content-around">
                                        <label htmlFor="edescription" className="form-label">Description</label>
                                        <input type="text" className="form-control w-75" id="edescription" name="edescription" placeholder="Note description" onChange={onchange} value={note.edescription} minLength={5} required />
                                    </div>
                                    <div className="mb-3">
                                        <div className='d-flex justify-content-between align-items-center'>

                                        </div>
                                    </div>

                                    <div className="form-group d-flex my-3 justify-content-around">
                                        <p className='form-label'>Select Tag : </p>
                                        <select id="etag" className="select w-50 p-2 rounded" style={{ borderColor: "grey" }} name="etag" onChange={onchange} value={note.etag}>
                                            <option value="personal">Personal</option>
                                            <option value="general">General</option>
                                            <option value="business">Business</option>
                                            <option value="routine">Routine</option>
                                            <option value="routine">Default</option>
                                        </select>
                                        {/* <label htmlFor="etag" className="form-label">Tag</label>
                                        <input type="text" className="form-control w-50" id="etag" name="etag" placeholder="Note tag" onChange={onchange} /> */}
                                    </div>
                                    {/* <div className="form-group d-flex my-3 justify-content-around">
                                        <label htmlFor="eexpdate" className="form-label">Expiry Date</label>
                                        <input type="date" className="form-control w-50" id="eexpdate" name="eexpdate" placeholder="" onChange={onchange} value={note.eexpdate} />
                                    </div> */}
                                </form>
                            </div>
                        }
                        {window == "edit" &&
                            <div className="modal-footer" >
                                <button ref={refClose} type="button" className='btn btn-rounded editbtncss' data-bs-dismiss="modal">Close</button>
                                <button onClick={handleClick} type="button" className='btn btn-rounded editbtncss'>Save changes</button>
                            </div>
                        }

                    </div>
                </div>
            </div>

            <div className='row my-3 py-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h2 style={{ color: "#19376D" }}>Shared Notes!</h2>
                    {/* <div className='d-flex align-items-center'>
                        <p className='mx-3 my-0'>Search By Tag : </p>
                        <select className="select me-5 rounded" style={{ backgroundColor: "#19376D", color: "white" }} onChange={ontagchange}>
                            <option value="All">All</option>
                            <option value="General">General</option>
                            <option value="Personal">Personal</option>
                            <option value="Business">Business</option>
                            <option value="shared">Shared</option>
                        </select>
                    </div> */}
                </div>
                <hr></hr>
                {noteLoad && <Spinner />}
                {!noteLoad && <h5>{sharedNotes.length === 0 && 'No Shared notes found.'}</h5>}
                {!noteLoad && sharedNotes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} shareNote={shareNote} note={note} showAlert={props.showAlert}></NoteItem>;
                }
                )}
            </div>
        </div>
    )
}

export default SharedNotes