import "./different.css";
import React from "react";
import { useTable } from "react-table";
import gt from "../../../../assests/home_page/gt1.jpeg";

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="px-4 py-2 sm:px-6 sm:py-4 text-center text-base sm:text-xl font-medium text-white uppercase tracking-wider"
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody
        {...getTableBodyProps()}
        className="bg-white divide-y divide-gray-200"
      >
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className="hover:bg-gray-100 transition duration-200"
            >
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  className="text-center text-base sm:text-xl px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap"
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const Different = () => {
  const data = [
    { feature: "MCA Registered", iit: true, others: false },
    { feature: "MSME Registered", iit: true, others: false },
    { feature: "ISO Certified", iit: true, others: false },
    { feature: "AICTE Accredited", iit: true, others: false },
    { feature: "International interns", iit: true, others: false },
    { feature: "Colleges Associated", iit: true, others: false },
    { feature: "Recognized by Linkedin", iit: true, others: false },
    { feature: "Trusted by Clients", iit: true, others: false },
    { feature: "Own Internship Platform", iit: true, others: false },
    { feature: "Mentoring by Experts", iit: true, others: false },
  ];

  const columns = React.useMemo(
    () => [
      {
        Header: "FEATURES",
        accessor: "feature",
      },
      {
        Header: "IIT ACADEMY INTERNSHIP",
        accessor: "iit",
        Cell: ({ value }) =>
          value ? (
            <div className="flex justify-center">
              <img className="w-[25px] h-[25px] text-center" src={gt}></img>
            </div>
          ) : (
            "❌"
          ),
      },
      {
        Header: "OTHERS",
        accessor: "others",
        Cell: ({ value }) => (value ? "✅" : "❌"),
      },
    ],
    []
  );

  return (
    <div className="different-page w-full min-h-screen py-10 px-4 sm:px-8 lg:px-32 text-black">
      <div className="w-full pt-10 sm:pt-20 border-b-[1px] border-zinc-700 pb-5 sm:pb-10">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-['Neue_Montreal'] tracking-tight text-center ">
          Our Offerings
        </h1>
      </div>
      <div className="mt-10 animate-fadeIn text-black">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Different;
