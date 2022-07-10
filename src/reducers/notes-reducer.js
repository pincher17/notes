
const SET_NOTES = 'SET_NOTES';
const SET_ID_EDIT_NOTE = 'SET_ID_EDIT_NOTE';
const SET_NEW_TEXT_NOTE = 'SET_NEW_TEXT_NOTE'
const DELETE_ID_EDIT_NOTE = 'DELETE_ID_EDIT_NOTE'
const SET_SELECT_TAGS = 'SET_SELECT_TAGS'
const DELETE_NOTE = 'DELETE_NOTE'

const defaultState = {
    notes: [
        {
           id: 1,
           text: 'Пример заметки #первая_заметка',
           tags: ['#первая_заметка']
        }
    ],
    edit: '',
    selectTag: 'Все заметки',
}

function NotesReducer(state = defaultState, action){
   
    switch(action.type){
        case SET_NOTES:
        return{
            ...state,
            notes: [...state.notes, action.data]
        }
        case SET_NEW_TEXT_NOTE:
        return{
            ...state,
            notes: state.notes.map((item)=>{
                if(action.id === item.id){
                    return {...item, text: action.text, tags: action.tags}
                }
                return item
            })
            }
        case SET_ID_EDIT_NOTE:
        return{
            ...state,
            edit: action.id
        }
        case DELETE_ID_EDIT_NOTE:
            return{
                ...state,
                edit: ''
            }
        case SET_SELECT_TAGS:
            return{
                ...state,
                selectTag: action.tag
                }
        case DELETE_NOTE:
            return{
                ...state,
                notes: state.notes.filter(item => action.id !== item.id)
                }

        default:
            return state;
    }
}

export let setNotes = (id, text, tags) => ({type: SET_NOTES, data: {id, text, tags}})
export let setIdEditNote = (id) => ({type: SET_ID_EDIT_NOTE, id})
export let deleteIdEditNote = () => ({type: DELETE_ID_EDIT_NOTE})
export let setNewTextNote = (id, text, tags) => ({type: SET_NEW_TEXT_NOTE, id, text, tags})
export let setSelectTag = (tag) => ({type: SET_SELECT_TAGS, tag})
export let deleteNote = (id) => ({type: DELETE_NOTE, id})

export default NotesReducer;