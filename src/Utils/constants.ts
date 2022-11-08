import { parse, isDate } from "date-fns";
export const STRINGS = {
  searchProductTitle: "Buscar productos",
  firstName: "Nombre",
  lastName: "Apellido",
  memberNumber: "Número de miebro",
  phoneNumber: "Número de telefono",
  dob: "Fecha de nacimiento",
  email: "Email",
  results: "Resultado",
  emptyInputs: "Debe ingresar algún motivo de busqueda",
  errorEmail: "Debe ser un mail valido",
  errorNumber: "Debe ser un número",
  errorDate: "Debe ser una fecha",
  search: "Buscar",
};

export type Order = "asc" | "desc";
export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export const emptyErrorEvent = "AvailabilityErrorField";
export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export const numberRegExp = /^[0-9]*$/;

export const parseDateString = (value: any, originalValue: any) => {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "MM/dd/yyyy", new Date());

  return parsedDate;
};

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
