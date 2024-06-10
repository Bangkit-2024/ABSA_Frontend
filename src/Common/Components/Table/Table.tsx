import React from "react";

interface TableProps {
  headers: string[];
  contents: string[][];
  children?: React.Component;
}

const SimpleTable = ({ headers, contents }: TableProps) => {
  return (
    <React.Fragment>
      <div className="card overflow-auto">
        <table className="w-full">
          <thead className="ltr:text-left rtl:text-right ">
            <tr>
              {headers.map((header) => (
                <th className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {contents.map((content,i:number) => (
              <tr className="transition-all duration-300 ease-linear hover:bg-slate-50 dark:hover:bg-zink-600" key={`${i}+hr`}>
                {content.map((item,i) => (
                  <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500" key={i}>
                    {item}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default SimpleTable;
