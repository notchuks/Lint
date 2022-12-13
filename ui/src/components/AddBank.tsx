import React from "react";
import Button from "plaid-threads/Button";

import { useLink } from "../services";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 500px;
  padding-top: 250px;
`;
interface Props {
  userId: number;
}

const AddBank = (props: Props) => {
    const { generateLinkToken } = useLink();
    const initiateLink = async () => {
        // only generate a link token upon a click from enduser to add a bank;
        // if done earlier, it may expire before enduser actually activates Link to add a bank.
        await generateLinkToken(props.userId, null);
    };
  return (
    <Container>
      <Button
        large
        inline
        className="add-account__button"
        onClick={initiateLink}
      >
        Add a bank
      </Button>
    </Container>
  );
};

export default AddBank;
