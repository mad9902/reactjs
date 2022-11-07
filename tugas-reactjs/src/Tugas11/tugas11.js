import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Tes5 = () => {

    const [data, setData] = useState(null)

    const [display, setDisplay] = useState(true)

    useEffect(() => {

        axios.get("http://backendexample.sanbercloud.com/api/student-scores")
        .then((res)=> {

            setData(res.data)

        })
        .catch((err) => {
            console.log(err)
            alert(err)
        })

    }, [])

    const handleIndexScore = (params) => {
        if(params >= 80){
            return "A"
        }else if (params => 70 && params <80){
            return "B"
        }else if (params => 60 && params <70){
            return "C"
        }else if (params => 50 && params <60){
            return "D"
        }else if (params < 50){
            return "E"
        }
    }

    return (

        <div className="Tes5">

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-[50vh] mb-12">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-purple-500 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                No
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nama
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Mata Kuliah
                            </th>
                            <th scope="col" className="py-3 px-6">
                               Nilai
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Index Nilai
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                
               {
                data != null && data.length !== 0 && data.map((e, Index) => {
                    return(
                        <tr key={e.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="py-4 px-6 font-bold text-gray-600 whitespace-nowrap dark:text-white">
                            {Index + 1}
                        </th>
                        <td className="py-4 px-7">
                            {e.name}
                        </td>
                        <td className="py-4 px-7">
                            {e.course}
                        </td>
                        <td className="py-4 px-8">
                            {e.score}
                        </td>
                        <td className="py-4 px-12">
                            {handleIndexScore(e.score)}
                        </td>
                    </tr>
                    )
                })
               } 
                       
                    </tbody>
                </table>
            </div>


        </div>

    );

}

export default Tes5