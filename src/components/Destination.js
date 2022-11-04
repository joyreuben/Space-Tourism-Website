
import { useState } from "react";
import packageInfo from "../starter-code/data.json";

export default function Destination() {
    const destinations = packageInfo.destinations
    const [planets] = useState(destinations)
    const [value, setValue] = useState(0)
    const { name, images, description, distance, travel } = planets[value]

    return (
        <section className="destination" >
            <div className="text-gray-100 text-2xl font-extralight">
               <p className="pt-32 lg:pl-20 tracking-widest text-center lg:text-left">
                  <span className="text-gray-600">01</span> 
                  <span className="ml-4">PICK YOUR DESTINATION</span>
               </p>
            </div>
            
            <div className="mt-20 md:grid grid-cols-2 gap-5
            md:items-center lg: max-w-7xl lg:mr-auto lg:ml-32 lg:mt-12">
                <article>
                    <img src={images.png} alt={name} title={name}
                    className="block mx-auto w-3/4 mb-10 "/>
                </article>

                <article className="text-center lg:mx-16 lg:text-left">
                 {planets.map((item, index) => (
                    <button key={index} onClick={() =>setValue(index)}
                    className={`text-white uppercase text-2xl
                    pb-2 mx-2 ${
                        index === value && "border-b border-white"
                    }`}>
                        {item.name}
                    </button>
                 ))}
                    <h2 className="text-white text-5xl font-bold uppercase tracking-widest
                    mt-10 mb-5">
                        {name}
                    </h2>
                    <p className="text-gray-400 pb-10">{description}</p>
                    <ul className="flex items-center justify-between flex-wrap border-t 
                    border-gray-400 pt-6">
                        <li className="text-white text-3xl">
                           <span className="block text-2xl">Avg. Distance</span> {distance}
                        </li>
                        <li className="text-white text-3xl"> 
                            <span className="block text-2xl" >Est. Travel Time</span>Time {" "}{travel}</li>
                    </ul>
                </article>
            </div>
        </section>
    )
}