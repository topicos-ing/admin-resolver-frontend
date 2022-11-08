import React, { useState } from "react";
import { STRINGS } from "Utils/constants";

import MemberDetails from "../../Components/MemberDetails/MemberDetails";
import MemberTable, {
  MemberItem,
} from "../../Components/MemberTable/MemberTable";
import Search from "../../Components/Search/Search";
import {
  Container,
  SubContainer,
  TopSubContainer,
  Title,
  BottomSubContainer,
} from "./styles";

// TODO GET DATA FROM BACKEND
const rows: MemberItem[] = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    memberNumber: "0101",
    phoneNumber: "888-999-0000",
    email: "johnaseed@gmail.com",
    dob: "01/02/1980",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    memberNumber: "0120101",
    phoneNumber: "888-999-0000",
    email: "johnaseed@gmail.com",
    dob: "01/02/1980",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    memberNumber: "010111101",
    phoneNumber: "888-999-0000",
    email: "johnaseed@gmail.com",
    dob: "01/02/1980",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    memberNumber: "02341010",
    phoneNumber: "888-999-0000",
    email: "johnaseed@gmail.com",
    dob: "01/02/1980",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    memberNumber: "012345678",
    phoneNumber: "888-999-0000",
    email: "johnaseed@gmail.com",
    dob: "01/02/1980",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Tompson",
    memberNumber: "012345678",
    phoneNumber: "888-999-0000",
    email: "johnaseed@gmail.com",
    dob: "01/02/1980",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    memberNumber: "012345678",
    phoneNumber: "888-999-0000",
    email: "johnaseed@gmail.com",
    dob: "01/02/1980",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    memberNumber: "012345678",
    phoneNumber: "888-999-0000",
    email: "johnaseed@gmail.com",
    dob: "01/02/1980",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    memberNumber: "012345678",
    phoneNumber: "888-999-0000",
    email: "johnaseed@gmail.com",
    dob: "01/02/1980",
  },
];

const ProductSearch = () => {
  const onSearch = (data: any) => console.log(data);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  return (
    <Container>
      <SubContainer>
        <TopSubContainer>
          <Title>{STRINGS.searchProductTitle}</Title>
          <Search onSearch={onSearch} />
        </TopSubContainer>
        <BottomSubContainer>
          <MemberTable rows={rows} />
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
