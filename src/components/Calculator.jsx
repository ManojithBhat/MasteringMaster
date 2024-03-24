import React, { useState } from "react";

const Calculator = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [k, setK] = useState("");
  const [p, setP] = useState("");
  const [recurrenceRelation, setRecurrenceRelation] = useState("");
  const [complexity, setComplexity] = useState("");
  const [caseType, setCaseType] = useState("");

  function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }

  const calculate = () => {
    if (a === "" || b === "" || k === "" || p === "") {
      alert("Please fill in all fields.");
      return;
    }

    const logN = getBaseLog(b, a).toFixed(0);

    if (parseInt(a) > Math.pow(parseInt(b), parseInt(k))) {
      // for the first case
      console.log(parseInt(a) !== parseInt(b));
      if (logN === "1") {
        setComplexity(`Θ(n)`);
      } else if (parseInt(a) !== parseInt(b)) {
        setComplexity(`Θ(n<sup>log<sub>${b}</sub>${a}</sup>)`);
      } else if (logN === "0") {
        setComplexity(`Θ(1)`);
      } else {
        setComplexity(`Θ(n<sup>${logN}</sup>)`);
      }
      setCaseType("Case 1");
    } else if (parseInt(a) === Math.pow(parseInt(b), parseInt(k))) {
      if (parseInt(p) > -1) {
        // for second 2a case
        let powerTerm =
          parseInt(p) + 1 === 1 ? "" : ` log<sup>${parseInt(p) + 1}</sup>n`;
        if (logN === "0") {
          setComplexity(`Θ(log<sup>${powerTerm}</sup>n)`);
        }
        if (logN === "1") {
          setComplexity(`Θ(n *${powerTerm})`);
        } else {
          setComplexity(`Θ(n<sup>${logN}</sup>${powerTerm})`);
        }
        setCaseType("Case 2a");
      } else if (parseInt(p) === -1) {
        // case 2b
        let powerTerm =`loglogn`
        if (logN === "0") {
          setComplexity(`Θ(log<sup>${powerTerm}</sup>n)`);
        }
        if (logN === "1") {
          setComplexity(`Θ(n *${powerTerm})`);
        } else {
          setComplexity(`Θ(n<sup>${logN}</sup>${powerTerm})`);
        }
        setCaseType("Case 2b");
      } else {
        // case 2c
        setComplexity(`Θ(n<sup>${logN}</sup>)`);
        setCaseType("Case 2c");
      }
    } else {
      //handling case 3
      if (parseInt(p) >= 0) {
        //case 3a
        //power term part
        let powerTerm = parseInt(p) === 0 ? "" : `  log<sup>${p}</sup>n`;
        if (parseInt(p) === 1) {
          powerTerm = `log n`;
        }
        //analysis of k part
        if (parseInt(k) === 1) {
          setComplexity(`Θ(n${powerTerm})`);
        } else if (parseInt(k) === 0) {
          setComplexity(`Θ(${powerTerm})`);
        } else {
          setComplexity(`Θ(n<sup>${k}</sup>${powerTerm})`);
        }
        setCaseType("Case 3a");
      } else {
        if (parseInt(k) === 1) {
          setComplexity(`Θ(n)`);
        } else if (parseInt(k) === 0) {
          setComplexity(`Θ(1)`);
        } else {
          setComplexity(`Θ(n<sup>${k}</sup>)`);
        }
        setCaseType("Case 3 b");
      }
    }
  };

  return (
    <>
    <img className="mx-auto" src="https://media.geeksforgeeks.org/wp-content/uploads/ma-1.png" alt="" />
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Master Method Calculator</h2>
      <div className="mb-4">
        <label className="block mb-2">Enter value of a:</label>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Enter value of b:</label>
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Enter value of k:</label>
        <input
          type="number"
          value={k}
          onChange={(e) => setK(e.target.value)}
          className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Enter value of p:</label>
        <input
          type="number"
          value={p}
          onChange={(e) => setP(e.target.value)}
          className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={calculate}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Calculate
      </button>

      {complexity && caseType && (
        <div className="mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="font-bold mb-2">Complexity:</div>
            <div
              className="text-blue-500"
              dangerouslySetInnerHTML={{ __html: complexity }}
            />
            <div className="font-bold mt-2">Case Type:</div>
            <div className="text-blue-500">{caseType}</div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Calculator;
