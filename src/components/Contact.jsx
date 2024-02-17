import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className=' pt-18 w-full h-screen p-4 text-white bg-gradient-to-b from-gray-700 to-gray-500'>
        <div className=' flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
            <div className='pb-8'>
                <p className=' text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500'> Contact </p>
                <p className=' pt-4 md:py-6'> Submit the form below to get in touch with me! </p>
            </div>
            <div className=' flex justify-center items-center'>
                <form method='POST' action="https://getform.io/f/dcec5d43-a01c-4d2f-90dc-7c0a2a56255e" className=' flex flex-col w-full md:w-1/2'>
                    <input required type="text" name="name" placeholder='Enter your name' className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'  />
                    <input required type="email" name="email" placeholder='Enter your email' className=' my-2 md:my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'  />
                    <textarea name="message" placeholder='Enter your message' rows="10" className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' ></textarea>
                    <button className=' text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'> Connect with me!</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact