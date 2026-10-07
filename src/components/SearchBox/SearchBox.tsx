import css from "./SearchBox.module.css";

interface SearchBoxProps {
  onChange: (value: string) => void;
}

function SearchBox({ onChange }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default SearchBox;
