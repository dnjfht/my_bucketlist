import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrap = styled.div`
  width: 100%;
  height: 420px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const Content = styled.p`
  font-size: 20px;
`;

const PrevButton = styled.button`
  padding: 20px 30px;
  background-color: #292821;

  color: white;

  outline: none;
`;

const ActiveState = styled.h4`
  font-size: 18px;
`;

export default function Detail() {
  const navigate = useNavigate();

  const params = useParams().id;
  console.log(params);

  const bucketList = useSelector((state) => state.bucket);
  console.log(bucketList);

  return (
    <Wrap>
      {bucketList.map((bucket) => {
        if (bucket.id === params) {
          return (
            <ContentWrap key={bucket.id}>
              <Title>Title : {bucket.title}</Title>
              <Content>{bucket.content}</Content>
              <ActiveState>{`상태 : ${
                bucket.isActive === true ? `Active` : `Done`
              }`}</ActiveState>
            </ContentWrap>
          );
        }
      })}

      <PrevButton
        onClick={() => {
          navigate("/");
        }}
      >
        Prev
      </PrevButton>
    </Wrap>
  );
}
