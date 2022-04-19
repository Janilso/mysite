import React, { MouseEventHandler, MutableRefObject } from 'react';
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import { styles } from './styles';

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

const Menu: React.FC<MenuProps> = ({ panes, ...restProps }) => {
  const executeScroll = (ref?: MutableRefObject<HTMLElement | undefined>) => {
    const { current } = ref || {};
    if (current && current.scrollTo)
      window.scrollTo({
        top: current.offsetTop - 64,
        left: 0,
      });
  };

  return (
    <ElevationScroll {...restProps}>
      <AppBar position="fixed" elevation={0} sx={styles.appBar}>
        <Container>
          <Toolbar sx={styles.toolbar}>
            {panes?.map(({ title, ref, onClick }) => (
              <Button
                key={title}
                sx={styles.button}
                color="inherit"
                onClick={() => executeScroll(ref)}
              >
                {title}
              </Button>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Menu;
