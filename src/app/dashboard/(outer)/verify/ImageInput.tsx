"use client";

import { ChangeEvent, useState } from "react";


export default function ImageInput() {
    const [file, setFile] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
        if (e.target.files) {
            setFile(URL.createObjectURL(e.target.files[0]));
        }
    }
    return <div>
        <input type="file" name="passport" id="passport" onChange={handleChange} />
        <img src={file} />
    </div>
}