import { Box, Divider, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { styles } from './styles';

type typesTitle = 'main' | 'default';

interface TitleProps {
    children: ReactNode;
    type?: typesTitle;
}

const Title: React.FC<TitleProps> = ({ type, children }) => {
    const isDefault = type === 'default';
    return (
        <Typography
            variant={isDefault ? 'h3' : 'h1'}
            sx={isDefault ? styles.text : styles.textMain}
        >
            {children}
            <Box sx={isDefault ? styles.marker : styles.markerMain} />
        </Typography>
    );
};

export default Title;
