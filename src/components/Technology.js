import { useState } from "react"
import packageInfo from "../starter-code/data.json"


export default function Technology() {
    const technology = packageInfo.technology
    const [technologies] = useState(technology)
    const [value, setValue] = useState(0)
    const { name, images, description } = technologies[value]
    return (
        <section className="technology">
            <div className="text-gray-100 text-2xl font-extralight" >
                <p className="pt-32 lg:pl-36 tracking-widest text-center lg:text-left">
                 <span className="text-gray-600">03</span> 
                 <span className="ml-4">SPACE LAUNCH 101 </span>
               </p> 
           </div>

           <div className="mt-24 md:grid grid-cols-2 gap-5
            md:items-center lg: max-w-7xl lg:mr-auto lg:ml-36 lg:mt-2">
                <div className="lg:flex">
                   <article className="ml-12 lg:mx-auto">
                      {technologies.map((item, index) => (
                        <button key={index} onClick={() => setValue(index)}
                        className={`h-20 w-20 text-center mr-2 p-2 mb-6 border rounded-full text-gray-100 ${
                            index === value && "bg-white rounded-full text-gray-600"
                           }`}>
                            {index + 1}
                            </button>
                      ))}
                   </article>
                   <article className="lg:ml-16 px-2 mt-2 text-center lg:text-left">
                      <p className="text-gray-400 text-xl tracking-widest mt-2">THE TECHNOLOGY...</p>
                      <h3 className="text-white text-3xl font-extralight uppercase tracking-widest mt-3 mb-8">{name}</h3>
                      <p className="text-gray-400">{description}</p>
                    </article>
                </div>

                <article>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={images.portrait}/>
                        <img src={images.landscape} alt={name} title={name}
                        className="block mx-auto lg:mb-10"/>
                    </picture>
                </article>
           </div>
        </section>
    )
}