import Header from '../Header/Header';
import '../../styles/global.scss';

const Lauout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Lauout;