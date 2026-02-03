import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
const env = import.meta.env;


import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        const toastId = toast.loading('Sending message...');
        emailjs
            .sendForm(env.VITE_EMAILJS_SERVICE_ID, env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
                publicKey: env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    toast.success('Message sent successfully!', { id: toastId });
                    form.current.reset()
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                toast.error('Failed to send message', { id: toastId });
            })
            .finally(() => {
                setLoading(false);
            });
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>get In
                    <span className='text-purple'>
                        Touch
                    </span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Lets's talk!</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    {/* Contact Form */}
                    <div>
                        <form ref={form} onSubmit={sendEmail} className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                                <input
                                    className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'

                                    type="text" name='user_name' required />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                                <input
                                    className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'

                                    type="email" name='user_email' required />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                                <textarea
                                    className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                                    type="text" name='message' required />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full px-6 py-3 rounded-lg font-medium transition duration-300 ${loading
                                    ? 'bg-gray-500 cursor-not-allowed'
                                    : 'bg-purple hover:bg-purple-700 cursor-pointer'}`}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                            {/* <button type='submit' value="Send" className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>Send Message</button> */}
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className='space-y-8'>
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>
                                    Location
                                </h3>
                                <p className='text-gray-400'>Near Shiv Mandir, Sant Tukaram Nagar, Pimpri, Pune - 411018</p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>
                                    Email
                                </h3>
                                <p className='text-gray-400'>omkarshelar1635@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>
                                    Phone
                                </h3>
                                <p className='text-gray-400'>+91 9657583286</p>
                            </div>
                        </div>
                        <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4'>Follow Me
                            </h3>
                            <div className='flex space-x-4'>
                                <a href="https://www.linkedin.com/in/omkar-shelar-97189130a/" target="_blank"
                                    rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white-400 hover:bg-blue-400 hover:text-white transition duration-300'>
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/OmkarShelar1635" target="_blank"
                                    rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white-400 hover:bg-purple-400 hover:text-white transition duration-300'>
                                    <FaGithub />
                                </a>

                                <a href="https://x.com/01__omkar__" target="_blank"
                                    rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300'>
                                    <FaTwitter />
                                </a>
                                

                            </div>

                        </div>

                    </div>
                </div>

            </div>



        </motion.div>
    )
}

export default Contact
