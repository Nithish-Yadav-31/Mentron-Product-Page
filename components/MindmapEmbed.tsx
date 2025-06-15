import React from 'react';

const MindmapEmbed: React.FC = () => {
  return (
    <iframe
      src="/mindmap.html" // Path relative to the public directory
      style={{
        border: 'none',
        width: '100%',
        height: '100%',
        borderRadius: 'inherit', // Inherit border-radius
      }}
      sandbox="allow-scripts allow-same-origin allow-popups"
      title="Machine Learning Mindmap"
    />
  );
};

export default MindmapEmbed;