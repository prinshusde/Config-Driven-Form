const TextField = ({
  label = "",
  placeholder = "",
  value = "",
  name = "",
  id = "",
  error = "",
  disabled = false,
  readonly = false,
  index,
  onChange,
  type,
}) => {
  // function handleChange(event) {
  //   onChange({ id, value: event.target.value, index, type });
  // }

  function handleChange(event) {
  onChange({ index, value: event.target.value });
}

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        error={error}
        disabled={disabled}
        readOnly={readonly}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField;
