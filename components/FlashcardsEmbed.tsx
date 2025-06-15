import React from 'react';

const FlashcardsEmbed: React.FC = () => {
  // Use absolute URL in production, relative in development
  const src = process.env.NODE_ENV === 'production' 
    ? `${process.env.NEXT_PUBLIC_SITE_URL || ''}/flashcards.html`
    : '/flashcards.html';

  return (
    <iframe
      src={src}
      style={{
        border: 'none',
        width: '100%',
        height: '100%',
        borderRadius: 'inherit', // Inherit border-radius from parent card for a seamless look
        // Important for security: limit what the embedded content can do
      }}
      // Allowing scripts, same-origin resources, and popups for MathJax/Vis.js features
      sandbox="allow-scripts allow-same-origin allow-popups"
      title="ML Flashcards"
    />
  );
};

export default FlashcardsEmbed;