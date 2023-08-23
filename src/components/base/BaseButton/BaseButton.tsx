interface BaseButtonProps {
  label: string;
  onClick?: () => void;
}

const BaseButton: FunctionComponent<BaseButtonProps> = ({ label, onClick }) => {
  return (
    <button className="base-button" onClick={onClick}>
      {label}
    </button>
  );
};

BaseButton.defaultProps = {
  label: '',
  onClick: () => null,
};

export default BaseButton;
