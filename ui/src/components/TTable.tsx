import React from 'react';
import { useTable } from "react-table";

/*
interface Data {
  name: String;
  email: String;
  title: String;
  department: String;
  status: String;
  role: String;
  imgUrl: String;
}

interface Columns {
  Header: String;
  accessor: String;
}

interface Props {
  columns: Array<Columns>;
  data: Array<Data>;
}
 */

const TTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
  return (
    <table {...getTableProps()} border={1}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TTable;