import { ReactNode } from 'react';
import ParticlesBackground from './ParticlesBackground';

type LayoutProps = {
  children: ReactNode;
  isEpic: boolean;
};

function Layout({ children, isEpic }: LayoutProps) {
  return (
    <main className={isEpic ? 'app app--epic' : 'app'}>
      <ParticlesBackground isEpic={isEpic} />
      {children}
    </main>
  );
}

export default Layout;
