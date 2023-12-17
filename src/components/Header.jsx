const Header = () => {
    return (
        <nav className='bg-[#111111] sticky top-0 z-50 flex justify-between text-white text-lg md:text-xl p-6 md:p-8 md:px-24 shadow-lg gap-4 md:gap-8'>
            <a href='#' className='hover:text-blue-500 ease-in-out duration-500'>MW</a>
            <div className='flex gap-4 md:gap-8'>
                <ul className='flex gap-4 md:gap-8'>
                    <li><a href='#projects' className='hover:text-blue-500 ease-in-out duration-500'>Projects</a></li>
                    <li><a href='#experience' className='hover:text-blue-500 ease-in-out duration-500'>Experience</a></li>
                    <li><a href='#education' className='hover:text-blue-500 ease-in-out duration-500'>Education</a></li>
                </ul>

            </div>
        </nav>
    );
};
export default Header;