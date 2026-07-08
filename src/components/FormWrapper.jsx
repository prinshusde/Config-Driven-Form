import Checkbox from "./Checkbox";
import TextField from "./TextField";

const FormWrapper = ({ inputs }) => {
  return (
    <div className="flex flex-col gap-4 items-start border w-1/4 p-4">
      {inputs.map((input) => {
        if (input.type === "checkbox") {
          return <Checkbox key={input.id} {...input} />;
        }

        return <TextField key={input.id} {...input} />;
      })}
    </div>
  );
};

export default FormWrapper;
