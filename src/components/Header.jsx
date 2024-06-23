import { useState } from "react";
import { useLocation } from "react-router-dom"
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants/index"
import { brainwave as webchat } from "../assets"
import MenuSvg from '../assets/svg/MenuSvg'
import { HamburgerMenu } from "./design/Header";
import Button from "./Button";


const Header = () => {
    const pathName = useLocation();
    const [toggleMenu, setToggleMenu] = useState(false);

    const toggleNavigation = () => {
        if (toggleMenu) {
            setToggleMenu(false)
            enablePageScroll();
        } else {
            setToggleMenu(true);
            disablePageScroll();
        }
    }

    const handeClick = () => {
        if (!toggleMenu) return;

        enablePageScroll();
        setToggleMenu(false);
    }
    return (
        <>
            <div className={ `fixed top-0 left-0 w-full z-50 
        border-b border-n-6 lg:bg-n-8/90 ${toggleMenu ? "bg-n-8" : "bg-n-8/90"}
        lg:backdrop-blur-sm ` }>
                < div className="flex items-center p-3 lg:px-7.5 xl:px-10 mx-lg:py-4">
                    < a className="flex items-center" href="#hero"
                        onClick={ handeClick } >
                        <img src={ webchat } height={ 40 } />
                        <h1 className="font-black text-4xl">Webchat</h1>
                    </a >
                    <nav className={ `${toggleMenu ? "flex" : "hidden"} fixed top-[3rem] left-0 
                right-0 bottom-0 bg-n-8 lg:static lg:flex 
                lg:mx-auto lg:bg-transparent`}>
                        <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                            { navigation.map((item) => (
                                <a className={ `block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1
                            ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25
                            lg:text-xs lg:font-semibold ${item.url === pathName.hash ? 'z-2 lg:text-n-1' : 'text-n-1/50'} lg:leading-3 lg:hover: text-n-1` } key={ item.id } href={ item.href }>
                                    { item.title }
                                </a>
                            )) }
                        </div>
                        <HamburgerMenu />
                    </nav>
                    <a href="#signup" className="button hidden mr-8 text-n-1/50 transition-colors
                 hover:text-n-1 lg:block  ">
                        New account
                    </a>
                    <Button className="hidden lg:flex" href="#login">
                        Sign In
                    </Button>

                    <Button className="ml-auto lg:hidden px-3"
                        onClick={ toggleNavigation }>
                        <MenuSvg toggleMenu={ toggleMenu } />
                    </Button>
                </div >
            </div >
        </>
    )
}

export default Header
