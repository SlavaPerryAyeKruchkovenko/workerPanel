import React from "react";
import "./slider.css";
import DropChanger from "@Components/DropChanger/dropChanger";
import HandleList from "@Components/HandleLists/handleList";

const Slider = ({setHaveSession}) => {
    const [slide, setSlide] = React.useState(2);
    const [haveSave,setHaveSave] = React.useState(true);
    const openFirstFragment = () => {
        setHaveSession(false);
        setSlide(1);
    }
    const openSecondFragment = () => {
        setHaveSession(true);
        setSlide(2);
        setHaveSave(false);
    }

    const getSlides = (slide) => {
        switch (slide) {
            case 1:
                return <DropChanger/>;
            case 2:
                return <HandleList/>;
            default:
                return "";
        }
    }
    return (
        <div className="slider">
            {
                getSlides(slide)
            }
            <div className="slider-btn">
                <div className="point" onClick={openFirstFragment}>
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