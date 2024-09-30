import React from "react";
import { Data, Table } from "./components/table/Table";
import axios from "axios";

function App() {
     // const data = {
     //      id: 3,
     //      type: "departure",
     //      date: "2024-09-30",
     //      airPortName: "Бугульма",
     //      createdAt: "2024-09-30T11:07:19.457Z",
     //      updatedAt: "2024-09-30T11:07:19.457Z",
     //      schedule: [
     //           {
     //                id: 5,
     //                carrier: "ЮВТ Аэро",
     //                time: "21:45",
     //                flightName: "Бугульма — Сургут",
     //                flightNumber: "RT 333",
     //                fact: "-",
     //                reamark: "-",
     //                flightId: 3,
     //                createdAt: "2024-09-30T11:07:19.470Z",
     //                updatedAt: "2024-09-30T11:07:19.470Z",
     //           },
     //           {
     //                id: 4,
     //                carrier: "ЮВТ Аэро",
     //                time: "04:00",
     //                flightName: "Бугульма — Москва",
     //                flightNumber: "RT 301",
     //                fact: "-",
     //                reamark: "-",
     //                flightId: 3,
     //                createdAt: "2024-09-30T11:07:19.470Z",
     //                updatedAt: "2024-09-30T11:07:19.470Z",
     //           },
     //      ],
     // };
     const [data, setData] = React.useState<any>([]);

     React.useEffect(() => {
          axios.get("http://174.16.100.67:5000/score").then((req) => {
               setData(req.data[0]);
          });
     }, []);

     return <div className="App">{data.type ? <Table data={data} /> : null}</div>;
}

export default App;
