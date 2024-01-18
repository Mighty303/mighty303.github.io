const education = [
    {
        school: 'Simon Fraser Univserity',
        location: 'Vancouver, BC',
        description: 'Bachelor’s degree in Computing Science',
        date: 'May 2022 - Present'
    },
    {
        school: 'Langara College',
        location: 'Vancouver, BC',
        description: 'Dean’s Honor roll',
        date: 'Sep 2021 - Apr 2022'
    },
]


const Education = () => {
    return (
        <section id='education' className='flex flex-col items-center bg-black text-white '>
            <div className='mx-12 md:mx-24 py-12 w-[80%]'>
                <hr className='p-12 mt-12' />
                <h1 className='text-4xl font-extralight mb-12'>EDUCATION</h1>
                <div className='flex flex-col gap-14'>
                    {
                        education.map((school, index) => {
                            return (
                                <div key={index} className='flex flex-col gap-4'>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='text-lg md:text-2xl '>{school.school}</h2>
                                        <h3 className='text-sm md:text-lg'>{school.date}</h3>
                                    </div>
                                    <h3 className='text-blue-500'>{school.location}</h3>
                                    <p className='text-sm md:text-lg'>{school.description}</p>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </section>
    );
}
export default Education;