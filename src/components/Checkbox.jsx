import { useState } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <input
      type="checkbox"
      name="test"
      id="test"
      onChange={() => setChecked(!checked)}
    />
  );
};

export default Checkbox;
