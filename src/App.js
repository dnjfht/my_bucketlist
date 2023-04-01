import React from "react";
import styled from "styled-components";
import BucketInput from "./components/BucketInput";
import Bucketlist from "./components/Bucketlist";
import image from "./img/bg.png";
import image2 from "./img/bg2.jpg";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position-y: -300px;
  background-size: cover;
`;

const WrapBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.84);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 700px;
  height: 700px;
  padding: 40px;
  box-sizing: border-box;
  background-image: url(${image2});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.6);
`;

const Title = styled.h1`
  width: 100%;
  padding-bottom: 14px;
  border-bottom: 2px solid #171717;

  font-size: 42px;
  color: #171717;
`;

function App() {
  return (
    <Wrap>
      <WrapBg>
        <Container>
          <Title>MY BUCKETLIST</Title>
          <Bucketlist />
          <BucketInput />
        </Container>
      </WrapBg>
    </Wrap>
  );
}

export default App;
