import Select from 'react-select';

const options = [
  { value: 'en', label: 'English' },
  { value: 'vn', label: 'Vietnamese' },
  { value: 'my', label: 'Malay' },
  { value: 'fr', label: 'French' },
];
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
