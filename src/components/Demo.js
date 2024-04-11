import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [number, setNumber] = useState(0);
  const [isDarkTheme, setIsDarktheme] = useState(false);

  //   Heavy Operation to find nth Prime Number so we can use useMemo
  const primeNumber = useMemo(() => findNthPrime(number), [number]);
  //   const primeNumber = () => {
  //     return findNthPrime(number);
  //   };

  return (
    <div
      className={
        "m-2 p-2 w-96 h-96 border border-black  " +
        (isDarkTheme && "bg-gray-800 text-white")
      }
    >
      <div>
        <button
          className="bg-blue-400 text-white rounded-lg shadow-lg px-2 m-2"
          onClick={() => setIsDarktheme(!isDarkTheme)}
        >
          {isDarkTheme ? "Light" : "Dark"}
        </button>
      </div>

      <div>
        <input
          type="number"
          value={number}
          className="w-40 border border-gray-500 px-2"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </div>
      <div className="m-4">
        <p className="px-5">{primeNumber}</p>
      </div>
    </div>
  );
};

export default Demo;
