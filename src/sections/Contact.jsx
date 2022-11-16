import React from 'react'

export default function Contact() {
    return (
        <form className="flex-col p-4 bg-blue-600 mt-32">
            <h1 className="text-center mb-4 text-2xl">Get in touch</h1>
            <div className="flex justify-between text-black">

                <input type="text" placeholder="Name" className="w-1/2 mr-1 p-2 rounded-md"></input>
                <input type="email" placeholder="Email address" className="w-1/2 ml-1 p-2 rounded-md"></input>
            </div>
            <textarea className="w-full mt-3 p-2 rounded-md text-black" rows="4" placeholder="What would you like to say?"></textarea>

            <button type="submit" className="bg-red-500 p-3 rounded-full m-2">Send</button>
        </form>
    )
}
