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
import { getLanguagesApi, getLinkTypesApi, searchProducts } from "Api/apiCalls";
import { isArray, uniqBy } from "lodash";
import { ArrayOfElements, Select } from "Components/Select/Select";

const usePreferences = () => {
  const [linkTypes, setLinkTypes] = useState<ArrayOfElements>([]);
  const [gtins, setGtins] = useState<ArrayOfElements>([]);
  const [languages, setLanguages] = useState<ArrayOfElements>([]);

  const getProds = async () => {
    try {
      let { data } = await searchProducts();
      data = isArray(data)
        ? uniqBy(
            data.map((value) => ({ value: value?.gtin, label: value?.gtin })),
            "value"
          )
        : [];
      setGtins(data);
    } catch (e) {
      console.error(
        "An error occurred getting the product data for provider.",
        e
      );
    }
  };
  const getLinkTypes = async () => {
    try {
      let { data } = await getLinkTypesApi();
      data = isArray(data)
        ? uniqBy(
            data.map((value) => ({ value: value?._id, label: value?.name })),
            "value"
          )
        : [];
      setLinkTypes(data);
    } catch (e) {
      console.error(
        "An error occurred getting the product data for provider.",
        e
      );
    }
  };
  const getLanguages = async () => {
    try {
      let { data } = await getLanguagesApi();
      data = isArray(data)
        ? uniqBy(
            data.map((value) => ({ value: value?._id, label: value?.name })),
            "value"
          )
        : [];
      setLanguages(data);
    } catch (e) {
      console.error(
        "An error occurred getting the product data for provider.",
        e
      );
    }
  };

  useEffect(() => {
    getProds();
    getLinkTypes();
    getLanguages();
  }, []);

  return { linkTypes, gtins, languages };
};
const ProductSearch = () => {
  const [hasSearchData, setHasSearchData] = useState(false);

  const { linkTypes, gtins, languages } = usePreferences();
  const getProds = async (params: {
    gtin?: string;
    linkType?: string;
    acceptLanguage?: string;
    uri?: string;
  }) => {
    let { gtin, acceptLanguage, linkType, uri } = params;
    const newParams = {
      gtin: !!gtin ? gtin : undefined,
      acceptLanguage: !!acceptLanguage ? acceptLanguage : undefined,
      linkType: !!linkType ? linkType : undefined,
      uri: !!uri ? uri : undefined,
    };
    try {
      let { data } = await searchProducts(newParams.gtin);

      data = isArray(data)
        ? data.filter((value) => {
            let show = true;
            if (!!newParams.acceptLanguage) {
              show = show && value?.acceptLanguage === newParams.acceptLanguage;
            }
            if (!!newParams.linkType) {
              show = show && value?.linkType === newParams.linkType;
            }
            if (!!newParams.uri) {
              show = show && value?.uri === newParams.uri;
            }
            return show;
          })
        : [];
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

  const [products, setProducts] = useState<any[]>([]);

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
            linkTypes={[{ value: "", label: "Vacio" }, ...linkTypes]}
            gtins={[{ value: "", label: "Vacio" }, ...gtins]}
            languages={[{ value: "", label: "Vacio" }, ...languages]}
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
        linkTypes={linkTypes}
        gtins={gtins}
        languages={languages}
        onBack={() => {
          setProduct(undefined);
          getProds({});
        }}
      />
    </Container>
  );
};

export default ProductSearch;
