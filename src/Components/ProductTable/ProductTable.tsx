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
  TableButtonCellHeaders,
} from "./styles";
import {
  Order,
  STRINGS,
  getComparator,
  stableSort,
} from "../../Utils/constants";
import { Link } from "react-router-dom";
import { IconButton } from "Components/IconButton/IconButton";
import { Edit } from "Assets";

interface HeadCell {
  field: keyof DocumentItem;
  headerName: string;
}

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof DocumentItem
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
    (property: keyof DocumentItem) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  const columns: HeadCell[] = [
    {
      field: "gtin",
      headerName: STRINGS.gtin,
    },
    {
      field: "linkType",
      headerName: STRINGS.linkType,
    },
    {
      field: "uri",
      headerName: STRINGS.uri,
    },
    {
      field: "acceptLanguage",
      headerName: STRINGS.acceptLanguage,
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
            numberOfResults !== 1 ? "s" : ""
          }`}
        </TableButtonCellHeaders>
      </TableRow>
    </TableHead>
  );
}

export interface DocumentItem {
  _id: string;
  gtin: string;
  acceptLanguage: string;
  uri: string;
  linkType: string;
  context: string;
}

const ProductTable = ({
  rows,
  openModal,
}: {
  rows: DocumentItem[];
  openModal: (item: DocumentItem) => void;
}) => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof DocumentItem>("_id");
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 6;

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof DocumentItem
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
                <TableRow
                  key={row._id}
                  hover
                  tabIndex={-1}
                  onClick={() => openModal(row)}
                >
                  <TableRowCell>{row.gtin}</TableRowCell>
                  <TableRowCell>
                    <Link
                      to=""
                      onClick={(e) => {
                        window.location.href = row.uri;
                        e.stopPropagation();
                      }}
                    >
                      {row.uri}
                    </Link>
                  </TableRowCell>
                  <TableRowCell>{row.linkType}</TableRowCell>
                  <TableRowCell>{row.acceptLanguage}</TableRowCell>
                  <TableRowCell />
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

export default ProductTable;
