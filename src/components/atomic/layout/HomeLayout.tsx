import { ReactNode } from 'react';
import { Header } from '../organisms/Header/Header'

interface ParentComponentProps {
  title: string;
  children: ReactNode;
}

export const PageLayout: React.FC<ParentComponentProps> = ({ title, children }) => {
  return(
    <div className='bg-black'>
      <Header title={title} />
      <div className='py-6 px-4 md:px-22 lg:px-36'>
        {children}
      </div>
    </div>
  )
}