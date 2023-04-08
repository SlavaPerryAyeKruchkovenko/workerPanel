'use strict';

import React, {useEffect} from "react";
import "./handleList.css";
import Request from "@Components/Request/request";
import mock from "@Helpers/mock";
import {X} from 'react-feather';

const $ = require('jquery');
require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
require('jquery-ui/ui/disable-selection');

const HandleList = () => {
    const [requests, setRequests] = React.useState([]);
    const [btnState, setBtnState] = React.useState({id: 1, name: "взять работу"});
    const [haveError, setHaveError] = React.useState(false);
    const [errorText, setErrorText] = React.useState("error");
    const [saveRequests, setSaveRequests] = React.useState([]);
    const takeJob = () => {
        const secondList = $("#secondList");
        if (saveRequests && saveRequests.length > 0) {
            setBtnState({
                id: 2,
                name: "следующая машина"
            });
            const requestId = "request_" + saveRequests[0].id;
            const requestObj = $(`#${requestId}`);
            requestObj.addClass("accept-request");
            offDragNDrop();
        } else if (saveRequests && saveRequests.length === 0 && secondList.children().length) {
            setHaveError(true);
            setErrorText("Перед отправкой сохраните результат");
        } else {
            setHaveError(true);
            setErrorText("Выберите хотя бы 1 машину");
        }

    }
    const nextCar = () => {
        if (saveRequests && saveRequests.length > 0) {
            onDragNDrop();
            const requestId = "request_" + saveRequests[0].id;
            const requestObj = $(`#${requestId}`);
            requestObj.removeClass("accept-request");
            requestObj.remove();
            setBtnState({id: 1, name: "взять работу"});
        }
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
        for (let request of requestsEl) {
            const id = request.id.split("_")[1];
            const element = requests.find(x => x.id === parseInt(id));
            saveRequests.push(element);
        }
        setSaveRequests(saveRequests);
    }
    const getBtnSubmit = (state) => {
        switch (state.id) {
            case 1:
                return takeJob;
            case 2:
                return nextCar;
            default:
                return () => {
                }
        }
    }
    const closeAlert = () => {
        setHaveError(false);
        setErrorText("");
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
    useEffect(() => {
        if (haveError) {
            const interval = setInterval(() => {
                const error = $("#error");
                if(error){
                    setHaveError(false);
                    setErrorText("");
                }
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [haveError])
    return (<div className="handle-list">
        {
            haveError && (
                <div className="alert" role="alert" id="error">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         className="alert-icon" viewBox="0 0 16 16" role="img"
                         aria-label="Warning:">
                        <path
                            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <div>
                        {errorText}
                    </div>
                    <X className="close" onClick={closeAlert}/>
                </div>)
        }
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
                btnState.id === 1 ? (<button type="button" className="save-btn handle-list-btn" onClick={saveRequest}>
                    сохранить
                </button>) : ""

            }
            <button type="button" className="handle-list-btn handle-list-next-btn" onClick={getBtnSubmit(btnState)}>
                {btnState.name}
            </button>
        </section>
    </div>)
}
export default HandleList;