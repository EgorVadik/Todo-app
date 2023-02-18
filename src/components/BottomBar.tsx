type bottomBarProps = {
    ison: string
    itemsLeft: number
    setActive: () => void
    setAll: () => void
    setCompleted: () => void
    clearCompleted: () => void
}

export default function BottomBar({
    ison,
    itemsLeft,
    setActive,
    setAll,
    setCompleted,
    clearCompleted,
}: bottomBarProps) {
    return (
        <>
            <div className='grid grid-cols-3 p-3 bg-white dark:bg-VeryDarkDesaturatedBlue rounded-b-md dark:text-DarkGrayishBlue text-DarkGrayishBlue text-xs font-bold transition-all duration-200'>
                <p className='col-span-2 md:col-span-1'>
                    {itemsLeft} items left
                </p>
                <div className='md:flex hidden'>{btns()}</div>
                <button
                    className='text-right hover:text-VeryDarkGrayishBlue dark:hover:text-LightGrayishBlueHover'
                    onClick={() => clearCompleted()}
                >
                    Clear Completed
                </button>
            </div>
            <div className='p-4 mt-5 bg-white dark:bg-VeryDarkDesaturatedBlue rounded-md dark:text-DarkGrayishBlue text-DarkGrayishBlue text-xs font-bold transition-all duration-200 w-full md:hidden'>
                <div className='flex text-sm'>{btns()}</div>
            </div>
        </>
    )

    function btns() {
        return (
            <>
                <button
                    className={`m-auto hover:text-VeryDarkGrayishBlue dark:hover:text-LightGrayishBlueHover ${
                        ison === 'All' && 'text-BrightBlue'
                    }`}
                    onClick={() => setAll()}
                >
                    All
                </button>
                <button
                    className={`m-auto hover:text-VeryDarkGrayishBlue dark:hover:text-LightGrayishBlueHover ${
                        ison === 'Active' && 'text-BrightBlue'
                    }`}
                    onClick={() => setActive()}
                >
                    Active
                </button>
                <button
                    className={`m-auto hover:text-VeryDarkGrayishBlue dark:hover:text-LightGrayishBlueHover ${
                        ison === 'Completed' && 'text-BrightBlue w-fit'
                    }`}
                    onClick={() => setCompleted()}
                >
                    Completed
                </button>
            </>
        )
    }
}
