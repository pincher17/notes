import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Notes.module.scss";
import reactStringReplace from 'react-string-replace';
import { deleteIdEditNote, deleteNote, setIdEditNote, setNewTextNote } from "../../reducers/notes-reducer";


const Notes = (props) => {

const idEditNote = useSelector(state => state.notesData.edit)
const notes = useSelector(state => state.notesData.notes);
const selectTag = useSelector(state => state.notesData.selectTag);
const dispatch = useDispatch();

const [text, setText] = useState('')

let editNote = (id) =>{
    dispatch(setIdEditNote(id))
}

let saveNote = (id) => {
    dispatch(deleteIdEditNote())
    let tags = text.match(/#[\wа-я]+/gms)
    dispatch(setNewTextNote(id, text, tags))
}

let deleteSelectNote = (id) => {
    dispatch(deleteNote(id))
}

  
let notesFilter = notes.filter((elem) => { 
    if(selectTag === 'Все заметки'){ 
        return true
        }else{
            return  elem.tags.includes(selectTag)
        }})
          
  

  return (
    <div className={s.wrapper_all}>
        {
            notesFilter.map((item) => (
                <div className={s.note} >
                
                {item.id === idEditNote?
                    <>
                    <textarea className={s.textarea} defaultValue={item.text} onChange={(e)=> setText(e.target.value)} autoFocus 
                        onFocus={function(e) {
                        let val = e.target.value;
                        setText(val)
                        e.target.value = '';
                        e.target.value = val;
                     }}>
                        
                    </textarea>
                    
                    <div className={s.btn_note}>
                        <button onClick={()=>saveNote(item.id)} className={s.btn_edit}>Сохранить</button>
                        <button onClick={()=>deleteSelectNote(item.id)} className={s.btn_delete}>Удалить</button>
                    </div>
                    </>
                    :
                    <>
                    <p>{reactStringReplace(item.text, /(#[\wа-я]+)/gms, (match, i) => (
                        <span key={i + match} style={{ color: 'blue' }}>{match}</span>
                        ))}
                    </p>
                    
                    <div className={s.btn_note}>
                        <button onClick={()=>editNote(item.id)} className={s.btn_edit}>Редактировать</button>
                        <button onClick={()=>deleteSelectNote(item.id)} className={s.btn_delete}>Удалить</button>
                    </div>
                    </>
                    } 
                </div>
                
            ))
        }
    </div>
  );
};



export default Notes;
