/* eslint-disable react/no-array-index-key */
import React, { useMemo } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { emptyErrorEvent, numberRegExp, STRINGS } from "../../Utils/constants";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { ErrorMessage, ButtonContainer } from "./styles";
import { ArrayOfElements, Select } from "Components/Select/Select";

const Search = ({
  onSearch,
  onClear,
  hasSearchData,
  onCreateNew,
  languages,
  linkTypes,
  gtins,
}: {
  onSearch: SubmitHandler<FieldValues>;
  onClear: () => void;
  hasSearchData: boolean;
  onCreateNew: () => void;
  linkTypes: ArrayOfElements;
  gtins: ArrayOfElements;
  languages: ArrayOfElements;
}) => {
  const labels: {
    key: string;
    label: string;
    arrayOfElements?: ArrayOfElements;
  }[] = [
    { key: "gtin", label: STRINGS.gtin, arrayOfElements: gtins },
    { key: "linkType", label: STRINGS.linkType, arrayOfElements: linkTypes },
    { key: "uri", label: STRINGS.uri },
    {
      key: "acceptLanguage",
      label: STRINGS.acceptLanguage,
      arrayOfElements: languages,
    },
  ];
  const SearchSchema = yup
    .object()
    .shape({
      gtin: yup
        .string()
        .matches(numberRegExp, STRINGS.errorNumber)
        .required("GTIN Requerido"),
      linkType: yup.string(),
      uri: yup.string(),
      language: yup.string(),
    })
    .test((obj) => {
      const objKeys = Object.keys(obj);
      if (objKeys.length && objKeys.filter((key) => !!obj[key]).length > 0) {
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
      <Stack direction="row" spacing={2} marginBottom={2}>
        {labels.map(({ label, key, arrayOfElements }) =>
          arrayOfElements ? (
            <Select
              arrayOfElements={arrayOfElements}
              onChange={(e) => setValue(key, e.target.value)}
              id={key}
              label={label}
            />
          ) : (
            <Input
              key={label}
              id={key}
              label={label}
              error={!!errors?.[emptyErrorEvent]?.message || !!errors[key]}
              onChange={(e) => setValue(key, e.target.value)}
            />
          )
        )}
      </Stack>
      {!!hasErrors && <ErrorMessage>{`${hasErrors}`}</ErrorMessage>}
      <ButtonContainer style={{ justifyContent: "space-between" }}>
        <Button onClick={onCreateNew}>{STRINGS.newProduct}</Button>
        <ButtonContainer>
          <Button onClick={onClear}>{STRINGS.reset}</Button>
          <Button type="submit">{STRINGS.search}</Button>
        </ButtonContainer>
      </ButtonContainer>
    </form>
  );
};

export default Search;
