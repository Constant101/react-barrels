import React from 'react';
import ContentLoader from 'react-content-loader';

function PlaceholdersBlock() {
  return (
    <ContentLoader
      speed={2}
      width={264}
      height={326}
      viewBox="0 0 264 326"
      backgroundColor="#ffffff"
      foregroundColor="#ecebeb">
      <rect x="33" y="123" rx="20" ry="20" width="203" height="270" />
      <rect x="34" y="434" rx="5" ry="5" width="192" height="39" />
      <rect x="132" y="320" rx="0" ry="0" width="1" height="2" />
    </ContentLoader>
  );
}

export default PlaceholdersBlock;
