import React from "react";
import ReactDOM from "react-dom";
import {saveAs} from "file-saver";

import "./styles.css";

const onDownload = async () => {
    console.log("download start");
    saveAs("https://www.w3schools.com/html/pic_trulli.jpg", "downloaded.jpg");
    console.log("download finished");
    console.log("onClick start");

};

function App() {
    return (
        <div className="App">
            <h1>File Saver Sample</h1>
            <img src="https://www.w3schools.com/html/pic_trulli.jpg" />
            <button onClick={onDownload}>Download</button>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
