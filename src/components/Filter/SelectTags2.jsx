import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import s from "./SelectTags.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectTag } from '../../reducers/notes-reducer';

export default function SelectTags2() {
  const notes = useSelector(state => state.notesData.notes);
  const [tag, setTag] = React.useState('');
  
  const dispatch = useDispatch();
  let allTags = notes.flatMap((item) => item.tags)

  const handleChange = (event) => {
    setTag(event.target.value);
    dispatch(setSelectTag(event.target.value))
  };

  return (
    <div className={s.wrapper}>
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-simple-select-label">Фильтр по тегу</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tag}
          label="Фильтр по тегу"
          onChange={handleChange}
        >
          <MenuItem value={'Все заметки'}>Все заметки</MenuItem>
          
          {allTags.map((item) => (
               item && <MenuItem value={item}>{item}</MenuItem>
          ))}
             
          
        </Select>
      </FormControl>
    </Box>
    </div>
  );
}
