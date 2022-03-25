import { useEffect, useState } from "react";

export default function App() {
  const [sa, setSa] = useState("");
  const [sb, setSb] = useState("");
  const [a, setA] = useState(["a", "b", "c", "d"]);
  const [b, setB] = useState(["1", "2", "3", "4"]);

  const [data, setData] = useState([]);

  const save = () => {
    setData((prev) => [...prev, [sa, sb]]);
    setA(a.filter((item) => item !== sa));
    setB(b.filter((item) => item !== sb));
    setSa("");
    setSb("");
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <select value={sa} onChange={(e) => setSa(e.target.value)}>
        <option>select</option>
        {a?.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>

      <select value={sb} onChange={(e) => setSb(e.target.value)}>
        <option>select</option>
        {b?.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <button onClick={save}>+</button>
      <table border="1" cellPadding="10" cellSpacing="0">
        {data?.map((item) => (
          <tr>
            {item.map((value) => (
              <td>{value}</td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
}
