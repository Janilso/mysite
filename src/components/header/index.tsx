import {
  cloneElement,
  MouseEvent,
  MouseEventHandler,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  AppBar,
  Box,
  ButtonBase,
  Container,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';
import { styles } from './styles';
import Image from 'next/image';
import icon from '../../assets/icons';

interface HeaderProps {
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

  return cloneElement(children, {
    sx: trigger ? [styles.appBar, styles.appBarScroll] : styles.appBar,
  });
}

const Header: React.FC<HeaderProps> = ({ panes, ...restProps }) => {
  const isSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const refAppBar = useRef<HTMLDivElement>();
  const [height, setHeight] = useState(0);

  const open = Boolean(anchorEl);

  const executeScroll = (ref?: MutableRefObject<HTMLElement | undefined>) => {
    const { current } = ref || {};
    if (current)
      window.scrollTo({
        top: current.offsetTop - (isSM ? 56 : 64),
        left: 0,
      });
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  useEffect(() => {
    setHeight(refAppBar?.current?.offsetHeight ?? 0);
  }, [refAppBar]);

  const renderPanes = () => {
    return panes?.map(({ title, ref }) => (
      <ButtonBase key={title} onClick={() => executeScroll(ref)}>
        <Typography variant="h4">{title}</Typography>
      </ButtonBase>
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
    <>
      <ElevationScroll {...restProps}>
        <AppBar
          position="fixed"
          elevation={0}
          ref={(r: HTMLDivElement) => {
            refAppBar.current = r;
          }}
          sx={styles.appBar}
        >
          <Container>
            <Toolbar disableGutters sx={styles.toolbar}>
              {isSM ? (
                <>
                  <ButtonBase
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <Image alt="Menu" width={30} height={30} src={icon.menu} />
                  </ButtonBase>
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
              ) : (
                renderPanes()
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Box sx={{ height }} />
    </>
  );
};

export default Header;
