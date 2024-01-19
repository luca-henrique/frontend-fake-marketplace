import { ReactNode } from 'react';
import { Header } from '../organisms/Header/Header'

interface ParentComponentProps {
  children: ReactNode;
}

export const PageLayout: React.FC<ParentComponentProps> = ({ children }) => {
  return(
    <div className='bg-black'>
      <Header />
      <div className='py-6 px-4 md:px-22 lg:px-36'>
        {children}
      </div>
    </div>
  )
}