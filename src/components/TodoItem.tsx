import { useState } from 'react'
import Draggable from 'react-draggable'

type todoItemProps = {
    index: number
    item: {
        id: number
        todo: string
        completed: boolean
    }
    rounded: boolean
    completeTodo: (id: number) => void
    removeTodo: (id: number) => void
    swapPos: (index: number, way: 0 | 1) => void
}

export default function TodoItem({
    index,
    item,
    rounded,
    completeTodo,
    removeTodo,
    swapPos,
}: todoItemProps) {
    const [pos, setPos] = useState({ y: 0 })
    const [curr, setCurr] = useState({ y: 0 })

    function handleDrag(e: any, ui: any) {
        const { y } = pos

        setPos({
            y: y + ui.deltaY,
        })
    }
    return (
        <Draggable
            axis='y'
            bounds={'parent'}
            grid={[50, 50]}
            onDrag={handleDrag}
            position={{ x: 0, y: 0 }}
            onStop={() => {
                if (pos.y > curr.y) {
                    swapPos(index, 1)
                } else if (pos.y < curr.y) {
                    swapPos(index, 0)
                }
            }}
        >
            <div
                className={`flex relative bg-white dark:bg-VeryDarkDesaturatedBlue border-b dark:border-b-VeryDarkGrayishBlue group items-center ${
                    rounded && 'rounded-t-md'
                } transition-all duration-200`}
            >
                <button
                    className={`absolute border border-VeryLightGrayishBlue dark:border-VeryDarkGrayishBlue rounded-full w-4 h-4 top-1/3 left-3 hover:bg-gradient-to-br from-CheckBgFrom to-CheckBgTo ${
                        item.completed &&
                        'bg-gradient-to-br from-CheckBgFrom to-CheckBgTo'
                    }`}
                    onClick={() => completeTodo(item.id)}
                >
                    {item.completed && (
                        <img
                            src='/images/icon-check.svg'
                            alt='Check icon'
                            width={9}
                            height={9}
                            className='m-[3px]'
                        />
                    )}
                </button>
                <button
                    className={`p-3 pl-10 text-sm ${
                        item.completed
                            ? 'line-through dark:text-DarkGrayishBlue text-LightGrayishBlue'
                            : 'dark:text-LightGrayishBlue text-VeryDarkGrayishBlue'
                    }`}
                    onClick={() => completeTodo(item.id)}
                >
                    {item.todo}
                </button>
                <button
                    className='w-fit ml-auto mr-5 md:hidden group-hover:block'
                    onClick={() => removeTodo(item.id)}
                >
                    <img
                        src='/images/icon-cross.svg'
                        alt='Cross icon'
                        width={20}
                        height={20}
                        className='w-[16px] h-[16px]'
                    />
                </button>
            </div>
        </Draggable>
    )
}
