import React from 'react'

export default function Contact() {




    return (
        <section id='contact' className='scroll-mt-18 sm:scroll-mt-16'>
            <form className="flex-col p-4 bg-stone-600 md:h-96  mt-32 rounded-md" action='./Contact.jsx' method='post' >
                <h1 className="text-center mb-4 text-2xl">Get in touch</h1>
                <div className="flex justify-between text-black">

                    <input name='name' type="text" placeholder="Name" className="w-1/2 mr-1 p-2 rounded-md"></input>
                    <input name='email' type="email" placeholder="Email address" className="w-1/2 ml-1 p-2 rounded-md"></input>
                </div>
                <textarea name='message' className="w-full h-48 mt-3 p-2 rounded-md text-black" rows="4" placeholder="What would you like to say?"></textarea>

                <button type="submit" className="bg-black p-3 rounded-full m-2">Send</button>
            </form>
        </section>
    )
}
