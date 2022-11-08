/* eslint-disable react/no-array-index-key */
import React, { useMemo } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { emptyErrorEvent, numberRegExp, STRINGS } from "../../Utils/constants";
import { Button } from "../Button/Button";
import { DatePicker } from "../DatePicker/DatePicker";
import { Input } from "../Input/Input";
import { ErrorMessage, ButtonContainer } from "./styles";

const labels: {
  key: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
}[][] = [
  [
    { key: "firstName", label: STRINGS.firstName },
    { key: "lastName", label: STRINGS.lastName },
    { key: "memberNumber", label: STRINGS.memberNumber },
  ],
  [
    { key: "dob", label: STRINGS.dob, type: "date" },
    { key: "phoneNumber", label: STRINGS.phoneNumber },
    { key: "email", label: STRINGS.email, type: "email" },
  ],
];

const Search = ({ onSearch }: { onSearch: SubmitHandler<FieldValues> }) => {
  const SearchSchema = yup
    .object()
    .shape({
      firstName: yup.string(),
      lastName: yup.string(),
      memberNumber: yup.string().matches(numberRegExp, STRINGS.errorNumber),
      dob: yup
        .date()
        .max(new Date(), STRINGS.errorDate)
        .typeError(STRINGS.errorDate),
      phoneNumber: yup.string().matches(numberRegExp, STRINGS.errorNumber),
      email: yup.string().email(STRINGS.errorEmail),
    })
    .test((obj) => {
      const objKeys = Object.keys(obj);
      if (
        objKeys.length &&
        objKeys.filter((key) => obj[key] !== undefined).length > 0
      ) {
        return true;
      }
      return new yup.ValidationError(
        STRINGS.emptyInputs,
        null,
        emptyErrorEvent
      );
    });
  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(SearchSchema),
  });

  const hasErrors = useMemo(() => {
    if (errors?.[emptyErrorEvent]?.message) {
      return errors[emptyErrorEvent].message;
    }
    return Object.values(errors)
      .map((value) => value?.message)
      .join("\n");
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(onSearch)}>
      {labels.map((inputs, index) => (
        <Stack key={`${index}`} direction="row" spacing={2} marginBottom={2}>
          {inputs.map(({ key, label, type }) =>
            type === "date" ? (
              <DatePicker
                key={key}
                label={label}
                onChange={(v) => setValue(key, v?.format("MM/DD/YYYY"))}
                renderInput={(params) => (
                  <Input
                    {...params}
                    error={
                      !!errors?.[emptyErrorEvent]?.message || !!errors[key]
                    }
                  />
                )}
              />
            ) : (
              <Input
                key={label}
                id={key}
                label={label}
                error={!!errors?.[emptyErrorEvent]?.message || !!errors[key]}
                type={type}
                onChange={(e) => setValue(key, e.target.value)}
              />
            )
          )}
        </Stack>
      ))}
      {!!hasErrors && <ErrorMessage>{`${hasErrors}`}</ErrorMessage>}
      <ButtonContainer>
        <Button type="submit">{STRINGS.search}</Button>
      </ButtonContainer>
    </form>
  );
};

export default Search;
