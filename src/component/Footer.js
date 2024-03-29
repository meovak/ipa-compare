import './Footer.scss';
export default function Footer() {
  const today = new Date();
  return (
    <footer>
      <div className="container center">
        Copyright {today.getFullYear()},{' '}
        <a href="https://www.meovak.com">Meovak Pte Ltd</a>. All rights
        reserved.
      </div>
    </footer>
  );
}
