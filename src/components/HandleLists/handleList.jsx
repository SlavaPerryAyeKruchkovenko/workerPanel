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

    useEffect(() => {
        $( "#firstList" ).sortable({
            connectWith: "#secondList"
        });
        $( "#secondList" ).sortable({
            connectWith: "#firstList"
        });
        setRequests(mock.getAllRequest);
    }, []);

    return (<div className="handle-list">
        <section className="handle-list-section">
            <h2 className="handle-list-section-title">Новые погрузки</h2>
            <ul className="handle-list-first handle-list-object" id="firstList">
                {
                    requests.map(request => (<Request request={request}  key={"request"+request.id}/> ))
                }
            </ul>
        </section>
        <section className="handle-list-section">
            <h2 className="handle-list-section-title">Отсортированные погрузки</h2>
            <ul className="handle-list-object" id="secondList">
                {
                    requests.map(request => (<Request request={request}  key={"request"+request.id}/> ))
                }
            </ul>
            <button type="button" className="save-btn handle-list-btn">
                выбрать
            </button>
            <button type="button" className="handle-list-btn handle-list-next-btn">
                следующая машина
            </button>
        </section>
    </div>)
}
export default HandleList;