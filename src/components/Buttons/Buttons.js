import "./Buttons.css";

function PrimaryButton(props) {
  return (
    <div className="button main-button">
      <a href="/#"> {props.children}</a>
    </div>
  );
}

function SecondaryButton(props) {
  return (
    <div className="button secondary-button">
      <a href="/#"> {props.children}</a>
    </div>
  );
}

export default PrimaryButton;
export { SecondaryButton };
