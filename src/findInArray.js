import React from "react";
export default function FindArray() {
  let a = [
    {
      id: 1,
      name: "New York"
    },
    {
      id: 2,
      name: "London"
    }
  ];

  function b(idToSearch) {
    return a.filter((item) => {
      return item.id === idToSearch;
    });
  }

  console.log(b(2));
  return (
    <>
      <h1>Array fin in console Area</h1>
    </>
  );
}
