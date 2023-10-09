import {useState} from "react";

function Header({ applicationName, searchHandler, creationHandler })
{
    const [searchText, setSearchText] = useState("");

    function searchTextChange(props)
    {
        setSearchText(props.target.value);
    }

    function searchExecute()
    {
        searchHandler(searchText);
    }

    return <div className={'navbar-light bg-light'}>
        <div className={'container'}>
            <div className={'row align-items-center'}>
                <div className={'col-md-3 col-sm-4 col-xs-9'}>
                    <div className={'navbar-brand navbar-text'}>
                        <h1>{applicationName}</h1>
                    </div>
                </div>
                <div className={'col-sm-2 offset-sm-6 d-md-none d-flex justify-content-end'}>
                    <button onClick={creationHandler} className={'btn btn-outline-dark'} type={'button'}><i className="bi bi-plus-lg"></i></button>
                </div>
                <div className={'col-md-7 col-xs-12"'}>
                    <div className={'row'}>
                        <div className={'col-9'}>
                            <input value={searchText} onChange={searchTextChange} className={'form-control'} type={'search'} placeholder={'Поиск'} />
                        </div>
                        <div className={'col-3 d-flex justify-content-end'}>
                            <button onClick={searchExecute} className={'btn btn-outline-dark'} type={'button'}>Найти</button>
                        </div>
                    </div>
                </div>
                <div className={'col-md-2 d-md-flex d-none'}>
                    <button type={'button'} onClick={creationHandler} className={'btn btn-outline-dark'}>Создать</button>
                </div>
            </div>
        </div>
    </div>;
}

export default Header;