import "../css/home.css";
type InputProps = {
  url: string;
  setUrl: (url: string) => void;
};

function Input({ url, setUrl }: InputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  return (
    <div className="input-container">
      <label htmlFor="url"> URL:</label>
      <input
        type="text"
        id="url"
        name="url"
        placeholder="url"
        className="url-input"
        value={url}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
