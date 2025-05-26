import Logo from '../Logo/Logo';
import './Header.css';

export default function Header(){
  return(
    <header>
      <Logo src={'../../../public/logo.svg'}  cor={'#C92071'}/>
    </header>
  );
}