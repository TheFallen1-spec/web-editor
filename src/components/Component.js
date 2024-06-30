import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../styles/Component.css';

const Component = ({ id, type }) => {
  const [content, setContent] = useState('');

  const renderComponent = () => {
    switch (type) {
      case 'text':
        return <Typography variant="body1">{content || 'This is a text block.'}</Typography>;
      case 'image':
        return <img src={content || 'https://via.placeholder.com/150'} alt="Placeholder" />;
      case 'button':
        return <Button variant="contained" color="primary">{content || 'Click Me'}</Button>;
      default:
        return null;
    }
  };

  return (
    <Card className="component-card">
      <CardContent>
        {renderComponent()}
        <TextField
          label="Edit Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
        />
      </CardContent>
    </Card>
  );
};

export default Component;
