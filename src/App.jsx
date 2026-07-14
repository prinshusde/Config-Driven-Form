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
    type: "text",
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
  {
    type: "date",
    label: "Select Date",
    value: "",
    name: "date",
    id: "date",
    error: "",
    disabled: false,
    readonly: false,
  },
    {
    type: "textarea",
    label: "About",
    placeholder: "Enter about yourself",
    value: "",
    name: "about",
    id: "about",
    error: "",
    disabled: false,
    readonly: false,
  },
   {
    type: "yes_no",
    label: "DO yu have license",
    placeholder: "Do you have license",
    value: "",
    name: "license",
    id: "license",
    error: "",
    disabled: false,
    readonly: false,
  },
  {
    type: "file",
    label: "Upload docs",
    placeholder: "Upload docs",
    value: "",
    name: "docs",
    id: "docs",
    error: "",
    disabled: false,
    readonly: false,
  },
    {
    type: "single_select",
    label: "Select Country",
    placeholder: "Select country",
    value: "",
    name: "country",
    id: "country",
    error: "",
    disabled: false,
    readonly: false,
  },
   {
    type: "multi_select",
    label: "Select Category",
    placeholder: "Select Category",
    value: "",
    name: "category",
    id: "category",
    error: "",
    disabled: false,
    readonly: false,
  },
];

function App() {
  // input will be handled by app
  const [inputs, setInputs] = useState(structuredClone(Inputs));

  // const onInputChange = ({ id, index, value, checked, type }) => {
  //   const oldState = structuredClone(inputs);

  //   if (type === "checkbox") {
  //     oldState[index].checked = checked;
  //   }

  //   if (type === "text") {
  //     oldState[index].value = value;
  //   }
  //   console.log({ id, value, index, checked });
  //   setInputs(oldState);
  // };

  const onInputChange = ({ index, value }) => {
  setInputs((prev) => {
    const next = [...prev];
    next[index] = { ...next[index], value };
    return next;
  });
};

  function handleCancel(){
     setInputs(structuredClone(Inputs))
  }

  // function handleSubmit(){
  //   const params={}

  //   inputs.forEach((input)=>{
  //       if(input.type=== "checkbox"){
  //           if(input.checked){
  //              params[input.name]=input.checked
  //           }
  //       }else{
  //           params[input.name]=input.value
  //       }
  //   })
  //      console.log("form: ",inputs)
  //      console.log("params: ",params)
  // }

  function handleSubmit() {
  const params = {};
  inputs.forEach((input) => {
    params[input.name] = input.value;
  });
   console.log("form: ",inputs)
  console.log("params: ", params);
}

  return (
    <>
      <div className="">
        <div className="text-center text-2xl font-bold">Hello Config Form</div>
        <FormWrapper
         inputs={inputs}
         onInputChange={onInputChange}
         onCancel={handleCancel} 
         onSubmit={handleSubmit}
           />
      </div>
    </>
  );
}

export default App;
