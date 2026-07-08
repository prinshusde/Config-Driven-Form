import FormWrapper from "./components/FormWrapper";
import { useState } from "react";

const Inputs = [
  {
    type: "text",
    label: "First Name",
    placeholder: "Enter your first name",
    value: "",
    name: "firstName",
    id: "firstName",
    error: "",
    disabled: false,
    readonly: false,
  },
  {
    type: "text",
    label: "Last Name",
    placeholder: "Enter your last name",
    value: "",
    name: "lastName",
    id: "lastName",
    error: "",
    disabled: false,
    readonly: false,
  },
  {
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
    value: "",
    name: "email",
    id: "email",
    error: "",
    disabled: false,
    readonly: false,
  },
  {
    type: "number",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    value: "",
    name: "phoneNumber",
    id: "phoneNumber",
    error: "",
    disabled: false,
    readonly: false,
  },
  {
    type: "checkbox",
    label: "I agree to the terms and conditions",
    value: "",
    name: "termsAndConditions",
    id: "termsAndConditions",
    error: "",
    disabled: false,
    readonly: false,
  },
];

function App() {
  // input will be handled by app
  const [inputs, setInputs] = useState(structuredClone(Inputs));

  const onInputChange = ({ id, index, value, checked, type }) => {
    const oldState = structuredClone(inputs);

    if (type === "checkbox") {
      oldState[index].checked = checked;
    }

    if (type === "text") {
      oldState[index].value = value;
    }
    console.log({ id, value, index, checked });
    setInputs(oldState);
  };

  return (
    <>
      <div className="">
        <div className="text-center text-2xl font-bold">Hello Config Form</div>
        <FormWrapper inputs={inputs} onInputChange={onInputChange} />
      </div>
    </>
  );
}

export default App;
