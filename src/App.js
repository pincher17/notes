import './App.scss';
import CreateNotes from './components/CreateNotes/CreateNotes.jsx';
import Notes from './components/Notes/Notes.jsx';
import SelectTags2 from './components/Filter/SelectTags2.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className='App'>
    <CreateNotes />
    <SelectTags2 />
    <Notes />
    </div>
    </BrowserRouter>
  );
}

export default App;
