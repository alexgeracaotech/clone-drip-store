import { Logo } from '../Logo/Logo';
import './Header.css';

export const Header = () => {
  return(
    <header id="header">
      <div className='box-header'>
        <div className='box-header-children'>
          <Logo/>
        </div>
      </div>
    </header>
  );
}