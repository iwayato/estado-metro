import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./components/Home";

const url = "https://api.xor.cl/red/metro-network";

function App() {

    const [lines, setLines] = useState([]);
    const [time, setTime] = useState("");

    const getData = () => {
        axios
            .get(url)
            .then(response => {
                setLines(response.data.lines)
                setTime(response.data.time.split(" ")[1])
            })
    }

    useEffect(() => {
        getData()
        const interval = setInterval(() => {
            getData()
        }, 300000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div style={{
            backgroundColor: '#373737',
            width: '100%',
            height: '100vh',
        }}>
            <Home
                lines = {lines}
                time = {time}>
            </Home>
        </div>
    );
}

export default App;