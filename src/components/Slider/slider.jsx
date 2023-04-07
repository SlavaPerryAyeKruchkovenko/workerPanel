import React from "react";
import "./slider.css";
import DropChanger from "@Components/DropChanger/dropChanger";

const Slider = () => {
    const [slide,setSlide] = React.useState(1);
    const openFirstFragment = () => {
        setSlide(1);
    }
    const openSecondFragment = () => {
        setSlide(2);
    }
    return(
        <div className="slider">
            {
                slide===1?(
                    <DropChanger/>
                ):""
            }
            <div className="slider-btn">
                <div className="point" onClick={openFirstFragment}>
                    {
                        slide===1?(
                            <div className="medium-point"/>
                        ):""
                    }
                </div>
                <div className="low-point ml-10"/>
                <div className="point ml-10" onClick={openSecondFragment}>
                    {
                        slide===2?(
                            <div className="medium-point"/>
                        ):""
                    }
                </div>
                <button type="button" className="save-btn save-button" onClick={openSecondFragment}>выбрать</button>
            </div>
        </div>
    )
}
export default Slider;