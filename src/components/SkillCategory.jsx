import React from 'react'
import SkillItem from './SkillItem'

export default function SkillCategory({ text, children, id }) {
    const [isOpen, setOpen] = React.useState(false);





    function showChildren() {
        setOpen(!isOpen);

    }


    return (
        <div>

            <button onMouseEnter={showChildren} className="flex text-center justify-center items-center p-2 m-4 rounded-md  inline-block bg-fuchsia-700">                {text}

            </button>
            {isOpen ? (
                <ul >
                    {children.map(skillItem => (
                        <li>
                            <SkillItem>{skillItem}</SkillItem>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>

    )
}
