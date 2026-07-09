import Checkbox from "./Checkbox";
import TextField from "./TextField";

const FormWrapper = ({ inputs, onInputChange, onCancel, onSubmit }) => {

  function handleSubmit(e){
    e.preventDefault()
    onSubmit()
  }

  return (
    <form className="flex flex-col gap-4 items-start border w-1/4 p-4" onSubmit={handleSubmit}>
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
      <div className="flex gap-2">
        <button onClick={onCancel} className="border px-3 py-1 rounded-md cursor-pointer">Cancel</button>
        <button type="submit" className="border px-3 py-1 rounded-md cursor-pointer">Submit</button>
      </div>
    </form>
  );
};

export default FormWrapper;
