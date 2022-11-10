/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";

import { Modal, Fade, Stack } from "@mui/material";

import { Close } from "../../Assets";
import MemberDetailItem from "../MemberDetailItem/MemberDetailItem";
import {
  BackdropContainer,
  ModalContainer,
  ModalSubContainer,
  Title,
  CloseContainer,
  InfoContainer,
  ColumnInfoContainer,
} from "./styles";
import { STRINGS } from "../../Utils/constants";
import { Button } from "Components/Button/Button";
import { createProduct, updateProduct } from "Api/apiCalls";
import { DocumentItem } from "Components/MemberTable/MemberTable";

interface MemberDetailsProps {
  isDetailsOpen: boolean;
  setIsDetailsOpen: (value: boolean) => void;
  member?: DocumentItem;
  onBack: () => void;
}

const initialValues = {
  gtin: "",
  uri: "",
  linkType: "",
  language: "",
};

const MemberDetails = ({
  isDetailsOpen,
  setIsDetailsOpen,
  member,
  onBack,
}: MemberDetailsProps) => {
  const handleClose = () => setIsDetailsOpen(false);
  const [{ gtin, uri, linkType, language }, setProduct] =
    useState(initialValues);

  useEffect(() => {
    if (member) {
      setProduct(member);
    }
  }, [member]);

  const submit = async () => {
    if (!member) await createProduct({ gtin, uri, linkType, language });
    else await updateProduct(member._id, { gtin, uri, linkType, language });
    handleClose();
    setProduct(initialValues);
    onBack();
  };
  return (
    <Modal
      open={isDetailsOpen}
      onClose={handleClose}
      BackdropComponent={BackdropContainer}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isDetailsOpen}>
        <ModalContainer>
          <ModalSubContainer>
            <Stack
              direction="row"
              justifyContent="space-between"
              display="flex"
              width="100%"
            >
              <Title>{STRINGS.newProduct}</Title>
              <CloseContainer onClick={handleClose}>
                <img src={Close} alt="CloseBTN" width="100%" height="100%" />
              </CloseContainer>
            </Stack>
            <InfoContainer>
              <ColumnInfoContainer>
                <MemberDetailItem
                  title={STRINGS.product}
                  data={[
                    {
                      label: STRINGS.gtin,
                      value: gtin,
                      setValue: (newValue) => {
                        setProduct((prevState) => ({
                          ...prevState,
                          gtin: newValue,
                        }));
                      },
                    },
                    {
                      label: STRINGS.language,
                      value: language,
                      setValue: (newValue) => {
                        setProduct((prevState) => ({
                          ...prevState,
                          language: newValue,
                        }));
                      },
                    },
                    {
                      label: STRINGS.uri,
                      value: uri,
                      setValue: (newValue) => {
                        setProduct((prevState) => ({
                          ...prevState,
                          uri: newValue,
                        }));
                      },
                    },
                    {
                      label: STRINGS.linkType,
                      value: linkType,
                      setValue: (newValue) => {
                        setProduct((prevState) => ({
                          ...prevState,
                          linkType: newValue,
                        }));
                      },
                    },
                  ]}
                />
              </ColumnInfoContainer>
            </InfoContainer>
            <Button style={{ marginTop: 40 }} onClick={submit}>
              {member ? STRINGS.editProduct : STRINGS.createProduct}
            </Button>
          </ModalSubContainer>
        </ModalContainer>
      </Fade>
    </Modal>
  );
};
export default MemberDetails;
