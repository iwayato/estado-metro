import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://api.xor.cl/red/metro-network";

function App() {

    const [data, setData] = useState([]);

    const getData = () => {
        axios
            .get(url)
            .then(response => {
                console.log("Se obtuvieron datos");
                setData(response.data)
            })
            .catch(
                setData([])
            )
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(data.lines);

    return (
        <div>
            <h1>API Status: {data.api_status}</h1>
        </div>
    );
}

export default App;
