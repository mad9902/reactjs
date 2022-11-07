import { Table } from "flowbite-react";
import React from "react"

const Tes4 = () => {

    return (

        <div className="Tes2">

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
                            <th scope="col" className="py-3 px-14">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="py-4 px-6 font-bold text-gray-600 whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td className="py-4 px-7">
                                John
                            </td>
                            <td className="py-4 px-7">
                                Algoritma
                            </td>
                            <td className="py-4 px-8">
                                80
                            </td>
                            <td className="py-4 px-12">
                                A
                            </td>
                            <td className="py-4 px-6 text-right">
                                <a href="#" className="font-medium text-black p-2 rounded-lg border-2 border-gray-300 m-2">Edit</a>
                                <a href="#" className="font-medium text-white p-2  rounded-lg border-2 bg-red-500 border-gray-300 m-2">Delete</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="py-4 px-6 font-bold text-gray-600 whitespace-nowrap dark:text-white">
                                2
                            </th>
                            <td className="py-4 px-7">
                                Doe
                            </td>
                            <td className="py-4 px-7">
                                Matematika
                            </td>
                            <td className="py-4 px-8">
                                70
                            </td>
                            <td className="py-4 px-12">
                                B
                            </td>
                            <td className="py-4 px-6 text-right">
                                <a href="#" className="font-medium text-black p-2 rounded-lg border-2 border-gray-300 m-2">Edit</a>
                                <a href="#" className="font-medium text-white p-2 rounded-lg border-2 bg-red-500 border-gray-300 m-2">Delete</a>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="py-4 px-6 font-bold text-gray-600 whitespace-nowrap dark:text-white">
                                3
                            </th>
                            <td className="py-4 px-7">
                                Frank
                            </td>
                            <td className="py-4 px-7">
                                Kalkulus
                            </td>
                            <td className="py-4 px-8">
                                60
                            </td>
                            <td className="py-4 px-12">
                                C
                            </td>
                            <td className="py-4 px-6 text-right">
                                <a href="#" className="font-medium text-black p-2 rounded-lg border-2 border-gray-300 m-2">Edit</a>
                                <a href="#" className="font-medium text-white p-2 rounded-lg border-2 bg-red-500 border-gray-300 m-2">Delete</a>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="py-4 px-6 font-bold text-gray-600 whitespace-nowrap dark:text-white">
                                4
                            </th>
                            <td className="py-4 px-7">
                                Jason
                            </td>
                            <td className="py-4 px-7">
                                Basis Data
                            </td>
                            <td className="py-4 px-8">
                                90
                            </td>
                            <td className="py-4 px-12">
                                A
                            </td>
                            <td className="py-4 px-6 text-right">
                                <a href="#" className="font-medium text-black p-2 rounded-lg border-2 border-gray-300 m-2">Edit</a>
                                <a href="#" className="font-medium text-white p-2 rounded-lg border-2 bg-red-500 border-gray-300 m-2">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>

    );

}

export default Tes4