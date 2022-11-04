import { useState } from "react"
import packageInfo from "../starter-code/data.json";
import {BsCircle} from "react-icons/bs"

export default function Crew() {
    const crew = packageInfo.crew
    const [people] = useState(crew)
    const [value, setValue] = useState(0)
    const { name, images, role, bio } = people[value]
    return (
        <section className="crew">
           <div className="text-gray-100 text-2xl font-extralight" >
                <p className="pt-32 lg:pl-32 tracking-widest text-center lg:text-left">
                 <span className="text-gray-600">02</span> 
                 <span className="ml-4">MEET YOUR CREW </span>
               </p> 
           </div>

           <div className="mt-24 md:grid grid-cols-2 gap-5
            md:items-center lg: max-w-7xl lg:mr-auto lg:ml-32 lg:mt-2">
              
              <article className="px-2 text-center lg:text-left">
                <h3 className="text-gray-400 text-2xl uppercase mb-2 font-light">{role}</h3>
                <h3 className="text-white text-4xl uppercase mb-8">{name}</h3>
                <p className="text-gray-300 lg:mr-32">{bio}</p>

                <div className="mt-20">
                  {people.map((item, index) => (
                   <button key={index} onClick={() => setValue(index)}
                   className={`mx-2 pb-2 h-5 w-5 rounded-full text-white ${
                    index === value && "bg-white rounded-full"
                   }`}>
                     <BsCircle/>
                   </button>
                   ))}
                </div>
              </article>

              <article>
              <img src={images.png} alt={name} title={name}
                    className="block mx-auto lg:mr-24 w-3/4 mb-10 lg:w-3/4"/>
              </article>
           </div>
        </section>
    )
}