import { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [count, setCount] = useState(0);
  console.log("Rendering...");
  const ref = useRef(0);

//   useEffect(() => {
//     const i = setInterval(() => {
//       console.log("Hello ReactJs", Math.random());
//     }, 1000);
//     return () => clearInterval(i);
//   }, []);

  return (
    <div className="m-2 p-2 w-96 h-96 border border-black">
      <div className="px-4 py-2">
        <button
          className="px-2 mx-4 bg-green-400"
          onClick={() => {
            x = x + 1;
            console.log("x=", x);
          }}
        >
          Count1
        </button>
        <span>Let= {x}</span>
      </div>

      <div className="px-4 py-2">
        <button
          className="px-2 mx-4 bg-green-400"
          onClick={() => setCount(count + 1)}
        >
          Count2
        </button>
        <span>State= {count}</span>
      </div>

      <div className="px-4 py-2">
        <button
          className="px-2 mx-4 bg-green-400"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("Ref ", ref.current);
          }}
        >
          Count3
        </button>
        <span>Ref= {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
