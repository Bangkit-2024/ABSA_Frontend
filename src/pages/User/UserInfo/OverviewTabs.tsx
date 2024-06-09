import React from "react";

interface TableData { label: string; value?: string; link?: boolean }

const tableData: TableData[] = [
    { label: "Phone No", value: "617 219 6245" },
    { label: "Email", value: "paula@themesdesign.com" },
    { label: "Birth of Date", value: "15 Dec, 1998" },
    { label: "Joining Date", value: "01 July 2023" },
];

const OverviewTabs = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-x-5 2xl:grid-cols-12">
                <div className="2xl:col-span-12">
                    <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
                    </div>
                    {/* <div className="card">
                        <div className="card-body">
                            <h6 className="mb-3 text-15">About Me</h6>
                            <p className="mb-2 text-slate-500 dark:text-zink-200">A Web Developer creates and designs different websites for clients. They are responsible for their aesthetic as well as their function. Professionals in this field may also need to be able to ensure sites are compatible with multiple types of media. Web Developers need to have a firm understanding of programming and graphical design. Having a strong resume that emphasizes these attributes makes it significantly easier to get hired as a Web Developer.</p>
                            <p className="text-slate-500 dark:text-zink-200">As a web designer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites. Solving code problems. Editing & Design with designing team in the company to build perfect web designs.</p>
                        </div>
                    </div> */}
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