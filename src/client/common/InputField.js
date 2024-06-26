import "./styles.css";

const InputField = ({ fieldName, onChange, style, formData }) => {
  return (
    <div
      className={`input_wrapper_${fieldName}`}
      style={{ ...style, marginBottom: "50px" }}
    >
      <label
        className={`label_field_${fieldName}`}
        style={{ marginRight: "50px" }}
      >
        {fieldName}
      </label>
      <input
        className={`input_${fieldName}`}
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={formData}
      />
    </div>
  );
};

export default InputField;
