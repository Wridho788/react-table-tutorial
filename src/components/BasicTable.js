import React, { useMemo } from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import { useTable } from 'react-table';
import './style.css';

const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    const tableInstance = useTable({ column: COLUMNS, data: MOCK_DATA });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance;

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderGroupProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                        <th></th>
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default BasicTable;
