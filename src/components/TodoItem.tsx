type todoItemProps = {
    item: {
        id: number
        todo: string
        completed: boolean
    }
    rounded: boolean
    completeTodo: (id: number) => void
    removeTodo: (id: number) => void
}

export default function TodoItem({
    item,
    rounded,
    completeTodo,
    removeTodo,
}: todoItemProps) {
    return (
        <div
            className={`flex relative bg-white dark:bg-VeryDarkDesaturatedBlue border-b dark:border-b-VeryDarkGrayishBlue group items-center ${
                rounded && 'rounded-t-md'
            } transition-all duration-1000`}
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
                className={`p-3 pl-10 ${
                    item.completed
                        ? 'line-through dark:text-DarkGrayishBlue text-LightGrayishBlue'
                        : 'dark:text-LightGrayishBlue text-VeryDarkGrayishBlue'
                }`}
                onClick={() => completeTodo(item.id)}
            >
                {item.todo}
            </button>
            <img
                src='/images/icon-cross.svg'
                alt='Cross icon'
                width={20}
                height={20}
                className='ml-auto mr-5 w-[16px] h-[16px] hidden group-hover:block cursor-pointer'
                onClick={() => removeTodo(item.id)}
            />
        </div>
    )
}
