import React from "react";
import { Table } from "./components/table/Table";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { store } from "./state/store";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const App = observer(() => {
     const [current, setCurrent] = React.useState(0);

     React.useMemo(() => {
          setInterval(() => {
               console.log("set");
               setCurrent((prev) => (prev === 0 ? 1 : 0));
          }, 5000);
     }, []);

     React.useEffect(() => {
          store.fetchData();
     }, []);

     return (
          <div className="App">
               {store.data.length ? (
                    <>
                         <Table switch={setCurrent} data={store.data[current]} />
                    </>
               ) : null}
               {!!store.snackbar && (
                    <Snackbar
                         open
                         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                         onClose={() => store.setSnackBar(null)}
                         autoHideDuration={6000}
                    >
                         <Alert {...store.snackbar} onClose={() => store.setSnackBar(null)} />
                    </Snackbar>
               )}
          </div>
     );
});

export default App;
