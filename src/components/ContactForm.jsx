import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const form = useRef();
    const [submitState, setSubmitState] = useState(null);
    const { 
        register, 
        handleSubmit, 
        reset,
        formState,
        formState: { errors, isSubmitSuccessful } 
    } = useForm();

    useEffect(() => {
      if (formState.isSubmitSuccessful) {
        reset()
      }
    }, [formState, reset])

    const sendEmail = async (e) => {
      try {
        const result = await emailjs.sendForm('service_sa565wk', 'template_zrazbxb', form.current, '2fTNM90hgIdKMWfLm');
        console.log(result.text);
        setSubmitState('success');
      } catch (error) {
        console.error(error);
        setSubmitState('error');
      }
  
      setTimeout(() => {
        setSubmitState(null);
      }, 3000);
    };

    return (
      <div className='flex justify-center h-auto md:h-auto overflow-hidden rounded-lg'>
        <form
          className='p-8 md:p-12 border rounded-xl flex flex-col w-full md:w-2/3 lg:w-1/4 gap-6'
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
            <div className='flex flex-col gap-1'>
                <label>
                    Name <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                    type='text'
                    {...register('name', {
                        required: 'This is required',
                        minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                        },
                    })}
                    placeholder='Name'
                    className={`border-2 ${errors.name ? 'border-rose-500' : ''} rounded-md p-3 bg-white text-black placeholder-gray-500`}
                />
                <p className='text-red-500 font-semibold'>
                    {errors.name?.message}
                </p>
            </div>
            <div className='flex flex-col gap-1'>
                <label>
                    Email <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                    type='email'
                    {...register('client_email', {
                    required: 'This is required',
                    pattern: {
                        value: /^([A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,})$/i,
                        message: 'Invalid email address',
                    },
                    })}
                    placeholder='Email'
                    className={`border-2 ${errors.client_email ? 'border-rose-500' : ''} rounded-md p-3 bg-white text-black placeholder-gray-500`}
                />
                <p className='text-red-500 font-semibold'>
                    {errors.client_email?.message}
                </p>
            </div>
            <div className='flex flex-col gap-1'>
                <label>
                    Phone Number
                </label>
                <input
                    type='tel'
                    {...register('client_phone', {
                    pattern: {
                        value: /^(?:\+?1\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                        message: 'Invalid phone number',
                    },
                    })}
                    placeholder='+1 (604) 000-0000'
                    className={`border-2 ${errors.client_phone ? 'border-rose-500' : ''} rounded-md p-3 bg-white text-black placeholder-gray-500`}
                />
                <p className='text-red-500 font-semibold'>
                    {errors.client_phone?.message}
                </p>
            </div>
            <div className='flex flex-col gap-1'>
                <label>Message</label>
                <textarea
                    {...register('client_message',
                    {required: 'This is required',
                    minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters',
                    },
                  })}
                    className={`border-2 ${errors.client_message ? 'border-rose-500' : ''} rounded-md px-2 pb-10 md:px-4 md:pt-4 md:pb-20 resize-none bg-white text-black placeholder-gray-500`}
                    placeholder='Write your message here...'
                />
                <p className='text-red-500 font-semibold'>
                    {errors.client_message?.message}
                </p>
            </div>
            <button className='flex items-center gap-2 mx-auto bg-blue-600 text-white px-4 py-3 mt-1 rounded-md hover:bg-blue-500 active:opacity-80 duration-300'>
                <img src='images/icons/email.png' alt='email' className='h-5 w-5' />
                Send Message
            </button>
        </form>

        {submitState === 'success' && (
          <div role='alert' className='toast'>
            <div className='alert alert-success text-white'>
              <span>Message Sent Successfully</span>
            </div>
          </div>
        )}
        {submitState === 'error' && (
          <div role='alert' className='toast'>
            <div className='alert alert-error text-white'>
              <span>Error, please try again</span>
            </div>
          </div>
        )}
      </div>
    );
}
        
export default ContactForm;