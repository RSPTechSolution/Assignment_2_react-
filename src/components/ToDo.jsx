import {useState} from 'react'

const ToDo = () => {

    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim() == ''){
            alert('Please enter a task before adding!');
        }else{
            setTodos([...todos, {title: task, completed: false}]);
            setTask('');
            alert('Task added successfully!');
        }
    }
    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
        alert('Task deleted successfully!');
    }

  return (
    <>
        <div className="container">
            <div className="app-container">
                <h1 className='app-header'>To-Do List</h1>
                <div className="add-task">
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Add a new task" className='task-input' value={task} onChange={(e) => setTask(e.target.value)}/>
                        <button type="submit" className='submit-task'>&nbsp;</button>
                    </form>
                </div>
                <ul className="task-list">
                    {
                        todos.map((todo, index) => (
                            <li key={index} className={`task-list-item ${todo.completed ? 'completed' : ''}`}>
                                <input type="checkbox"checked={todo.completed} onChange={() => toggleComplete(index)}/>
                                <span>{todo.title}</span>
                                <span title="Delete Task" className="delete-btn" onClick={() => deleteTodo(index)}></span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </>
  )
}

export default ToDo;