interface BaseInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
}

const BaseInput: FunctionComponent<BaseInputProps> = ({
  label,
  type,
  placeholder,
}) => {
  return (
    <div className="base-input">
      {label && <p className="common-label">{label}</p>}
      <div className="base-input__wraper">
        <input
          className="base-input__input"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

BaseInput.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
};

export default BaseInput;
