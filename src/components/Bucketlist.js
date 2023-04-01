import React from "react";
import styled from "styled-components";
import List from "./List";

const Wrap = styled.div`
  width: 100%;
  height: 420px;
`;

export default function Bucketlist() {
  return (
    <Wrap>
      <List isActive={true} />
      <List isActive={false} />
    </Wrap>
  );
}
