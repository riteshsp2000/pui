import React, { useEffect, useState } from 'react';

import TablePagination from '@mui/material/TablePagination';

import {
  dataDefault as defaultData,
  fieldsDefault
} from './constants';
import PuiTable from './Table';

export const TableWithPagination = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState(defaultData);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setData(defaultData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));
  }, [page, rowsPerPage]);

  return (
    <>
      <PuiTable
        data={data}
        fields={fieldsDefault}
        title="Table with Pagination and Search"
        tableProps={{ stickyHeader: true }}
        tableContainerProps={{ sx: { maxHeight: 440 } }}
      />
      <TablePagination
        component="div"
        count={defaultData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15, 20]}
      />
    </>
  );
};
