import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';
import { ShopCart } from '../ShopCart/ShopCart';
import './Header.css';

export const Header = () => {

  const cart = [
    {nome: "notebook", price: 2500},
    {nome: "smartphone", price: 1500},
    {nome: "smart tv" , price: 2000},
    {nome: "smart watch" , price: 2800}
  ]

  return(
    <header id="header">
      <div className='box-header'>
        <div className='box-header-children'>
          <Logo margin={'.5rem 0 0 .25rem'}/>
        </div>
        <Button
          width={'7.125rem'}
          height={'2.5rem'}
          margin={'2.75rem 0 0 1.875rem'}
        >Entrar</Button>
        <ShopCart value={cart.length}/>
      </div>
    </header>
  );
}