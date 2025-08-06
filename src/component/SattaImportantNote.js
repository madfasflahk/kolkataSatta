import React from 'react';
import { useGlobalSkills } from '../context/skillContext';
import { Card, CardContent, Typography, Box } from '@mui/material';

const SattaImportantNote = () => {
    const { importantNote } = useGlobalSkills();

    return (
        <Box sx={{ my: 4 }}>
            {importantNote && importantNote.map((e, i) => (
                <Card key={i} sx={{ mb: 2, border: `2px solid`, borderColor: 'error.main' }}>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" component="div" sx={{ color: 'error.main' }} gutterBottom>
                            {e.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'info.main' }}>
                            {e.SattaKingImportantNote}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}

export default SattaImportantNote;
