import React from "react";

export default function Bucket({ bucket }) {
  return (
    <div style={{ backgroundColor: "cadetblue" }}>
      <h3>{bucket.title}</h3>
      <p>{bucket.content}</p>
    </div>
  );
}
