
function Edit({ callback })
{
    return <button type="button" className="btn btn-outline-secondary btn-sm" onClick={callback}>
        <i className={'bi bi-pencil'}></i>
    </button>;
}

export default Edit;