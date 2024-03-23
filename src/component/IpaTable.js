import './IpaTable.css';
import * as ipa from '../ipa';
import { prop } from 'ramda';

export default function IpaTable({ languages }) {
  return (
    <div>
      <table className="ipa-table table--striped">
        <thead>
          <tr>
            <th>
              IPA<sup>*</sup>
            </th>
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
      <div className="secondary">
        <p>* click on letters for sound.</p>
      </div>
    </div>
  );
}

function renderHeader({ label }, id) {
  return <th key={id}>{label}</th>;
}

function playSound(url) {
  return () => {
    const audio = new Audio(url);
    audio.play();
  };
}

function renderRow(languages) {
  return function (rows, decimal) {
    if (languages.some((lang) => ipa.languages[lang].ipa[decimal])) {
      rows.push(
        <tr key={rows.length}>
          <td>
            {ipa.alphabet[decimal].sound ? (
              <span
                className="clickable"
                onClick={playSound(ipa.alphabet[decimal].sound)}
              >
                {ipa.fromNumber(decimal)}
              </span>
            ) : (
              ipa.fromNumber(decimal)
            )}
          </td>
          {languages.map((lang, id) => (
            <td key={id}>{ipa.languages[lang].ipa[decimal]?.ex}</td>
          ))}
        </tr>
      );
    }
    return rows;
  };
}
