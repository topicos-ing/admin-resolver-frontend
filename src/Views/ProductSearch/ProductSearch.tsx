import React, { useEffect, useState } from "react";
import { STRINGS } from "Utils/constants";

import ProductDetails from "../../Components/ProductDetails/ProductDetails";
import ProductTable, {
  DocumentItem,
} from "../../Components/ProductTable/ProductTable";
import Search from "../../Components/Search/Search";
import {
  Container,
  SubContainer,
  TopSubContainer,
  Title,
  BottomSubContainer,
} from "./styles";
import { getProducts, searchProducts } from "Api/apiCalls";

const ProductSearch = () => {
  const [hasSearchData, setHasSearchData] = useState(false);
  const getProds = async (params: {
    gtin?: string;
    linkType?: string;
    acceptLanguage?: string;
    uri?: string;
  }) => {
    let { gtin, acceptLanguage, linkType, uri } = params;
    const newParams = {
      gtin: !!gtin ? gtin : undefined,
      acceptLanguage: !! acceptLanguage ? acceptLanguage : undefined,
      linkType: !! linkType ? linkType : undefined,
      uri: !!uri ? uri : undefined,
    };
    try {
      let data;
      if (Object.values(newParams).filter((value) => !!value).length === 0) {
        data = (await getProducts()).data;
      } else {
        data = (await searchProducts(newParams)).data;
      }
      setProducts(data);
    } catch (e) {
      console.error(
        "An error occurred getting the product data for provider.",
        e
      );
    }
  };
  const onSearch = (data: any) => {
    setHasSearchData(true);
    getProds(data);
  };

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [product, setProduct] = useState<DocumentItem>();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProds({});
  }, []);

  return (
    <Container>
      <SubContainer>
        <TopSubContainer>
          <Title>{STRINGS.searchProductTitle}</Title>
          <Search
            onSearch={onSearch}
            onClear={async () => {
              await getProds({});
              setHasSearchData(false);
            }}
            hasSearchData={hasSearchData}
            onCreateNew={() => setIsDetailsOpen(true)}
          />
        </TopSubContainer>
        <BottomSubContainer>
          <ProductTable
            rows={products}
            openModal={(product) => {
              setProduct(product);
              setIsDetailsOpen(true);
            }}
          />
        </BottomSubContainer>
      </SubContainer>
      <ProductDetails
        isDetailsOpen={isDetailsOpen}
        setIsDetailsOpen={setIsDetailsOpen}
        product={product}
        onBack={() => getProds({})}
      />
    </Container>
  );
};

export default ProductSearch;
