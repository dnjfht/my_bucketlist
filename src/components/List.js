import React from "react";
import Bucket from "./Bucket";
import styled from "styled-components";
import { useSelector } from "react-redux";

const BucketWrap = styled.div`
  width: 100%;
  height: 160px;

  overflow: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(23, 23, 23, 0.8);
    border-radius: 6px;
  }
`;

export default function List({ isActive }) {
  const bucketList = useSelector((state) => state.bucket);
  console.log(bucketList);
  // [{…}, {…}, {…}, {…}] 이렇게 들어옴

  return (
    <div style={{ height: "180px", marginBottom: "30px" }}>
      <h2 style={{ margin: 0 }}>{isActive === true ? "ACTIVE💖" : "DONE💘"}</h2>

      <BucketWrap>
        {bucketList
          .filter((bucket) => {
            return bucket.isActive === isActive;
          })
          .map((bucket) => {
            return <Bucket key={bucket.id} bucket={bucket} />;
          })}
      </BucketWrap>
    </div>
  );
}
