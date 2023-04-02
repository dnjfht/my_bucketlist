import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { add_bucket } from "../redux/modules/bucket";
import { v4 as uuidv4 } from "uuid";

const InputWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InputTitle = styled.input`
  width: 30%;
  height: 60px;
  padding: 20px;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #171717;

  outline: none;

  color: #171717;
  font-size: 16px;

  &::placeholder {
    color: #171717;
    opacity: 0.6;
  }
`;

const InputContent = styled.input`
  width: 50%;
  height: 60px;
  padding: 20px;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #171717;

  outline: none;

  color: #171717;
  font-size: 16px;

  &::placeholder {
    color: #171717;
    opacity: 0.6;
  }
`;

const AddButton = styled.button`
  padding: 0 20px;
  background-color: #292821;

  color: white;

  outline: none;
`;

export default function BucketInput() {
  const TitleRef = useRef(null);
  const ContentRef = useRef(null);
  console.log(TitleRef, ContentRef);

  const bucketList = useSelector((state) => state.bucket);
  console.log(bucketList);

  const dispatch = useDispatch();

  const handleAddBucket = (event) => {
    event.preventDefault();

    const newMyBucket = {
      id: uuidv4(),
      isActive: true,
      title: TitleRef.current.value,
      content: ContentRef.current.value,
      isEdit: false,
    };

    dispatch(add_bucket(newMyBucket));

    TitleRef.current.value = "";
    ContentRef.current.value = "";
  };

  return (
    <InputWrap>
      <InputTitle ref={TitleRef} type="text" placeholder="title..." />
      <InputContent ref={ContentRef} type="text" placeholder="content..." />
      <AddButton onClick={handleAddBucket}>추가하기</AddButton>
    </InputWrap>
  );
}
