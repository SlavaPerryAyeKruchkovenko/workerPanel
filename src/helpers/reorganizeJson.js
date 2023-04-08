import { json } from "react-router-dom"

function reorganize(payload){
    //console.log(payload)
    const list = []
    for (let t in payload["data"]){
        //console.log(payload["data"][t])
        let pass_number = payload["data"][t][0]
        let car_number = payload["data"][t][1]
        let full_name_driver = payload["data"][t][2]
        let recipient_organization = payload["data"][t][3]
        let checkpoint_id = payload["data"][t][4]
        let metal = payload["data"][t][5]
        let production_volume = payload["data"][t][6]
        let type_production_volume = payload["data"][t][7]


        list.push( {
            "pass_number" : pass_number,
            "car_number" : car_number,
            "full_name_driver" : full_name_driver,
            "recipient_organization" : recipient_organization,
            "checkpoint_id" : checkpoint_id,
            "type_production_volume" : type_production_volume,
            "production_volume" : production_volume,
            "factory_id" : 1,
            "metal" : metal
        })
        

        // list.push( {
        //     "pass_number" : {pass_number},
        //     "car_number" : {car_number},
        //     "full_name_driver" : {full_name_driver},
        //     "recipient_organization" : {recipient_organization},
        //     "checkpoint_id" : {checkpoint_id},
        //     "type_production_volume" : {type_production_volume},
        //     "production_volume" : {production_volume},
        //     "factory_id" : 1,
        //     "metal" : metal
        // })
    }
    
    return list
}

export default reorganize