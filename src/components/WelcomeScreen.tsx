import { useState } from 'react';
import { filesPath, iconsPath } from '../util/paths';

import Scene from '../Scene';
// import createPDF from '../PDF/pdf';

type Props = {}

export default function WelcomeScreen({ }: Props) {
    const [isPopupOpen, setPopupOpen] = useState(true);

    const closePopup = () => {
        setPopupOpen(false);
    };
    const controls = [
        {
            icon: "hover.png",
            alt: "hover",
            text: "Hover over planets for info",
        },
        {
            icon: "left-click.png",
            alt: "left-click",
            text: "Left click drag to rotate camera",
        },
        {
            icon: "right-click.png",
            alt: "right-click",
            text: "Right click drag to move camera",
        },
        {
            icon: "mouse-scroll.png",
            alt: "mouse-scroll",
            text: "Scroll to zoom in and out",
        },
    ]


    return (
        <>
            {isPopupOpen && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-75">
                    <article className=" md:w-1/2 bg-black p-4 rounded-md flex flex-col gap-12">
                        <h1 className="text-3xl">Welcome to David's CV</h1>
                        <section className="grid grid-cols-2 gap-y-6 place-items-start  w-full">
                            {controls.map(control =>
                                <div className="w-fit">
                                    <img className="w-16" src={iconsPath + control.icon} alt={control.alt} />
                                    <p>{control.text}</p>
                                </div>
                            )}
                        </section>

                        <nav className='flex  justify-between smt-2'>
                            <a href={filesPath + "David_Brockbank_CV.pdf"} target="_blank" >
                                < button className=" bg-gray-700 p-2 rounded-md hover:text-gray-200">
                                    PDF Version
                                </button>
                            </a>

                            {/* {createPDF()} */}
                            < button className=" bg-blue-600 p-2 rounded-md hover:text-gray-700" onClick={closePopup}>
                                Okay
                            </button>
                        </nav>

                    </article>
                </div >
            )
            }

            <Scene />
        </>
    )
}