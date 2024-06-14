import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "slices";

interface TableData { label: string; value?: string; link?: boolean }


const OverviewTabs = () => {
    const userSelector = createSelector(
        (state:RootState)=>state.Profile,
        (result)=>({
            tableData:[
                { label: "Phone No", value: result.user?.phone ||""},
                { label: "Email", value: result.user?.email ||""},
                { label: "Joining Date", value: result.user?.created_date ||""},
            ]
        })
    )

    const {tableData} = useSelector(userSelector) 

    
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-x-5 2xl:grid-cols-12">
                <div className="2xl:col-span-12">
                    <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
                    </div>
                    
                </div>
                <div className="2xl:col-span-12">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Personal Information</h6>
                            <div className="overflow-x-auto">
                                <table className="w-full ltr:text-left rtl:ext-right">
                                    <tbody>
                                        {
                                            (tableData || [])?.map((item: TableData, index: number) => (
                                                <tr key={index}>
                                                    <th className="py-2 font-semibold ps-0" scope="row">{item.label}</th>
                                                    <td className="py-2 text-right text-slate-500 dark:text-zink-200">
                                                        {item.link ? <a href="http://themesdesign.in/" rel="noopener"className="text-custom-500">www.themesdesign.in</a> : item.value}
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-x-5 lg:grid-cols-2 2xl:grid-cols-3">
            </div>
        </React.Fragment>
    );
}

export default OverviewTabs;