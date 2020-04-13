import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import FacebookIcon from '@material-ui/icons/Facebook';

import MapUtils from 'utils/helpers/mapUtils';
import A from 'components/A';
import messages from './messages';

const Wrapper = styled.footer`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  border-top: 1px solid #666;
`;

const FooterTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const hrefLink = MapUtils.getMapLocationLink(
  '3500 Spring Garden Rd, Pittsburgh, PA 15212',
  false,
);

function Footer() {
  return (
    <Wrapper>
      <section>
        <FooterTitle>
          <FormattedMessage {...messages.addressLine1Message} />
        </FooterTitle>
        <A style={{ color: '#000000' }} href={hrefLink} target="_blank">
          <FormattedMessage {...messages.addressLine2Message} />
          <br />
          <FormattedMessage {...messages.addressLine3Message} />
        </A>
        <br />
      </section>
      <section style={{ fontSize: '2em' }}>
        <A
          href="https://www.facebook.com/CARS-Chucks-Auto-Repair-Shop-2134241330148078/"
          target="_blank"
        >
          <FacebookIcon style={{ color: 'blue', fontSize: '1.5em' }} />
          {/* <FormattedMessage {...messages.facebookMessage} /> */}
        </A>
      </section>
    </Wrapper>
  );
}

export default Footer;
