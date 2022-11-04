import { Link } from "react-router-dom";

export default function Home() {
    return(
        <section className="home flex flex-col
        items-center justify-center text-center">
            <div className="overlay absolute top-24 px-5">
                <article className="text1 lg:w-1/2 lg:mt-44">
                    <h1 className="text-lg text-gray-400 tracking-wider">
                        SO, YOU WANT TO TRAVEL TO 
                        <span className="block text-6xl lg:text-6xl text-white
                        mt-5 mb-8 lg:tracking-widest">SPACE</span></h1>
                    <p className="text-gray-400 w-80">
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                    </p>
                </article>

                <article className="mt-14 lg:mt-48 lg:absolute lg:right-32">
                    <button className="w-48 h-48 rounded-full bg-white text-gray-800 uppercase
                    font-bold text-4xl lg:text-5xl animate-pulse lg:w-52 lg:h-52">
                        <Link to="/destination">
                            <span className="lg:text-2xl">Explore</span>
                        </Link>
                    </button>
                </article>
            </div>
        </section>
    )
}