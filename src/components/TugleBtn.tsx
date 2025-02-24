
type TugleBtnProps = {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
  };
function TugleBtn({ darkMode, setDarkMode }: TugleBtnProps) {
  return (
    <>
      <label className="switch" >
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider round"></span>
      </label>
    </>
  );
}

export default TugleBtn;
