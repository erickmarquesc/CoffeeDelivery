import { HeaderAndFooter } from '../../components/HeaderAndFooter';
import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <div>
      <HeaderAndFooter.Root type='header'>
        <HeaderAndFooter.Logo />
        <HeaderAndFooter.LocaleAndCart />
      </HeaderAndFooter.Root>

      <Outlet />

      <HeaderAndFooter.Root type='footer'>
        <HeaderAndFooter.Logo />
        <HeaderAndFooter.MidiaGroup />
        <HeaderAndFooter.LocaleAndCart/>
      </HeaderAndFooter.Root>
    </div>
  );
};
