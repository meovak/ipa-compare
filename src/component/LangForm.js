import Select from 'react-select';
import { languages } from '../ipa';

const options = Object.entries(languages).map(([id, { label }]) => ({
  value: id,
  label,
}));
export default function LangForm({ handleChange }) {
  return (
    <div>
      Select languages that you want to compare
      <div>
        <form>
          <Select options={options} isMulti={true} onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}
