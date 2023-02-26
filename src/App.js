import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://api.xor.cl/red/metro-network";

function App() {

    const [status, setStatus] = useState("");
    const [issues, setIssues] = useState("");
    const [lines, setLines] = useState([]);
    const [time, setTime] = useState("");

    const getData = () => {
        axios
            .get(url)
            .then(response => {
                setStatus(response.data.api_status)
                setIssues(response.data.issues)
                setLines(response.data.lines)
                setTime(response.data.time)
            })
            .catch(
                console.log("Error")
            )
    }

    useEffect(() => {
        getData()
        const interval = setInterval(() => {
            getData()
        }, 300000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1>API Status : {status}</h1>
            <h1>Problemas en la red : {issues ? "Si" : "No"}</h1>
            <h1>Hora : {time}</h1>
            {lines.map((line) => 
                <p>{line.name}</p>
            )}
        </div>
    );
}

export default App;