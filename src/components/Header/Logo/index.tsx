import { Link } from 'react-router-dom';
import { Logo } from '../styles';
import LogoBrand from '../../../assets/LogoBrand.svg';

export function LogoCoffee() {
  return (
    <Link to="/">
      <Logo src={LogoBrand} />
    </Link>
  );
};