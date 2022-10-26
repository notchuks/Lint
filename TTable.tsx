import React, { useState, useMemo } from 'react';
import { useTable, useFilters, usePagination } from "react-table";

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

export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = useMemo(() => {
    const options = new Set<any>(); // added any
    preFilteredRows.forEach((row: any) => {
      options.add(row.values[id]); // added any
    });
    const optionsArray = Array.from(options); // convert set to array
    return optionsArray;                      //[...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      name={id}
      id={id}
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};


const TTable = ({ columns, data, size }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
  } = useTable({ columns, data, initialState: { pageSize: size } }, useFilters, usePagination);
  return (
   <>
    {headerGroups.map((headerGroup) =>
      headerGroup.headers.map((column) =>
        column.Filter ? (
          <div key={column.id}>
            <label htmlFor={column.id}>{column.render("Header")}: </label>
            {column.render("Filter")}
          </div>
        ) : null
      )
    )}
    <table {...getTableProps()} border={1}>
      <caption>Transaction History</caption>
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
        {page.map((row, i) => {
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
    <div className="pagination">
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </button>{' '}
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>{' '}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>{' '}
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </button>{' '}
      <span>
        Page{' '}
        <strong>
          {state.pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
      {/*
      <select  // dynamically set page size
        value={state.pageSize}
        onChange={e => {
            setPageSize(Number(e.target.value))
        }}
      >
        {[5, 10, 20].map(pageSize => (
            <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
      */}
    </div>
   </>
  );
};

export default TTable;