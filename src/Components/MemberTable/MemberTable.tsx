import * as React from "react";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import {
  Container,
  TableContainer,
  TableHeaders,
  TableRowCell,
  TableRowCellSelected,
  TableButtonCellHeaders,
} from "./styles";
import {
  Order,
  STRINGS,
  getComparator,
  stableSort,
} from "../../Utils/constants";

interface HeadCell {
  field: keyof MemberItem;
  headerName: string;
}

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof MemberItem
  ) => void;
  order: Order;
  orderBy: string;
  numberOfResults: number;
}

function EnhancedTableHead({
  order,
  orderBy,
  onRequestSort,
  numberOfResults,
}: EnhancedTableProps) {
  const createSortHandler =
    (property: keyof MemberItem) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  const columns: HeadCell[] = [
    {
      field: "firstName",
      headerName: STRINGS.firstName,
    },
    {
      field: "lastName",
      headerName: STRINGS.lastName,
    },
    {
      field: "memberNumber",
      headerName: STRINGS.memberNumber,
    },
    {
      field: "phoneNumber",
      headerName: STRINGS.phoneNumber,
    },
    {
      field: "dob",
      headerName: STRINGS.dob,
    },
    {
      field: "email",
      headerName: STRINGS.email,
    },
  ];

  return (
    <TableHead sx={{ width: "100%" }}>
      <TableRow>
        {columns.map(({ field, headerName }) => (
          <TableCell
            key={field}
            align="left"
            padding="normal"
            sortDirection={orderBy === field ? order : false}
          >
            <TableHeaders
              active={orderBy === field}
              direction={orderBy === field ? order : "asc"}
              onClick={createSortHandler(field)}
            >
              {headerName}
              {orderBy === field ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableHeaders>
          </TableCell>
        ))}
        <TableButtonCellHeaders align="right" padding="normal">
          {`${numberOfResults} ${STRINGS.results}${
            numberOfResults > 0 ? "s" : ""
          }`}
        </TableButtonCellHeaders>
      </TableRow>
    </TableHead>
  );
}

export interface MemberItem {
  id: number;
  lastName: string;
  firstName: string;
  memberNumber: string;
  phoneNumber: string;
  email: string;
  dob: string;
}

const MemberTable = ({ rows }: { rows: MemberItem[] }) => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof MemberItem>("firstName");
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 6;

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof MemberItem
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <Container>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          size="medium"
          stickyHeader
          aria-label="sticky table"
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            numberOfResults={rows.length}
          />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id} hover tabIndex={-1}>
                  <TableRowCell>{row.firstName}</TableRowCell>
                  <TableRowCell>{row.lastName}</TableRowCell>
                  <TableRowCellSelected>
                    {row.memberNumber}
                  </TableRowCellSelected>
                  <TableRowCell>{row.phoneNumber}</TableRowCell>
                  <TableRowCell>{row.dob}</TableRowCell>
                  <TableRowCell>{row.email}</TableRowCell>
                  <TableRowCell>
                    <div style={{ display: "flex", gap: 30 }}></div>
                  </TableRowCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Container>
  );
};

export default MemberTable;
