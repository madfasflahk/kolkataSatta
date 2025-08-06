import React from 'react';
import { useGlobalSkills } from '../context/skillContext';
import { Card, CardContent, Typography, Box } from '@mui/material';

const NoticeBoard = () => {
    const { notice } = useGlobalSkills();

    return (
        <Box sx={{ my: 4 }}>
            {notice && notice.map((e, i) => (
                <Card key={i} sx={{ mb: 2, border: `2px solid` , borderColor: 'primary.main'}}>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" component="div" gutterBottom>
                            {e.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                            {e.notice}
                        </Typography>
                        <Typography variant="h6" color="primary.main">
                            {e.designation}
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'red', fontWeight: 'bold' }}>
                            {e.name}
                        </Typography>
                        <Typography variant="h6" color="primary.main">
                            {e.number}
                        </Typography>
                        <Typography variant="h6" color="primary.main">
                            {e.note}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}

export default NoticeBoard;
