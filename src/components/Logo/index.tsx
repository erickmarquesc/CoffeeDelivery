import LogoBrand from '../../assets/LogoBrand.svg';
import { Link } from 'react-router-dom';
import { Logo } from './styles';

export function LogoCoffee() {
  return (
    <Link to="/">
      <Logo src={LogoBrand} />
    </Link>
  );
};