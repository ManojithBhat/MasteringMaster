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
          parseInt(p) + 1 !== 1 ? "" : ` log<sup>${parseInt(p) + 1}</sup>n`;
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
        let powerTerm = `loglogn`;
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
      <header id="headerQuiz">
        <h1>Master Calculator</h1>
      </header>
      <div
        className="flex bg-white flex-col lg:flex-row justify-center lg:justify-between items-center  lg:ml-48
lg:mr-48 rounded-md gap-4"
      >
        <div className="max-w-md mx-auto lg:w-1/2 m-auto lg:order-first lg:mr-8">
          <img
            className="m-auto lg:ml-0 w-full lg:w-auto h-auto object-cover"
            src="https://i0.wp.com/krantesh.com/wp-content/uploads/2019/09/WINWORD_2019-09-04_15-56-58.png?fit=1022%2C616&ssl=1"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 mx-auto lg:mx-0 lg:order-last p-6 bg-gray-800  shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Master Method Calculator
          </h2>
          <div className="mb-4 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:mr-2 mb-2 lg:mb-0">
              <label className="block mb-2 text-white">Enter value of a:</label>
              <input
                type="number"
                value={a}
                onChange={(e) => setA(e.target.value)}
                className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-gray-300 text-gray-800"
              />
            </div>
            <div className="lg:w-1/2 lg:ml-2">
              <label className="block mb-2 text-white">Enter value of b:</label>
              <input
                type="number"
                value={b}
                onChange={(e) => setB(e.target.value)}
                className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-gray-300 text-gray-800"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white">Enter value of k:</label>
            <input
              type="number"
              value={k}
              onChange={(e) => setK(e.target.value)}
              className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-gray-300 text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white">Enter value of p:</label>
            <input
              type="number"
              value={p}
              onChange={(e) => setP(e.target.value)}
              className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-gray-300 text-gray-800"
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
      </div>

      <div
        className="flex-col lg:flex-row justify-center lg:justify-between items-center mt-20 lg:ml-48
lg:mr-48  text-white rounded-lg align-middle"
      >
  <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-x-8">
  <div className="mb-4">
    <h3 className="text-xl font-semibold">Example 1: Binary Search</h3>
    <p>a = 1, b = 2, k = 0, p = 0</p>
    <p>bk = 1. So, a = bk and p &gt; -1 [Case 2.(a)]</p>
    <p>T(n) = θ(n<sup>log<sub>2</sub>1</sup> log<sub>0+1</sub>n)</p>
    <p>T(n) = θ(log n)</p>
  </div>
  <div className="mb-4">
    <h3 className="text-xl font-semibold">Example 2: Merge Sort</h3>
    <p>a = 2, b = 2, k = 1, p = 0</p>
    <p>bk = 2. So, a = bk and p &gt; -1 [Case 2.(a)]</p>
    <p>T(n) = θ(n<sup>log<sub>2</sub>2</sup> log<sub>0+1</sub>n)</p>
    <p>T(n) = θ(n log n)</p>
  </div>
  <div className="mb-4">
    <h3 className="text-xl font-semibold">Example 3: T(n) = 3T(n/2) + n<sup>2</sup></h3>
    <p>a = 3, b = 2, k = 2, p = 0</p>
    <p>bk = 4. So, a {"<"} bk and p = 0 [Case 3.(a)]</p>
    <p>T(n) = θ(n<sup>k</sup> log<sup>p</sup>n)</p>
    <p>T(n) = θ(n<sup>2</sup>)</p>
  </div>
  <div className="mb-4">
    <h3 className="text-xl font-semibold">Example 4: T(n) = 3T(n/2) + log<sub>2</sub>n</h3>
    <p>a = 3, b = 2, k = 0, p = 2</p>
    <p>bk = 1. So, a {">"} bk [Case 1]</p>
    <p>T(n) = θ(n<sup>log<sub>2</sub>3</sup>)</p>
  </div>
  <div className="mb-4">
    <h3 className="text-xl font-semibold">Example 5: T(n) = 2T(n/2) + n log<sub>2</sub>n</h3>
    <p>a = 2, b = 2, k = 1, p = 2</p>
    <p>bk = 2. So, a = bk [Case 2.(a)]</p>
    <p>T(n) = θ(n<sup>log<sub>2</sub>2</sup> log<sup>3</sup>n)</p>
    <p>T(n) = θ(n log<sup>3</sup>n)</p>
  </div>
  <div className="mb-4">
    <h3 className="text-xl font-semibold">Example 6: T(n) = 2nT(n/2) + n<sup>2</sup></h3>
    <p>This recurrence can’t be solved using the above method since function is not of the form T(n) = aT(n/b) + θ(n<sup>k</sup> log<sup>p</sup>n)</p>
  </div>
</div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">
            Limitations of Master’s Theorem
          </h2>
          <ul>
            <li>
              Master\'s theorem cannot be used if f(n), the combination/merging
              time is not positive.
            </li>
            <li>
              The value of a should be constant and always greater than 1. a
              denotes the number of sub-problems which should be fixed and
              cannot be a function of n.
            </li>
            <li>There should be at least one subproblem.</li>
            <li>The value of b must be greater than 1 and constant.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Calculator;
