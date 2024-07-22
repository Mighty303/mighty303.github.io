const projects = [
    {
        name: 'MartinGPT',
        thumbnail: 'images/martingpt.png',
        github: 'https://github.com/Mighty303/martingpt',
        description: 'Personalized AI discord bot trained on 120,000 of my discord messages.',
        tech: ['Python', 'Discord.js', 'FastAPI', 'Llama2', 'AWS EC2']
    },
    {
        name: 'Broadway Smiles Redesign',
        thumbnail: 'images/BWS.png',
        link: 'https://broadwaysmiles.ca/',
        description: 'Redesigned and developed a dental clinic website to be more modern and improve load times.',
        tech: ['NextJS', 'Tailwind', 'NodeJs', 'ExpressJS', 'PostgreSQL']
    },
    {
        name: 'Avena Tech Redesign',
        thumbnail: 'images/avena.png',
        link: 'https://avenatech.ca/',
        description: 'Redesigned and developed company website to be more modern and user friendly.',
        tech: ['React', 'Tailwind']
    },
    {
        name: 'Kanban Planner',
        thumbnail: 'images/kanban.png',
        github: 'https://github.com/Mighty303/Kanban-planner',
        description: 'This is a side project I have been working on alongside school for a couple months mainly for fun.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {
        name: 'Project Kaisel',
        thumbnail: 'images/kaisel.png',
        github: 'https://github.com/cedafiso0403/frontend-kaisel-bot',
        link: 'https://cedafiso0403.github.io/frontend-kaisel-bot/',
        description: 'Project Kaisel is an easy to use web-application for displaying game statistics for the current season.',
        tech: ['React']
    },
    {
        name: 'Pokemon',
        thumbnail: 'images/pokemon.png',
        github: 'https://github.com/Mighty303/Project-Pokemon',
        description: 'Text-based Pokemon game practicing OOP concepts in Python. This was a high school passion project written in May 2020.',
        tech: ['Python']
    },
    {
        name: 'Sudoku Solver',
        thumbnail: 'images/sudoku.png',
        github: 'https://github.com/Mighty303/SudokuSolver',
        description: 'Recreated a sudoku solver using the recursive backtracking algorithm using an ArrayList to store positions.',
        tech: ['Java']
    },
]


const Projects = () => {
    return (
        <section id='projects' className='text-white flex flex-col items-start min-h-screen 3xl:min-h-min pt-12 mt-12 sm:mt-0 md:mt-0'>
            <h2 className=' font-extralight mx-12 md:mx-24 text-4xl py-12'>PROJECTS</h2>
            <div className='flex justify-center mx-12 md:mx-24 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 items-center justify-center gap-12 sm:w-[50%] md:w-[100%] lg:w-[90%] 3xl:w-[80%]'>
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index} id={index} className='group flex flex-col gap-6 h-full bg-gray-900 rounded-2xl transition-all ease-out hover:-translate-y-2 hover:scale-100 duration-300 hover:shadow-3xl'>
                                    <a href={project.link || project.github} rel='noopener noreferrer' target='_blank'>
                                        <img src={project.thumbnail} className='w-full rounded-t-2xl active:opacity-80' alt={`${projects.name}`} />
                                    </a>
                                    <div className='flex justify-between items-center px-4'>
                                        <h2 className='text-white font-bold text-2xl group-hover:text-blue-400'>{project.name}</h2>
                                        <div className='flex gap-2 justify-center items-center'>
                                            {project.link && <a href={project.link} rel='noreferrer noopener' target='_blank'><img src='images/icons/link.png' alt='link icon' className='w-6 h-6 hover:opacity-50' /></a>}
                                            {project.github && <a href={project.github} rel='noreferrer noopener' target='_blank'><img src='images/icons/github.png' alt='github icon' className='w-6 h-6 hover:opacity-50' /></a>}
                                        </div>
                                    </div>
                                    <p className='text-gray-300 px-4 3xl:h-12'>{project.description}</p>
                                    <ul className='flex flex-wrap gap-2 px-4 pb-4'>
                                        {project.tech.map((tech, index) => {
                                            return (
                                                <li key={index} className='text-blue-400 font-semibold'>{tech}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </section>
    );
}
export default Projects;
