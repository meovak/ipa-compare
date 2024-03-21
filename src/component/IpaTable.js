import './IpaTable.css';
import * as ipa from '../ipa';
import { prop } from 'ramda';

export default function IpaTable({ languages }) {
  return (
    <div>
      Comparison table
      <table className="ipa-table table--striped">
        <thead>
          <tr>
            <th>IPA</th>
            {languages.map(renderHeader)}
          </tr>
        </thead>
        <tbody>
          {Object.keys(ipa.alphabet).reduce(
            renderRow(languages.map(prop('value'))),
            []
          )}
        </tbody>
      </table>
    </div>
  );
}

function renderHeader({ label }, id) {
  return <th key={id}>{label}</th>;
}

function renderRow(languages) {
  return function (rows, decimal) {
    if (languages.some((lang) => ipa[lang][decimal])) {
      rows.push(
        <tr key={rows.length}>
          <td>{String.fromCharCode(decimal)}</td>
          {languages.map((lang, id) => (
            <td key={id}>{ipa[lang][decimal]?.examples}</td>
          ))}
        </tr>
      );
    }
    return rows;
  };
}
