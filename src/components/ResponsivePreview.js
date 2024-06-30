import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../styles/ResponsivePreview.css';

const ResponsivePreview = ({ children }) => {
  const [previewMode, setPreviewMode] = useState('desktop');

  return (
    <div className={`responsive-preview ${previewMode}`}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={() => setPreviewMode('desktop')}>Desktop</Button>
        <Button onClick={() => setPreviewMode('tablet')}>Tablet</Button>
        <Button onClick={() => setPreviewMode('mobile')}>Mobile</Button>
      </ButtonGroup>
      <div className="preview-content">{children}</div>
    </div>
  );
};

export default ResponsivePreview;
