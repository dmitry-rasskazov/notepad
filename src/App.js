import Header from './Components/Header'
import Notes from "./Components/Notes";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useState} from "react";
import {v4 as uuid} from "uuid";
import {currentDateAsString} from "./DateUtils";

const APPLICATION_NAME = 'Notepad';
const STORAGE_KEY_NAME = 'notepad-data';

function App() {
  const [notes, setNotes] = useState(readData());

  function storeData(value)
  {
    localStorage.setItem(STORAGE_KEY_NAME, JSON.stringify(value))

    let copyValue = [ ...value] ;
    setNotes(copyValue);

    console.log("Notepad data stored");
  }

  function readData()
  {
    console.log("Reading data");

    const storedData = localStorage.getItem(STORAGE_KEY_NAME);
    return null === storedData ? [] : JSON.parse(storedData);
  }

  function createNewNote()
  {
    const newNote = {
      id: uuid(),
      name: "",
      text: "",
      datetime: currentDateAsString(),
      isEdit: true
    };

    let copyNotes = [...notes, newNote];

    storeData(copyNotes);
  }

  function search(text)
  {
    let filteredNotes = readData().filter((note) => note.name.includes(text) || note.text.includes(text));

    setNotes(filteredNotes);
  }

  return [
    <Header key={APPLICATION_NAME+"-Header"} applicationName={APPLICATION_NAME} creationHandler={createNewNote} searchHandler={search} />,
    <Notes key={APPLICATION_NAME+"-Notes"} notes={notes} onChange={storeData} />,
  ];
}

export default App;
