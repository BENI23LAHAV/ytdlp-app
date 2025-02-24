import "../css/home.css";
type InputProps = {
  url: string;
  setUrl: (url: string) => void;
};


function Input({ url, setUrl }: InputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }
  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    if (url.startsWith("http://") || !url.startsWith("https://")) {
      alert("Please enter a valid url");
      setUrl("");
      return;
    }
    e.preventDefault();
    console.log(url);
    setUrl("");
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
      <button type="submit" onClick={handleSubmit}>
        ⬇️⬇️⬇️
      </button>
    </div>
  );
}

export default Input;
