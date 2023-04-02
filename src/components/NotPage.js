import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 420px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  margin: 0;

  font-size: 70px;
`;

const GoHomeButton = styled.button`
  padding: 20px;
  background-color: rgb(41, 40, 33);

  color: white;

  outline: none;
`;

export default function NotPage() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <Title>404 ERROR</Title>

      <GoHomeButton
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </GoHomeButton>
    </Wrap>
  );
}
