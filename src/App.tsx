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
            todo: 'Complete online javascrip course',
            completed: true,
        },
        {
            id: 2,
            todo: 'Jog around the park 3x',
            completed: false,
        },
        {
            id: 3,
            todo: '10 minutes meditation',
            completed: false,
        },
        {
            id: 4,
            todo: 'Read for 1 hour',
            completed: false,
        },
        {
            id: 5,
            todo: 'Pick up groceries',
            completed: false,
        },
        {
            id: 6,
            todo: 'Complete Todo App on Frontend Mentor',
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
                id: Math.floor(Math.random() * 1000000),
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

    function swapPos(index: number, way: 0 | 1) {
        if (way === 0) {
            if (index - 1 < 0) {
                return
            }
            setTodo((prevTodo) => {
                let newTodo = [...prevTodo]

                let temp = newTodo[index - 1]
                newTodo[index - 1] = newTodo[index]
                newTodo[index] = temp

                return newTodo
            })
        }

        if (way === 1) {
            if (index + 1 >= todo.length) {
                return
            }
            setTodo((prevTodo) => {
                let newTodo = [...prevTodo]

                let temp = newTodo[index + 1]
                newTodo[index + 1] = newTodo[index]
                newTodo[index] = temp

                return newTodo
            })
        }
    }

    return (
        <main className={`font-josefin text-body ${darkMode ? 'dark' : ''} `}>
            <div className='dark:bg-VeryDarkBlue bg-VeryLightGray min-h-screen transition-all duration-200'>
                <Header />
                <div className='grid items-center place-content-center pt-5 md:pt-16 relative'>
                    <Todo darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <TodoInput addTodo={addTodo} />
                    <div className='shadow-lg rounded-b-md relative dark:bg-inherit bg-VeryLightGray'>
                        {todo.map((item, i) => {
                            return (
                                <TodoItem
                                    key={item.id}
                                    index={i}
                                    item={item}
                                    rounded={i === 0}
                                    completeTodo={completeTodo}
                                    removeTodo={removeTodo}
                                    swapPos={swapPos}
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
                    <p className='text-center mt-10 text-DarkGrayishBlue'>
                        Drag and drop to reorder list
                    </p>
                </div>
            </div>
        </main>
    )
}

export default App
