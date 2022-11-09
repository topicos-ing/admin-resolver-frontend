import React, { useEffect, useState } from "react";
import { STRINGS } from "Utils/constants";

import MemberDetails from "../../Components/MemberDetails/MemberDetails";
import MemberTable, {
  DocumentItem,
} from "../../Components/MemberTable/MemberTable";
import Search from "../../Components/Search/Search";
import {
  Container,
  SubContainer,
  TopSubContainer,
  Title,
  BottomSubContainer,
} from "./styles";
import axios from "axios";

const ProductSearch = () => {
  const onSearch = (data: any) => console.log(data);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get( "/products").then((response) => {
      console.log("Productos recibidos: " + JSON.stringify(response));
      setPost(response.data);
    })
    .catch(error => {
      console.error("An error occurred getting the product data for provider.", error);
    }); 
  }, []);

 if (!post) return null

  return (
    <Container>
      <SubContainer>
        <TopSubContainer>
          <Title>{STRINGS.searchProductTitle}</Title>
          <Search onSearch={onSearch} />
        </TopSubContainer>
        <BottomSubContainer>
        <MemberTable rows={post} />
        </BottomSubContainer>
      </SubContainer>
      <MemberDetails
        isDetailsOpen={isDetailsOpen}
        setIsDetailsOpen={setIsDetailsOpen}
      />
    </Container>
  );
};

export default ProductSearch;
