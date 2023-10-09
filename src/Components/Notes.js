import Note from './Note'

function Notes({ notes, onChange })
{
    function deleteNote(id)
    {
        let copyNotes = [...(notes.filter((value) => value.id !== id))];

        onChange(copyNotes);
    }

    function changeNote(changedItem)
    {
        let copyNotes = [...notes];

        copyNotes.forEach((item, index) => {
            if(item.id === changedItem.id) {
                copyNotes[index] = {...changedItem};
            }
        });

        onChange(copyNotes);
    }

    const noteSize = 'col-md-6 col-sm-12 p-3';

    return <div className={'container'}>
        <div className={'row'}>
            {notes.map((note) =>
                <div key={note.id} className={noteSize}>
                    <Note
                        key={note.id}
                        noteInfo={note}
                        deleteNote={deleteNote}
                        changeNote={changeNote}
                    />
                </div>)}
        </div>
    </div>;
}

export default Notes;