import React, { useState } from 'react';

const FirstPart = ({ toDoLists, setToDoLists }) => {
    const [newItem, setNewItem] = useState('');

    const deleteAllItem = () => {
        setToDoLists([]);
    }

    const markAllAsDone = () => {
        setToDoLists(toDoLists.map(item => {
            return { ...item, done: true }
        }));
    }

    const addNewItem = () => {
        setToDoLists([...toDoLists, { id: toDoLists.length, title: newItem, done: false }]);
    }

    const handleKeyPress = (e)=>{
        if(e.which ===13){
            addNewItem();
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6 text-center">
                <i className="bi bi-check-square" style={{ fontSize: '3rem' }} />
                <h1 className="fw-bold">To-Do List</h1>
                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="bi bi-pencil-square" /></span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add content here..." aria-label="Addtodo"
                        value={newItem}
                        onKeyPress={(e)=>handleKeyPress(e)}
                        onChange={(e) => setNewItem(e.target.value)} />
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => addNewItem()}>Add</button>
                </div>
                <div className="d-flex justify-content-between">
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => markAllAsDone()}>
                        Mark all as done
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteAllItem()}>
                        Delete All Items
                    </button>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default FirstPart;
