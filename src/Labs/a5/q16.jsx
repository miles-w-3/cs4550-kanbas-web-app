import { useState } from "react";
import React from "react";

export default function Har() {
  const [dsa, zxc] = useState([123, 234, 345, 456]);
  const qwe = (ert) => {
    zxc([567, ...ert]);
  };
  const wer = (rty) => {
    zxc(rty.filter((x) => x !== 234));
  };
  return (
    <div>
      <h2>{JSON.stringify(dsa)}</h2>
      <button onClick={() => qwe(dsa)}>EWQ</button>
      <button onClick={() => wer(dsa)}>REW</button>
    </div>
  );
}