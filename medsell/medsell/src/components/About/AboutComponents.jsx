import React, { useState } from 'react';

export default function AboutComponents() {
    const [inputValue, setInputValue] = useState('');
    const [listAdd, setListAdd] = useState([]);

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return; // Prevent adding empty tasks
        setListAdd([...listAdd, { InputValue: inputValue, check: false }]);
        setInputValue(''); // Clear the input field after adding the task
    };

    const handleCheckBox = (index) => {
        let newLi = [...listAdd];
        newLi[index].check = !newLi[index].check;
        setListAdd(newLi);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">TodoApp</h1>
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="flex">
                        <input
                            type="text"
                            className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                            placeholder="Add a new task"
                            value={inputValue}
                            onChange={handleInput}
                        />
                        <button className="bg-gray-800 text-white p-3 rounded-r-md hover:bg-gray-900 transition duration-200">Add</button>
                    </div>
                </form>

                <ul className="list-none">
                    {listAdd.map((item, index) => (
                        <li key={index} className="flex items-center mb-2 p-2 border border-gray-200 rounded-md hover:bg-gray-50 transition duration-200">
                            <input
                                type="checkbox"
                                className="mr-3"
                                checked={item.check}
                                onChange={() => handleCheckBox(index)}
                            />
                            <span className={item.check ? 'line-through text-gray-400' : 'text-gray-800'}>
                                {item.InputValue}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
