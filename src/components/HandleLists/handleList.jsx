'use strict';

import React, {useEffect} from "react";
import "./handleList.css";
import Request from "@Components/Request/request";
import mock from "@Helpers/mock";

const $ = require('jquery');
require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
require('jquery-ui/ui/disable-selection');

const HandleList = () => {
    const [requests, setRequests] = React.useState([]);
    const [btnState,setBtnState] = React.useState({id:1,name:"взять работу"});
    const [saveRequests,setSaveRequests] = React.useState([]);
    const takeJob = () => {
        setBtnState({
            id: 2,
            name: "следующая машина"
        });
        if(saveRequests && saveRequests.length > 0){
            const requestId = "request "+saveRequests[0].id;
            const requestObj = $(`#${requestId}`);
            console.log(`#${requestId}`)
            requestObj.addClass("accept-request");
            console.log($('#request_1'));
        }
        offDragNDrop();
    }
    const nextCar = () => {
        onDragNDrop();
        setBtnState({id:1,name:"взять работу"});
    }
    const offDragNDrop = () => {
        $('#firstList').sortable('disable');
        $('#secondList').sortable('disable');
    }
    const onDragNDrop = () => {
        $("#firstList").sortable("enable");
        $("#secondList").sortable("enable");
    }
    const saveRequest = () => {
        const requestsEl = $("#secondList").children();
        const saveRequests = [];
        for(let request of requestsEl){
            const id = request.id.split("_")[1];
            const element = requests.find(x=>x.id === parseInt(id));
            saveRequests.push(element);
        }
        setSaveRequests(saveRequests);
    }
    const getBtnSubmit = (state) => {
        switch (state.id){
            case 1: return takeJob;
            case 2: return nextCar;
            default: return ()=>{}
        }
    }
    useEffect(() => {
        if (screen.width < 600) {
            $("#storage").addClass("body-auto");
        }
        $("#firstList").sortable({
            connectWith: "#secondList",
        });
        $("#secondList").sortable({
            connectWith: "#firstList",
        });
        $(window).resize(() => {
            if (screen.width < 600) {
                $("#storage").addClass("body-auto");
            } else {
                $("#storage").removeClass("body-auto");
            }
        });
        const requestBasic = mock.getAllRequest()
        setRequests(requestBasic);

    }, []);

    return (<div className="handle-list">
        <section className="handle-list-section">
            <h2 className="handle-list-section-title">Новые погрузки</h2>
            <ul className="handle-list-first handle-list-object" id="firstList">
                {
                    requests.map(request => (<Request request={request} key={"request" + request.id}/>))
                }
            </ul>
        </section>
        <section className="handle-list-section q-mt-2">
            <h2 className="handle-list-section-title">Отсортированные погрузки</h2>
            <ul className="handle-list-object" id="secondList">

            </ul>
            {
                btnState.id===1?(<button type="button" className="save-btn handle-list-btn" onClick={saveRequest}>
                    сохранить
                </button>):""

            }
            <button type="button" className="handle-list-btn handle-list-next-btn" onClick={getBtnSubmit(btnState)}>
                {btnState.name}
            </button>
        </section>
    </div>)
}
export default HandleList;