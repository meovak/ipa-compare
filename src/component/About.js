import Page from './Page';

export default function About() {
  return (
    <Page>
      <div className="container flow-content">
        <h1>About</h1>
        <p>
          When learning a new language, it is useful to compare sounds that you
          have known (Ex: your mother tongue) with sounds of the language that
          you want to learn. By using this international phonetics alphabet
          compare tool, you can easily identify new sounds that you need to
          practice and confidently pronounce sounds you have already mastered in
          your native languages.
        </p>
        <p>
          Sounds might be very similar to each other that you can barely tell
          the difference. Thanks to the International Phonetic Alphabet, when
          it's a different character, you can be sure that it's a different
          sound.
        </p>
        <p>
          For any enquiries please contact us at{' '}
          <a href="mailto:support@meovak.com">support@meovak.com</a>.
        </p>
        <p>Happy learning.</p>
      </div>
    </Page>
  );
}
