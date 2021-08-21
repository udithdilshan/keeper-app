import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
    const [isExpand, setIsExpand] = useState(false);
    function SetExpand() {
        setIsExpand(true);
    }
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    function updateNote(event) {
        const { value, name } = event.target;
        setNote(prev => {
            return { ...prev, [name]: value }
        })
    }
    return (
        <div>
            <form className="create-note">
                {isExpand &&
                    <input onChange={updateNote} name="title" placeholder="Title" value={note.title} />
                }
                <textarea onClick={SetExpand} onChange={updateNote} name="content" placeholder="Take a note..." rows={isExpand ? 3 : 1} value={note.content} />
                <Zoom in={isExpand}>
                    <Fab onClick={(event) => {
                        event.preventDefault();
                        props.onAdd(note);
                        setNote({
                            title: "",
                            content: ""
                        })
                    }} ><AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
