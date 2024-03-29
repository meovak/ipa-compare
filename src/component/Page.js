import classNames from 'classnames';
import Menu from './Menu';
import Footer from './Footer';

export default function Page({ className, children }) {
  return (
    <div className={classNames('page', className)}>
      <Menu />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
