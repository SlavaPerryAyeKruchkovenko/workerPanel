import React from "react";
import "./slider.css";

const Slider = ({setHaveSession,slides=[],canOpenSecondFragment,secondCallback=()=>{}}) => {
    const [slide, setSlide] = React.useState(1);
    const [haveSave,setHaveSave] = React.useState(true);
    /*const openFirstFragment = () => {
        if(setHaveSession){
            setHaveSession(false);
        }
        setSlide(1);
    }*/
    const openSecondFragment = () => {
        if(canOpenSecondFragment){
            if(secondCallback){
                secondCallback();
            }
            if (setHaveSession) {
                setHaveSession(true);
            }
            setSlide(2);
            setHaveSave(false);
        }
    }

    const getSlides = (slide) => {
        if(slides){
            switch (slide) {
                case 1:
                    return slides[0];
                case 2:
                    return slides[1];
                default:
                    return "";
            }
        }
        return "";
    }
    return (
        <div className="slider">
            {
                getSlides(slide)
            }
            <div className="slider-btn">
                <div className="point">
                    {
                        slide === 1 ? (
                            <div className="medium-point"/>
                        ) : ""
                    }
                </div>
                <div className="low-point ml-10"/>
                <div className="point ml-10" onClick={openSecondFragment}>
                    {
                        slide === 2 ? (
                            <div className="medium-point"/>
                        ) : ""
                    }
                </div>
                {
                    haveSave && (<button type="button" className="save-btn save-button" onClick={openSecondFragment}>
                        выбрать
                    </button>)
                }
            </div>
        </div>
    )
}
export default Slider;