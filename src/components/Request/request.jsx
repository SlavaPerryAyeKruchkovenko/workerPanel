import React from "react";
import "./request.css";

const Request = ({request}) => {
    const getMetal = (id) => {
        switch (id){
            case 2:  return "ЦИНК ЦВ0 ПАКЕТ  1";
            case 3:  return "КЛИНКЕР  1";
            case 4:  return "СПЛАВ ЦА04 БЛОК 1Т  1";
            case 5: return   "СПЛАВ ЦА06 БЛОК 1Т  1";
            case 6: return "СПЛАВ ЦА08 БЛОК 1Т  1";
            case 7:  return "КАДМИЙ КД0  1";
        }
        return "";
    }
    const getMetalVars = (id) => {
        const metal = getMetal(id);
        const str = metal.split(" ");
        str.pop();
        return {
            name: str.join(" "),
            weight: metal.split(" ").at(-1)+(id===7?"КГ":"T")
        }
    }
    return (
        <li className="request" id={"request_"+request.id}>
            <span className="request-name">{request?request.car_number:''}</span>
            <div className="request-products">
                {
                    request && request.MetalTrucks && request.MetalTrucks.map(product => {
                        const metal = getMetalVars(product.MetalId)
                        return(
                            <div className="request-product" key={"product"+product.id}>
                                <span className="request-product-name">{metal.name}</span>
                                <span className="request-product-weight">{metal.weight}</span>
                            </div>
                        )
                    })
                }
            </div>
        </li>
    );
}
export default Request;