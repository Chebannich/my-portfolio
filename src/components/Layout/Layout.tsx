import { ReactNode } from "react";
import '../../styles/global.scss';

type LayoutProps = {
  children: ReactNode;
};

const Lauout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      {children}
    </div>
  );
};

export default Lauout;