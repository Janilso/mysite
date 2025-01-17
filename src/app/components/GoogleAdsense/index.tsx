import React from 'react';
import { GoogleAdsenseType } from './types';

const GoogleAdsense: React.FC<GoogleAdsenseType> = ({ client }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }
  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  );
};

export default GoogleAdsense;
