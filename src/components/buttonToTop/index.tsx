import { Button, Grid, SxProps, useScrollTrigger } from '@mui/material';
import Image from 'next/image';
import icon from '../../assets/icons';
import { styles } from './styles';
interface ButtonToTopProps {
  windowProps?: () => Window;
}

const ButtonToTop: React.FC<ButtonToTopProps> = ({ windowProps }) => {
  const showToTop = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
    target: windowProps ? windowProps() : undefined,
  });

  return (
    <Button
      color="secondary"
      variant="contained"
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
        });
      }}
      sx={
        [
          styles.root,
          {
            bottom: {
              xs: showToTop ? 24 : '-100px',
              md: showToTop ? 40 : '-100px',
            },
          },
        ] as SxProps
      }
    >
      <Grid container justifyContent="center" alignItems="center">
        <Image alt="Top" width={30} height={30} src={icon.chevronUp} />
      </Grid>
    </Button>
  );
};

export default ButtonToTop;
