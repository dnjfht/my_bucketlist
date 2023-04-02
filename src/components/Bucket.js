import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  change_switch,
  delete_bucket,
  edit_bucket,
} from "../redux/modules/bucket";

import { TfiExchangeVertical } from "react-icons/tfi";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

import { useState } from "react";

const Button = styled.button`
  background-color: transparent;
  border: none;

  color: white;
`;

export default function Bucket({ bucket }) {
  const dispatch = useDispatch();

  const bucketList = useSelector((state) => state.bucket);
  console.log(bucketList);

  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleEditBucket = () => {
    setEdit((prev) => !prev);
  };

  const handleEditTitle = (event) => {
    setNewTitle(event.target.value);
  };

  const handleEditContent = (event) => {
    setNewContent(event.target.value);
  };

  const handleClickEditBucket = () => {
    dispatch(
      edit_bucket({ id: bucket.id, newTitle: newTitle, newContent: newContent })
    );

    setEdit((prev) => !prev);
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
        backgroundColor: "#202020",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h3 style={{ color: "white" }}>{bucket.title}</h3>
        <p style={{ color: "white" }}>{bucket.content}</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {edit === true ? null : (
          <>
            <Button
              onClick={() => {
                dispatch(change_switch(bucket.id));
              }}
            >
              <TfiExchangeVertical style={{ color: "white", fontSize: 20 }} />
            </Button>
            <Button
              onClick={() => {
                dispatch(delete_bucket(bucket.id));
              }}
            >
              <RiDeleteBack2Fill style={{ color: "white", fontSize: 20 }} />
            </Button>
          </>
        )}

        {edit === true ? (
          <input
            type="text"
            placeholder="edit title..."
            onChange={handleEditTitle}
            defaultValue={bucket.title}
            style={{
              width: "124px",
              padding: "10px 0",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "2px solid #fff",

              color: "rgba(255,255,255,0.6)",
              fontSize: 15,

              outline: "none",
            }}
          />
        ) : null}

        {edit === true ? (
          <input
            type="text"
            placeholder="edit content..."
            onChange={handleEditContent}
            defaultValue={bucket.content}
            style={{
              width: "200px",
              padding: "10px 0",
              marginLeft: "20px",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "2px solid #fff",

              color: "rgba(255,255,255,0.6)",
              fontSize: 15,

              outline: "none",
            }}
          />
        ) : null}

        {edit === true ? (
          <Button onClick={handleClickEditBucket}>
            <AiFillCheckCircle style={{ color: "white", fontSize: 20 }} />
          </Button>
        ) : (
          <Button onClick={handleEditBucket}>
            <AiTwotoneEdit style={{ color: "white", fontSize: 20 }} />
          </Button>
        )}
      </div>
    </div>
  );
}
