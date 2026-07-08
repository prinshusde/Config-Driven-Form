const Checkbox = ({
  label = "",
  name = "",
  id = "",
  error = "",
  checked,
  value,
  disabled = false,
  readonly = false,
  index,
  onChange,
  type,
}) => {
  //   const [checked, setChecked] = useState(false);
  function handleChange() {
    onChange({ id, value, checked: !checked, index, type });
  }
  return (
    <div>
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        checked={checked}
        disabled={disabled}
        readOnly={readonly}
        error={error}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
