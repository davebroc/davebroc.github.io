import React from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = React.useRef();
    const [didMsgSend, setMsgSend] = React.useState(false)

    const serviceID = 'service_ss9z8f3'
    const templateID = 'template_i7zhuzh'
    const publicKey = 'HSmcKSO8s1wJhHVJS'

    emailjs.init(publicKey);

    function sendEmail(e) {
        e.preventDefault();


        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setMsgSend(true)
                setTimeout(() => {
                    setMsgSend(false)
                }
                    , 1000);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

    };


    return (
        <section id='contact' className='relative scroll-mt-18 sm:scroll-mt-16'>
            <form ref={form} onSubmit={sendEmail} className="flex-col p-4 bg-slate-600 md:h-96  mt-32 rounded-md"  >
                <h1 className="text-center mb-4 text-2xl">Get in touch</h1>
                <div className="flex justify-between text-black">
                    <input name='name' type="text" placeholder="Name" className="w-1/2 mr-1 p-2 rounded-md"></input>
                    <input name='email' type="email" placeholder="Email address" className="w-1/2 ml-1 p-2 rounded-md"></input>
                </div>
                <textarea name='message' className="w-full h-48 mt-3 p-2 rounded-md text-black" rows="4" placeholder="What would you like to say?"></textarea>
                <div className='flex gap-4 justify-between items-center mt-3'>
                    <button type="submit" className="bg-slate-800 p-3 rounded-full">Send</button>
                    <p>Email: <a className='underline' href='mailto:davebrockbank02@gmail.com'>davebrockbank02@gmail.com</a></p>

                </div>

                {didMsgSend && <div className='op absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-slate-600 text-1xl p-5 rounded-full text-center'>&#10004; Message Sent</div>}
            </form>
        </section>
    )
}
