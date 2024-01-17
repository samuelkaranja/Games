import "./style.css";

const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="pay_form">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={props.amount}
          onChange={(e) => props.onChangeAmount(e.target.value)}
          placeholder="30"
        />

        <button type="submit">Deposit</button>
      </form>
    </div>
  );
};

export default Form;
