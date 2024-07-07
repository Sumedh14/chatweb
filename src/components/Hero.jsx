import { useRef, useState } from "react"

import { curve, heroBackground, robot } from "../assets"
import Button from "./Button"
import Section from "./Section"
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero"
import { ScrollParallax } from "react-just-parallax"
import Generating from "./Generating"
import Notification from "./Notification"
import CompanyLogoes from "./CompanyLogoes"
import Chatwindow from "./Chatwindow"


const Hero = () => {

    const [togglewindow, setToggleWindow] = useState(false);
    const parallaxRef = useRef(null)

    const toggleWindowFunction = () => {
        if (togglewindow) {
            setToggleWindow(false);
        } else {
            setToggleWindow(true);
        }
    }

    return (
        <Section
            className="pt-[8rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            id="hero"
        >
            <div className="container relative">
                <div className="relative z-1 max-w-[62rem] mx-auto text-center 
                mb-[4rem] md:mb-10 mt-20 lg:mb-[6rem]" ref={ parallaxRef }>
                    <h1 className="h1 mb-6">
                        Explore the posibilites with { ` ` }
                        <span className="inline-block relative">Webchat
                            <img src={ curve } className="absolute top-full left-0 w-full xl:-mt-2"
                                width={ 624 } height={ 28 } alt="Curve" />
                        </span>
                    </h1>
                    <p className="mt-8 mb-8 text-n-3 lg:mt-10 xl:mt-25">
                        Feel the power and updgrade your productivity with the open AI chat app <strong>Webchat</strong>
                    </p>
                    <Button onClick={ toggleWindowFunction } white>
                        Get started
                    </Button>
                </div>
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        { togglewindow === true ? <Chatwindow /> :
                            <>
                                <div className="relative bg-n-8 rounded-[1rem]">
                                    <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                                    <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] ">
                                        <img src={ robot } className="w-full" width={ 1440 } height={ 1800 } alt="hero" />
                                        <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2
                                            md:right-auto md:bottoom-8 md:w-[31rem] md:translate-x-1/4 lg:translate-x-1/2"/>
                                        <ScrollParallax isAbsolutelyPositioned>
                                            <Notification className="absolute lg:-left-[5.5rem] lg:bottom-[llrem] lg:w-[18rem] xl:flex
                                             "title='Code generation' />
                                        </ScrollParallax>
                                    </div>
                                </div>
                                <Gradient />
                            </> }
                    </div>
                    <div className="absolute -top-[90%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[80%] md:w-[138%] lg:-top-[140%]">
                        <img src={ heroBackground }
                            className="w-full"
                            width={ 1440 }
                            height={ 1800 }
                            alt="hero" />
                    </div>
                </div>
                <BackgroundCircles />
                <CompanyLogoes className="relative z-10 mt-20 display-block" />
            </div>
            <BottomLine />
        </Section >
    )
}

export default Hero
