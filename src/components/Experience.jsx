import { useState } from "react";

const work_exp = [
    {
        company: 'Electronic Arts',
        thumbnail: 'images/icons/jobs/EA.png',
        role: 'Incoming Software Developer Intern',
        bullets: [
        ],
        date: 'May 2025 - Aug 2025'
    },
    {
        company: 'Rivian',
        thumbnail: 'images/icons/jobs/rivian.png',
        role: 'Software Developer Intern',
        bullets: [
        ],
        date: 'Sep 2024 - Apr 2025'
    },
    {
        company: 'Avena Tech Corporation',
        thumbnail: 'images/icons/jobs/avena.png',
        role: 'Software Developer Intern',
        bullets: [
            'Redesigned, developed and deployed full-stack websites utilizing Figma, React, and Tailwind optimizing load times by 75%',
            'Streamlined deployment by utilizing BASH and Docker Compose to create a CI/CD pipeline for testing, building, and deploying Docker containers, reducing development time by 50%',
            'Developed and deployed a new blogging platform with containerized REST API endpoints using Express.js, AWS S3, and PostgreSQL, migrating over 60 WordPress blogs to a new, efficient platform for future blogs',
            'Coordinated 20 meetings to discuss requirements and design changes with clients, outsourced developers, UX/UI designers, and SEO experts to optimize website ranking and user engagement'
        ],
        date: 'Jul 2023 - Present'
    },
    {
        company: 'Simon Fraser Univserity',
        thumbnail: 'images/icons/jobs/sfu.png',
        role: 'Research Assistant',
        bullets: [
            'Developed Unity simulations in C# and Python for IMU sensor data in order to analyze whether it accurately matches the real world, allowing researchers to see how good their machine learning models are',
            'Collected XYZ and rotational data generated from training data generated by the T2M-GPT model in order for researchers to identify joints of motion to increase accuracy to real human motion',
            'Collaborated with graduate students from SFU and Dartmouth College under the supervision of Dr. Xing-Dong Yang'
        ],
        date: 'Jun 2023 - Sept 2023'
    },
    {
        company: 'Auphan Software',
        thumbnail: 'images/icons/jobs/auphan.png',
        role: 'Technical Support',
        bullets: [
            'Resolved 1000+ tickets for POS software systems, payment processor integration, and software installation with big North American companies, increasing CSAT by 30%',
            'Collaborated with sales, development, and technical support teams to communicate regression reports and ensured tracking and support until resolution',
            'Troubleshooted database and server outages involving Apache, PostgreSQL, and pgbouncer',
        ],
        date: 'Mar 2021 - Aug 2021'
    }
]


const Experience = () => {
    const [experience, setExperience] = useState(0);

    const selectExperience = (index) => {
        setExperience(index);
    }

    return (
        <section id='experience' className='flex flex-col items-center  text-white '>
            <div className='mx-12 md:mx-24 w-[80%]'>
                <hr className='p-12 mt-12' />
                <h2 className='font-extralight text-4xl mb-12'>EXPERIENCE</h2>
                <section className='flex flex-col md:flex-row justify-start items-start gap-12'>
                    <div className='flex flex-col'>
                        {work_exp.map((work, index) => {
                            return (
                                <figure key={index} 
                                    className={`min-h-20 flex gap-4 items-center text-lg md:text-xl border-l-4 border-[#1F1E1E] cursor-pointer px-4 pr-24 py-4 text-nowrap ${index === experience ? 'bg-[#1F1E1E] border-white text-white' : ''}`}
                                    onClick={() => selectExperience(index)}>
                                    <img src={work.thumbnail} alt={work.company} className='w-12 h-full md:w-30 md:h-full' />
                                    <h3>{work.company}</h3>
                                </figure>
                            )
                        })}
                    </div>
                    <div className='w-full'>
                        {
                            work_exp.map((work, index) => {
                                return (
                                    <div key={index}>
                                        {
                                            index === experience &&
                                            <section className='flex flex-col gap-4 min-w-full max-w-full'>
                                                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
                                                    <h2 className='text-2xl md:text-3xl'>{work.company}</h2>
                                                    <h3 className='text-sm md:text-lg'>{work.date}</h3>
                                                </div>
                                                <h3 className='text-blue-500 text-xl'>{work.role}</h3>
                                                <ul className='list-disc pl-5'>
                                                    {
                                                        work.bullets.map((bullet, index) => {
                                                            return (
                                                                <li key={index} className='mb-3'>{bullet}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </section>
                                        }
                                    </div>
                                )
                            }
                        )}
                    </div>
                </section>
            </div>
        </section>
    );
}
export default Experience;