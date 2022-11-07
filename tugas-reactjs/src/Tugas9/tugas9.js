import React, { useState } from "react";

const Tes3 = () => {

    const [tambah, set] = useState(1);

    const inc = () => {
        set(tambah + 1)
    }

    return (
        <div className="Tes">
            <center>
                <p>{tambah}</p>
                <button onClick={inc} className="button">Tambah</button>
                {tambah >= 10 ? <p>State count sudah lebih dari 10!!</p> : ""}
            </center>
        </div>
    )
}

export default Tes3