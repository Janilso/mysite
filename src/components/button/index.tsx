import { Button } from '@mui/material';
import React, { ReactNode } from 'react';
import { isNullOrUndefined } from 'util';
import { styles } from './styles';

interface ButtonTypes {
  children: ReactNode;
  variant?: 'text' | 'contained' | 'outlined' | undefined;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler;
  LinkComponent?: React.ElementType<any> | undefined;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget | undefined;
}

const CustomButton: React.FC<ButtonTypes> = ({
  children,
  variant = 'contained',
  fullWidth = false,
  onClick,
  LinkComponent,
  href = '',
  target,
}) => {
  return (
    <Button
      color="secondary"
      variant={variant}
      size="large"
      fullWidth={fullWidth}
      sx={styles.button}
      onClick={onClick}
      LinkComponent={LinkComponent}
      href={href}
      target={target}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
