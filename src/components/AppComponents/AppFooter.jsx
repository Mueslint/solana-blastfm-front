import React from 'react';

import twitterLogo from '../../assets/twitter-logo.svg';

const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const AppFooter = () => (
    <div className="footer-container">
      <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
      <a
        className="footer-text"
        href={TWITTER_LINK}
        target="_blank"
        rel="noreferrer"
      >{`built on @${TWITTER_HANDLE}`}</a>
    </div>
);

export default AppFooter;