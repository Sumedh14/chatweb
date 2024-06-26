import { curve, heroBackground, robot } from "../assets"
import Button from "./Button"
import Section from "./Section"

const Hero = () => {
    return (
        <Section
            className="pt-[8rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            id="hero"
        >
            <div className="container relative">
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-10 lg:mb-[6rem]">
                    <h1 className="h1 mb-6">
                        Explore the posibilites with
                        <span className="inline-block relative">Webchat
                            <img src={ curve } className="absolute top-full left-0 w-full xl:-mt-2"
                                width={ 624 } height={ 28 } alt="Curve" />
                        </span>
                    </h1>
                    <p className="mt-8 mb-8 text-n-3 lg:mt-10 xl:mt-25">
                        Feel the power and updgrade your productivity with the open AI chat app <strong>Webchat</strong>
                    </p>
                    <Button href="/pricing" white>
                        Get started
                    </Button>
                </div>
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] ">
                                <img src={ robot } className="w-full" width={ 1440 } height={ 1800 } alt="hero" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-[90%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[80%] md:w-[138%] lg:-top-[140%]">
                        <img src={ heroBackground }
                            className="w-full"
                            width={ 1440 }
                            height={ 1800 }
                            alt="hero" />
                    </div>
                </div>
            </div>
        </Section >
    )
}

export default Hero
