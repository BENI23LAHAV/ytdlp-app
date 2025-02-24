import { useState } from "react";

function Select() {
  const [format, setFormat] = useState<Format>("");

  return (
    <div className="select">
      <h1>Select</h1>
    </div>
  );
}

export default Select;
