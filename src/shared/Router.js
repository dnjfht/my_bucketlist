import React from "react";
import { Routes, Route } from "react-router-dom";
import Bucketlist from "../components/Bucketlist";
import Detail from "../components/Detail";
import NotPage from "../components/NotPage";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Bucketlist />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
    </>
  );
}
