import './App.scss';
import CreateNotes from './components/CreateNotes/CreateNotes.jsx';
import Notes from './components/Notes/Notes.jsx';
import SelectTags2 from './components/Filter/SelectTags2.jsx';

function App() {
  return (
    <div className='App'>
    <CreateNotes />
    <SelectTags2 />
    <Notes />
    </div>
  );
}

export default App;
