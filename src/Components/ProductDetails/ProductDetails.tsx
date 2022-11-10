/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";

import { Modal, Fade, Stack } from "@mui/material";

import { Close } from "../../Assets";
import ProductDetailItem from "../ProductDetailItem/ProductDetailItem";
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
import { createProduct, deleteProduct, updateProduct } from "Api/apiCalls";
import { DocumentItem } from "Components/ProductTable/ProductTable";

interface ProductDetailsProps {
  isDetailsOpen: boolean;
  setIsDetailsOpen: (value: boolean) => void;
  product?: DocumentItem;
  onBack: () => void;
}

const initialValues = {
  gtin: "",
  uri: "",
  linkType: "",
  language: "",
};

const ProductDetails = ({
  isDetailsOpen,
  setIsDetailsOpen,
  product,
  onBack,
}: ProductDetailsProps) => {
  const handleClose = () => setIsDetailsOpen(false);
  const [{ gtin, uri, linkType, language }, setProduct] =
    useState(initialValues);

  useEffect(() => {
    if (product) {
      setProduct(product);
    }
  }, [product]);

  const submit = async () => {
    if (!product) await createProduct({ gtin, uri, linkType, language });
    else await updateProduct(product._id, { gtin, uri, linkType, language });
    handleClose();
    setProduct(initialValues);
    onBack();
  };

  const deleteFunc = async () => {
    if (product) {
      await deleteProduct(product._id);
      handleClose();
      setProduct(initialValues);
      onBack();
    }
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
                <ProductDetailItem
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
              {product ? STRINGS.editProduct : STRINGS.createProduct}
            </Button>
            {product && (
              <Button style={{ marginTop: 40 }} onClick={deleteFunc}>
                {STRINGS.deleteProduct}
              </Button>
            )}
          </ModalSubContainer>
        </ModalContainer>
      </Fade>
    </Modal>
  );
};
export default ProductDetails;
