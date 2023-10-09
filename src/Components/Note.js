import Save from "./Save";
import Edit from "./Edit";
import Delete from "./Delete";
import Cancel from "./Cancel";
import { useState } from "react";

function Note({ noteInfo, deleteNote, changeNote })
{
    const [item, setItem] = useState(noteInfo);
    const [name, setName] = useState(item.name);
    const [text, setText] = useState(item.text);

    function flushChanges(editedItem)
    {
        setItem(editedItem);
        changeNote(editedItem);

        console.log("Items flushed!")
    }

    function onSave()
    {
        let copyItem = {};
        Object.assign(copyItem, item);

        copyItem.name = name;
        copyItem.text = text;
        copyItem.isEdit = false;

        flushChanges(copyItem);
    }

    function onBack()
    {
        let copyItem = {};
        Object.assign(copyItem, item);
        setText(item.text);
        setName(item.name);

        copyItem.isEdit = false;

        flushChanges(copyItem);
    }

    function onEdit()
    {
        let copyItem = {};
        Object.assign(copyItem, item);

        copyItem.isEdit = true;

        flushChanges(copyItem);
    }

    function onDelete()
    {
        deleteNote(item.id);
    }

    const SAVED_BUTTON_SET = [<Edit callback={onEdit} />, <Delete callback={onDelete} />];
    const EDITING_BUTTON_SET = [<Save callback={onSave} />, <Cancel callback={onBack} />];

    return <div className={'card'}>
            <div className={'card-header container'}>
                <div className={'row'}>
                    <div className={'col-9'}>
                        {
                            item.isEdit
                            ? <input value={name} className={'form-control'} onChange={(event) => setName(event.target.value)} />
                            : <p className={'text-sm-left text-justify'}>{item.name}</p>
                        }
                    </div>
                    <div className={'col-3 d-flex justify-content-end'}>
                        {item.isEdit ? EDITING_BUTTON_SET : SAVED_BUTTON_SET}
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{item.datetime}</h6>
                {
                    item.isEdit
                    ? <textarea className={'form-control'} value={text} onChange={(event) => setText(event.target.value)}></textarea>
                    : <p className="card-text">{item.text}</p>
                }
            </div>
        </div>
    ;
}

export default Note;