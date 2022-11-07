import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Tes6 = () => {

    const [data, setData] = useState(null)

    const [input, setInput] = useState({
        name : '',
        course : '',
        score : 0
    })

    const [display, setDisplay] = useState(true)

    const [fetchStatus, setFetchStatus] = useState(true)
    const [currentid, setCurrentId] = useState(-1)

    useEffect(() => {

        let fetchData = () => {
        axios.get("http://backendexample.sanbercloud.com/api/student-scores")
            .then((res) => {
                let resultData = res.data
                console.log(resultData)
                setData(...resultData)

            })
        }

        if(fetchStatus){
            fetchData()
            setFetchStatus(false)
        }

    }, [fetchStatus, setFetchStatus])

    const handleIndexScore = (params) => {
        if (params >= 80) {
            return "A"
        } else if (params => 70 && params < 80) {
            return "B"
        } else if (params => 60 && params < 70) {
            return "C"
        } else if (params => 50 && params < 60) {
            return "D"
        } else if (params < 50) {
            return "E"
        }
    }

    const handleInput = (event) => {

        let name = event.target.name
        let value = event.target.value

     
        setInput({...input, [name] : value})


    }

    const handleSubmit = (event) => {

        event.preventDefault()
        // console.log(input)

        let {name, course, score} = input

        if (currentid === -1) {
            
            axios.post('http://backendexample.sanbercloud.com/api/student-scores', {name, course, score})
            .then((res) => {
               console.log(res)
               setFetchStatus(true )
            })
            .catch((err) => {
                alert(err)
                console.log(err)
            })

        }else{
            axios.put("http://backendexample.sanbercloud.com/api/student-scores/${currentId}", 
            {name,course,score} )
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
            })
            .catch((err) => {
                alert(err)
                console.log(err)
            })
        }


        setInput(
            {
                nama: "",
                course: "",
                score: 0
            }
        )

        setCurrentId(-1)


    }

    const handleDelete = (event) => {
        let idData = event.target.value
        console.log(idData)

        axios.delete('http://backendexample.sanbercloud.com/api/student-scores/{idData')
        .then((res) => {
            setFetchStatus(true)
        })
    }

    const handleEdit = (event) => {
        let idData = event.target.value
        console.log(idData)

        axios.get("http://backendexample.sanbercloud.com/api/student-scores/${idData}")
        .then((res) => {
            console.log(res)
            setCurrentId(res.data.id)
            setInput(
                {
                    name : res.data.name,
                    course : res.data.course,
                    score : res.data.score
                }
            )

        })
    }

    return (

        <div className="relative mx-[50vh]">

        <div className="overflow-x-auto shadow-md sm:rounded-lg mb-12">
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
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data != null && data.length !== 0 && data.map((res, Index) => {
                            return (
                                <tr key={res.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="py-4 px-6 font-bold text-gray-600 whitespace-nowrap dark:text-white">
                                        {Index + 1}
                                    </th>
                                    <td className="py-4 px-7">
                                        {res.name}
                                    </td>
                                    <td className="py-4 px-7">
                                        {res.course}
                                    </td>
                                    <td className="py-4 px-8">
                                        {res.score}
                                    </td>
                                    <td className="py-4 px-12">
                                        {handleIndexScore(res.score)}
                                    </td>
                                    <td>
                                        <button className="p-2 mr-5 rounded-md bg-slate-400 text-white" onClick={handleDelete} value={res.id}>delete</button>
                                        <button className="p-2 mr-5 rounded-md bg-slate-400 text-white"onClick={handleEdit} value={res.id}>edit</button>
                                    </td>
                                </tr>
                            )

                        })}
                    {
                        data === null && (
                            <>
                            
                            {data === null ? <tr></tr> :
                            <tr>
                                <td><p>Tidak ada data</p></td>
                            </tr>
}
                            </>
                        )
                    }

                </tbody>
            </table>
        </div>

            <div className="container mx-auto mt-20">

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Name"
                            />
                        </div>
                        <TextInput onChange={handleInput} value={input.name}
                            name="name"
                            id="email1"
                            type="text"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Course"
                            />
                        </div>
                        <TextInput onChange={handleInput} value={input.course}
                            name="course"
                            id="email1"
                            type="text"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Score"
                            />
                        </div>
                        <TextInput onChange={handleInput} value={input.score}
                            name="score"
                            id="email1"
                            type="number"
                            required={true}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">
                            Remember me
                        </Label>
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>

        </div>


    );

}

export default Tes6