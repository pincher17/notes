import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotes } from "../../reducers/notes-reducer";
import s from "./CreateNotes.module.scss";



const CreateNotes = (props) => {

const notes = useSelector(state => state.notesData.notes);
const dispatch = useDispatch();
const [text, setText] = useState('')


  let handleTextChange = (e) =>{
      setText(e.target.value)
  }

  const createNote = () =>{
    if(text){
    let id = notes.length + 1;
    let tags = text.match(/#[\wа-я]+/gms)
    console.log(tags)
    if(tags){
      dispatch(setNotes(id, text, tags))
    }else{
      dispatch(setNotes(id, text, tags = ''))
    }
    
    setText('')
    }
  }


  return (
    <div className={s.wrapper_all}>
        <div className={s.wrapper}>
        <div>
            <span className={s.headline}>Создание заметки</span>
        </div>
        <div className={s.wrapper_textarea}>
            <textarea value={text} onChange={handleTextChange} className={s.textarea} ></textarea>
        <div>
            <button onClick={createNote} className={s.btn_create_note}>Создать заметку</button>
        </div>
        </div>
        </div>

    </div>
  );
};



export default CreateNotes;
