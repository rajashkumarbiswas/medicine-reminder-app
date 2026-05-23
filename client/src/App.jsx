import { useState } from "react";

function App() {
  const [medicine, setMedicine] = useState("");
  const [list, setList] = useState([]);

  const addMedicine = () => {
    if (medicine === "") return;

    setList([...list, medicine]);
    setMedicine("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Medicine Reminder App</h1>

      <input
        type="text"
        value={medicine}
        onChange={(e) => setMedicine(e.target.value)}
        placeholder="Enter medicine name"
      />

      <button onClick={addMedicine}>
        Add
      </button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;