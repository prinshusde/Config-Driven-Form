import Checkbox from "./Checkbox";
import TextField from "./TextField";

const FormWrapper = ({ inputs, onInputChange }) => {
  return (
    <div className="flex flex-col gap-4 items-start border w-1/4 p-4">
      {inputs.map((input, index) => {
        if (input.type === "checkbox") {
          return (
            <Checkbox
              key={input.id}
              index={index}
              onChange={onInputChange}
              {...input}
            />
          );
        }

        return (
          <TextField
            index={index}
            onChange={onInputChange}
            key={input.id}
            {...input}
          />
        );
      })}
    </div>
  );
};

export default FormWrapper;
