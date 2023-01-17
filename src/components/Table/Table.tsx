import React, { useMemo } from 'react';

import Box from '@mui/material/Box';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import {
  PuiTableProps,
  PuiTableRowFilled
} from './Table.types';
import {
  getDefaultValue,
  getFields,
  getRenderableValue,
  getValue
} from './utils';

const PuiTable = <T,>(props: PuiTableProps<T>) => {
  const {
    title,
    data,
    fields,
    loading = false,
    defaultEmptyValue = '--',
    noRecordMsg = 'No Data',

    tableHeadProps,
    tableRowProps,
    tableCellProps,
    tableBodyProps,
    tableProps,
    tableContainerProps,
  } = props;

  const fieldsToRender: PuiTableRowFilled<T> = useMemo(() => getFields(fields), [fields]);

  return (
    <>
      {title &&
        getRenderableValue(
          title,
          <Typography variant="h4" sx={{ color: 'text.primary', marginBottom: '1rem' }}>
            {title}
          </Typography>,
        )}

      {!data.length ? (
        getRenderableValue(
          noRecordMsg,
          <Box>
            <Typography variant="h3" sx={{ color: 'text.secondary', marginBottom: '1rem' }}>
              {noRecordMsg}
            </Typography>
          </Box>,
        )
      ) : (
        <TableContainer sx={{ opacity: loading ? 0.7 : 1 }} {...tableContainerProps}>
          <MuiTable {...tableProps}>
            <TableHead {...tableHeadProps}>
              <TableRow {...tableRowProps}>
                {fieldsToRender.map((field, index) => (
                  <TableCell
                    key={`${title || 'table'}-head-cell-${index}-${Math.random()}`}
                    {...tableCellProps}
                  >
                    {field.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody {...tableBodyProps}>
              {data.map((row, rowIndex) => (
                <TableRow
                  key={`${title || 'table'}-body-row-${rowIndex}-${Math.random()}`}
                  {...tableRowProps}
                >
                  {fieldsToRender.map((field, cellIndex) => (
                    <TableCell
                      key={`${title || 'table'}-body-cell-${cellIndex}-${Math.random()}`}
                      {...tableCellProps}
                    >
                      {getDefaultValue(getValue(field, row), defaultEmptyValue)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>
      )}
    </>
  );
};

export default PuiTable;
