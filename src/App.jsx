import { useState } from "react";
import Clc from "../src/assets/one.jpg"

function App() {

  let [show, setShow] = useState(false);

  let handleClickOne = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="on" onClick={handleClickOne}>
        <img src={Clc} alt={Clc} />
      </div>
      <div className="onb">
        {show == true && <div className="one"></div>}
      </div>
    </>
  );
}

export default App
