import React, { useState, useEffect } from "react";
import CheckboxGroup from "react-checkbox-group";

const CheckBox1 = () => {
  const [fruits, setFruits] = useState([]);
  return (
    <>
      <CheckboxGroup name="fruits" value={fruits} onChange={setFruits}>
        {(Checkbox) => (
          <>
            <label>
              <Checkbox value="apple" /> Apple
            </label>
            <label>
              <Checkbox value="orange" /> Orange
            </label>
            <label>
              <Checkbox value="watermelon" /> Watermelon
            </label>
          </>
        )}
      </CheckboxGroup>
      <button
        onClick={() => {
          alert(fruits);
        }}
      >
        click1
      </button>
    </>
  );
};

export default CheckBox1;
