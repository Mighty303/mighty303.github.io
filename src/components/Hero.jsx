import TypeWriter from 'typewriter-effect';
import GraphemeSplitter from "grapheme-splitter";

const Hero = () => {
    const stringSplitter = string => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(string);
      };

    return (
        <header id='hero' className=' h-svh text-white'>
            <section className='flex flex-col justify-center items-center gap-6 sm:gap-6 md:gap-12'>
                <h1 className='flex flex-col text-center text-3xl gap-4 mt-8'>
                👋 Hey, my name is
                    <span className='pb-4 text-6xl md:text-7xl font-semibold text-transparent bg-clip-text inline-block bg-gradient-to-r from-fuchsia-500 to-cyan-500'>Martin Wong</span>
                </h1>
                <div className='flex justify-center items-center'>
                    <img id='pfp' className='w-2/3 md:w-96 lg:w-[23%] rounded-full' src='images/headshot.jpg' alt='profile picture' />
                </div>
                <div className='type-writer text-2xl md:text-5xl'>
                    <TypeWriter
                        options={{
                            strings: [
                                "I'm a 3rd year CS student at SFU📚", 
                                "SWE Intern @ Rivian",
                                "Incoming SWE Intern @ EA" 
                            ],
                            autoStart: true,
                            loop: true,
                            stringSplitter: stringSplitter
                        }} 
                    />
                </div>
                <section className='flex flex-col md:flex-row gap-4 font-black'>
                    <a href='Resume_2_0_4.pdf' rel='noopener noreferrer' target='_blank'>
                        <div className='h-14 w-32 md:w-40 rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-[3px]'>
                            <div className='flex h-full w-full items-center justify-center bg-black hover:bg-gradient-to-r hover:from-indigo-500 from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 hover:to-90% p-[3px]'>
                                <img src='images/icons/resume.png' alt='resume' className='h-5 w-5' />
                                <p className='text-sm md:text-lg text-white p-1'>Resume</p>
                            </div>
                        </div>
                    </a>
                    <a href='https://github.com/Mighty303' rel='noopener noreferrer' target='_blank'>
                        <div className='h-14 w-32 md:w-40 rounded-md bg-gradient-to-r from-indigo-500 from-10% via-purple-500 to-pink-500 to-90% p-[3px]'>
                            <div className='flex h-full w-full items-center justify-center bg-black hover:bg-gradient-to-r hover:from-indigo-500 from-10% hover:via-purple-500 hover:via-30% hover:to-pink-500 hover:to-90%'>
                                <img src='images/icons/github.png' alt='github' className='h-5 w-5' />
                                <p className='text-sm md:text-lg text-white p-1'>Github</p>
                            </div>
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/martin-wong-b05160230/' rel='noopener noreferrer' target='_blank'>
                        <div className='h-14 w-32 md:w-40 rounded-md bg-gradient-to-r from-pink-500 from-10% to-yellow-500 to-90% p-[3px]'>
                            <div className='flex h-full w-full items-center justify-center bg-black hover:bg-gradient-to-r hover:from-pink-500 from-10% hover:via-30% hover:to-yellow-500 hover:to-90%'>
                                <img src='images/icons/linked.png' alt='linkedin' className='h-5 w-5' />
                                <p className='text-sm md:text-lg text-white p-1'>LinkedIn</p>
                            </div>
                        </div>
                    </a>
                    <a href='mailto:martinwong303@gmail.com' rel='noopener noreferrer' target='_blank'>
                        <div className='h-14 w-32 md:w-40 rounded-md bg-gradient-to-r from-yellow-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-[3px]'>
                            <div className='flex h-full w-full items-center justify-center bg-black hover:bg-gradient-to-r hover:from-yellow-500 from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 hover:to-90%'>
                                <img src='images/icons/email.png' alt='email' className='h-5 w-5' />
                                <p className='text-sm md:text-lg text-white p-1'>Email</p>
                            </div>
                        </div>
                    </a>
                </section>
            </section>
        </header>
    )
}
export default Hero;