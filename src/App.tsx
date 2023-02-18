import { useState } from 'react'
import BottomBar from './components/BottomBar'
import Header from './components/Header'
import Todo from './components/Todo'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'

function App() {
    const [darkMode, setDarkMode] = useState(true)

    function toggleDarkMode() {
        setDarkMode(!darkMode)
    }

    const dummyTodo = [
        {
            id: 1,
            todo: 'test1',
            completed: true,
        },
        {
            id: 2,
            todo: 'test2',
            completed: false,
        },
        {
            id: 3,
            todo: 'test3',
            completed: false,
        },
        {
            id: 4,
            todo: 'test4',
            completed: false,
        },
        {
            id: 5,
            todo: 'test5',
            completed: false,
        },
    ]

    const [allTodos, setAllTodos] = useState(dummyTodo)
    const [todo, setTodo] = useState(dummyTodo)
    const [ison, setIson] = useState('All')

    function itemsLeft() {
        return todo.filter((item) => !item.completed).length
    }

    function addTodo(item: string) {
        const newTodo = [
            ...todo,
            {
                id: todo.length + 1,
                todo: item,
                completed: false,
            },
        ]
        setAllTodos(newTodo)
        setTodo(newTodo)
    }

    function completeTodo(id: number) {
        const newTodo = todo.map((item) => {
            if (item.id === id) {
                item.completed = !item.completed
            }

            return item
        })
        setAllTodos(newTodo)
        setTodo(newTodo)
    }

    function removeTodo(id: number) {
        const newTodo = todo.filter((item) => item.id !== id)
        setAllTodos(newTodo)
        setTodo(newTodo)
    }

    function setActive() {
        setIson('Active')
        setTodo(allTodos.filter((item) => !item.completed))
    }

    function setCompleted() {
        setIson('Completed')
        setTodo(allTodos.filter((item) => item.completed))
    }

    function setAll() {
        setIson('All')
        setTodo(allTodos)
    }

    function clearCompleted() {
        const newTodo = allTodos.filter((item) => !item.completed)
        setTodo(newTodo)
        setAllTodos(newTodo)
    }

    return (
        <main className={`font-josefin text-body ${darkMode ? 'dark' : ''} `}>
            <div className='dark:bg-VeryDarkBlue bg-VeryLightGray min-h-screen transition-all duration-1000'>
                <Header />
                <div className='grid items-center place-content-center pt-5 md:pt-16 relative'>
                    <Todo darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <TodoInput addTodo={addTodo} />
                    <div className='shadow-lg rounded-b-md'>
                        {todo.map((item, i) => {
                            return (
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    rounded={i === 0}
                                    completeTodo={completeTodo}
                                    removeTodo={removeTodo}
                                />
                            )
                        })}
                        <BottomBar
                            ison={ison}
                            itemsLeft={itemsLeft()}
                            setActive={setActive}
                            setAll={setAll}
                            setCompleted={setCompleted}
                            clearCompleted={clearCompleted}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App
