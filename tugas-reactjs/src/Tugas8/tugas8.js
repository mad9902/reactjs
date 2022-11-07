import React from "react"

const Tes2 = (props) => {

    return (

        <div className="Tes">

            <h1>Data diri peserta kelas Reactjs</h1>
            <hr></hr>
        
                    <ul>

                        <li>
                            <p>
                        <b>Nama Lengkap :</b> {props.name}
                            </p>
                        </li>

                        <li>
                            <p>
                        <b>Email :</b> {props.email}
                            </p>
                        </li>

                        <li>
                            <p>
                        <b>Batch Pelatihan :</b> {props.batch}
                            </p>
                        </li>

                    </ul>

        </div>


    );

}

export default Tes2