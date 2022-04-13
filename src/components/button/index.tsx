import { Button } from '@mui/material';
import React, { ReactNode } from 'react';
import { styles } from './styles';

interface ButtonTypes {
    children: ReactNode;
    variant?: 'text' | 'contained' | 'outlined' | undefined;
    fullWidth?: boolean;
}

const CustomButton: React.FC<ButtonTypes> = ({
    children,
    variant = 'contained',
    fullWidth = false,
}) => {
    return (
        <Button
            color="secondary"
            variant={variant}
            size="large"
            fullWidth={fullWidth}
            sx={styles.button}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
