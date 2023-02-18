type todoProps = {
    darkMode: boolean
    toggleDarkMode: () => void
}

export default function Todo({ darkMode, toggleDarkMode }: todoProps) {
    return (
        <>
            <div className='flex items-center'>
                <h1 className='text-white tracking-[0.7rem] font-bold text-3xl mr-auto my-5 md:my-10 '>
                    TODO
                </h1>

                {darkMode ? (
                    <img
                        src='/images/icon-sun.svg'
                        alt='Sun icon'
                        width={20}
                        height={20}
                        onClick={toggleDarkMode}
                        className='cursor-pointer'
                    />
                ) : (
                    <img
                        src='/images/icon-moon.svg'
                        alt='Moon icon'
                        width={20}
                        height={20}
                        onClick={toggleDarkMode}
                        className='cursor-pointer'
                    />
                )}
            </div>
        </>
    )
}
