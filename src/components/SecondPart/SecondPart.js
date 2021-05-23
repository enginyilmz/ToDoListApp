
import React from 'react';

const SecondPart = ({ toDoLists, setToDoLists }) => {

    const markAsDone = (id) => {
        setToDoLists(toDoLists.map(item => item.id === id ? { ...item, done: !item.done } : item));
    }
    const clickItem = (e, check) => {
        e.checked = check;
    }
    const deleteItem = (id) => {
        setToDoLists(toDoLists.filter(item => item.id !== id));
    }

    if (!toDoLists) {
        return (
            <div className="row justify-content-center">
                <div className="col-md-6">
                <div>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div >
        );

    }
return (
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="list-group">
                {toDoLists.map((list) => {
                    return (
                        <label key={list.id} className={`list-group-item d-flex align-items-center ${list.done ? 'text-decoration-line-through' : ''}`}>
                            <input
                                onClick={() => markAsDone(list.id)}
                                className="form-check-input me-1" type="checkbox"
                                onChange={(e) => clickItem(e, list.done)}
                                checked={list.done}
                     
                                role={"button"} />{list.title}
                            <i
                                id="deleteIcon"
                                className="ms-auto bi bi-trash"
                                role={"button"}
                                onClick={() => deleteItem(list.id)} />
                        </label>
                    );
                })}

            </div>
        </div>
    </div>
);
}

export default SecondPart;
