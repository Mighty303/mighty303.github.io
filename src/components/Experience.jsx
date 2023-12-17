const work_exp = [
    {
        role: 'Web Developer',
        company: 'Avena Tech Corporation',
        bullets: [
            'Developed the company’s internal website, to deliver a user-friendly efficient platform for internal documents',
            'Designed and developing external company site for a cleaner modern design',
            'Successfully diagnosed and resolved complex issues with WordPress websites, including troubleshooting plugin conflicts, database connectivity problems, and server-related issues'
        ],
        date: 'Jul 2023 - Present'
    },
    {
        role: 'Research Assistant',
        company: 'Simon Fraser Univserity',
        bullets: [
            'Developed unity simulations for IMU sensor data in order to analyze whether it accurately matches the real world for machine learning models',
            'Proposed an innovative approach to accelerate the data collection process without the need for physical sampling or camera-based video outputs',
            'Competing in the premier international conference of Human Computer interaction (ACM CHI 2024)'
        ],
        date: 'Jun 2023 - Sept 2023'
    },
    {
        role: 'Tech Support',
        company: 'Auphan Software',
        bullets: [
            'Resolved 1000+ tickets for POS software systems, payment processor integration, and software installation with big North American companies',
            'Collaborated with sales, development, and technical support teams to communicate regression reports and ensured tracking and support until resolution• Collaborated with sales, development, and technical support teams to communicate regression reports and ensured tracking and support until resolution',
        ],
        date: 'Mar 2021 - Aug 2021'
    }
]


const Experience = () => {
    return (
        <section id='experience' className='flex flex-col items-center min-h-screen bg-black text-white '>
            <div className='mx-12 md:mx-24'>
                <hr className='p-12 mt-12' />
                <h1 className='font-extralight text-4xl mb-12'>EXPERIENCE</h1>
                <div className='flex flex-col gap-14'>
                    {
                        work_exp.map((work, index) => {
                            return (
                                <div key={index} className='flex flex-col gap-4'>
                                    <div className='flex justify-between'>
                                        <h2 className='text-lg md:text-2xl'>{work.role}</h2>
                                        <h3 className='text-sm md:text-lg'>{work.date}</h3>
                                    </div>
                                    <h3 className='text-blue-500'>{work.company}</h3>
                                    <ul className='list-disc pl-5'>
                                        {
                                            work.bullets.map((bullet, index) => {
                                                return (
                                                    <li key={index} className='mb-1'>{bullet}</li>
                                                )
                                            })
                                        }
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
export default Experience;