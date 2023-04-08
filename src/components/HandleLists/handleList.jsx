import React, {useEffect} from "react";
import "./handleList.css";
import Request from "@Components/Request/request";
import mock from "@Helpers/mock";
import 'jquery-ui';

const HandleList = () => {
    const [requests, setRequests] = React.useState([]);

    useEffect(() => {
        setRequests(mock.getAllRequest);
    }, []);

    return (<div className="handle-list">
        <section className="handle-list-section">
            <h2 className="handle-list-section-title">Новые погрузки</h2>
            <ul className="handle-list-first handle-list-object">
                {
                    requests.map(request => (<Request request={request}  key={"request"+request.id}/> ))
                }
            </ul>
        </section>
        <section className="handle-list-section">
            <h2 className="handle-list-section-title">Отсортированные погрузки</h2>
            <ul className="handle-list-object">
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