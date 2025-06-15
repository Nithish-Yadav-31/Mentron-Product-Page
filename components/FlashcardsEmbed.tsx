import React from 'react';

const FlashcardsEmbed: React.FC = () => {
  return (
    <iframe
      src="/flashcards.html" // Path relative to the public directory
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