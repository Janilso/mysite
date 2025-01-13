import { Components } from '@mui/material';
import { colors } from '../colors';

export const MuiTooltip: Components['MuiTooltip'] = {
  defaultProps: {
    arrow: true,
    placement: 'top-start',
    slotProps: {
      popper: {
        // sx: {
        //   [`&[data-popper-placement*="top"] .${tooltipClasses.arrow}`]: {
        //     marginBottom: '-0.65em',
        //   },
        // },
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -8],
            },
          },
        ],
      },
    },
  },
  styleOverrides: {
    tooltip: {
      maxWidth: 175,
      background: colors.primaryMedium,
      border: '1px solid',
      borderColor: colors.primary,
      padding: '8px',
    },
    arrow: {
      color: colors.primaryMedium,
      height: '0.78em',
      '&:before': {
        border: '1px solid',
        borderColor: colors.primary,
        transform: 'rotate(48deg)',
      },
    },
  },
};
