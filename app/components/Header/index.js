import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './components/A';
import Img from './components/Img';
import NavBar from './components/NavBar';
import HeaderLink from './components/HeaderLink';
import Banner from './images/chucks_auto_repair_banner-min.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <A href="/">
        <Img src={Banner} alt="Chuck's Auto Repair Service - Logo" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/services">
          <FormattedMessage {...messages.services} />
        </HeaderLink>
        <HeaderLink to="/about">
          <FormattedMessage {...messages.about} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
