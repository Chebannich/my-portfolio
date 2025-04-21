import { ReactNode } from "react";
import '../../styles/global.scss';

import ThemeToggle from "../ThemeToggle";

type LayoutProps = {
  children: ReactNode;
};

const Lauout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      {children}
      <ThemeToggle />
    </div>
  );
};

export default Lauout;