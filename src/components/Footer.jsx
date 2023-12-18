const Footer = () => {
    return (
        <section id='footer' className='flex flex-col items-center bg-black text-white pb-12'>
            <div className='mx-12 md:mx-24 w-[80%]'>
                <hr className='p-12 mt-12' />
                <h1 className='font-extralight text-4xl mb-12 uppercase'>Contact</h1>
                <div className='flex md:flex-row justify-center gap-4'>
                    <a href='https://github.com/Mighty303' rel='noopener noreferrrer' target='_blank'>
                        <div className='h-14 w-32 md:w-40 rounded-md bg-white p-[3px]'>
                            <div className='flex h-full w-full items-center justify-center bg-black'>
                                <img src='images/icons/github.png' alt='github' className='h-5 w-5' />
                                <p className='text-sm md:text-lg text-white p-1'>Github</p>
                            </div>
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/martin-wong-b05160230/' rel='noopener noreferrrer' target='_blank'>
                        <div className='h-14 w-32 md:w-40 rounded-md bg-white p-[3px]'>
                            <div className='flex h-full w-full items-center justify-center bg-black'>
                                <img src='images/icons/linked.png' alt='linkedin' className='h-5 w-5' />
                                <p className='text-sm md:text-lg text-white p-1'>LinkedIn</p>
                            </div>
                        </div>
                    </a>
                    <a href='mailto:martinwong303@gmail.com' rel='noopener noreferrrer' target='_blank'>
                        <div className='h-14 w-32 md:w-40 rounded-md bg-white p-[3px]'>
                            <div className='flex h-full w-full items-center justify-center bg-black '>
                                <img src='images/icons/email.png' alt='email' className='h-5 w-5' />
                                <p className='text-sm md:text-lg text-white p-1'>Email</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
export default Footer;