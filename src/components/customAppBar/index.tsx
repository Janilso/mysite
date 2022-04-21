import React, { MouseEventHandler, MutableRefObject, useState } from 'react';
import {
  AppBar,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import { styles } from './styles';
import Image from 'next/image';
import icon from '../../assets/icons';

interface MenuProps {
  panes: Array<{
    title: string;
    href?: any;
    onClick?: MouseEventHandler<HTMLElement>;
    ref?: MutableRefObject<HTMLElement | undefined>;
  }>;
}
interface ElevationScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    sx: trigger ? [styles.appBar, styles.appBarScroll] : styles.appBar,
  });
}

const CustomAppBar: React.FC<MenuProps> = ({ panes, ...restProps }) => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const executeScroll = (ref?: MutableRefObject<HTMLElement | undefined>) => {
    const { current } = ref || {};
    if (current && current.scrollTo)
      window.scrollTo({
        top: current.offsetTop - 64,
        left: 0,
      });
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const renderPanes = () => {
    return panes?.map(({ title, ref }) => (
      <Button
        key={title}
        sx={styles.button}
        color="inherit"
        onClick={() => executeScroll(ref)}
      >
        {title}
      </Button>
    ));
  };

  const renderMenuItens = () => {
    return panes?.map(({ title, ref }) => (
      <MenuItem
        key={title}
        onClick={() => {
          executeScroll(ref);
          handleClose();
        }}
      >
        {title}
      </MenuItem>
    ));
  };

  return (
    <ElevationScroll {...restProps}>
      <AppBar position="fixed" elevation={0} sx={styles.appBar}>
        <Container sx={styles.container}>
          <Toolbar sx={styles.toolbar}>
            {!isSM ? renderPanes() : null}
            {isSM ? (
              <>
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={styles.button}
                >
                  <Image alt="Menu" width={30} height={30} src={icon.menu} />
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  {renderMenuItens()}
                </Menu>
              </>
            ) : null}
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default CustomAppBar;
