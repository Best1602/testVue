// PaperComponent.jsx
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const PaperComponent = ({ title, children, sx }) => {
    return (
        <Paper elevation={12} style={{ padding: '20px', marginBottom: '20px', ...sx }}>
            <Typography variant="h6" gutterBottom>
                {title}

            </Typography>
            {children}
        </Paper>
    );
};

export default PaperComponent;
