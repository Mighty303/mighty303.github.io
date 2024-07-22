import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section id='contact' className='flex flex-col items-center  text-white pb-24'>
            <div className='mx-12 md:mx-24 w-[80%]'>
                <hr className='p-12 mt-12' />
                <h2 className='font-extralight text-4xl mb-12 uppercase'>Contact</h2>
                <ContactForm />
            </div>
        </section>
    );
}
export default Contact;