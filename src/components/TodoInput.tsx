import { useRef } from 'react'

type todoInputProps = {
    addTodo: (todo: string) => void
}

export default function TodoInput({ addTodo }: todoInputProps) {
    const todoRef = useRef<HTMLInputElement>(null)
    return (
        <>
            <label htmlFor='todo' className='relative'>
                <button
                    className='absolute top-4 left-3 border border-VeryLightGrayishBlue dark:border-VeryDarkGrayishBlue rounded-full w-4 h-4 hover:bg-gradient-to-br from-CheckBgFrom to-CheckBgTo'
                    onClick={() => {
                        if (todoRef.current!.value) {
                            addTodo(todoRef.current!.value)
                            todoRef.current!.value = ''
                        }
                    }}
                ></button>
                <input
                    id='todo'
                    type='text'
                    className='p-3 rounded-md bg-white dark:bg-VeryDarkDesaturatedBlue md:w-[500px] w-[350px] pl-10 focus:outline-none dark:text-LightGrayishBlue mb-5 transition-all duration-1000'
                    placeholder='Create a new todo...'
                    ref={todoRef}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && todoRef.current!.value) {
                            addTodo(todoRef.current!.value)
                            todoRef.current!.value = ''
                        }
                    }}
                />
            </label>
        </>
    )
}
