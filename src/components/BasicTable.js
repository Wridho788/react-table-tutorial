import React, { useMemo } from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMN } from './columns';
import { useTable } from 'react-table';

const BasicTable = () => {
    const columns = useMemo(() => COLUMN, []);
    const data = useMemo(() => MOCK_DATA, []);

    const tableInstance = useTable({ columns, data });

    return (
        <table>
            <thead>
                <tr></tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
};

export default BasicTable;
