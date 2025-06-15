import React from 'react';

const KGEmbed: React.FC = () => {
  // Use absolute URL in production, relative in development
  const src = process.env.NODE_ENV === 'production' 
    ? `${process.env.NEXT_PUBLIC_SITE_URL || ''}/kg.html`
    : '/kg.html';

  return (
    <iframe
      src={src}
      style={{
        border: 'none',
        width: '100%',
        height: '100%',
        borderRadius: 'inherit', // Inherit border-radius
      }}
      sandbox="allow-scripts allow-same-origin allow-popups"
      title="Machine Learning Knowledge Graph"
    />
  );
};

export default KGEmbed;