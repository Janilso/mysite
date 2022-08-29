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
  ToggleButton,
  ToggleButtonGroup,
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
  windowProps?: () => Window;
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

const Header: React.FC<HeaderProps> = ({
  panes,
  windowProps,
  ...restProps
}) => {
  const isSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(
    panes[0].title
  );
  const [height, setHeight] = useState(0);

  const refAppBar = useRef<HTMLDivElement>();
  const actualSelect = useRef<string>();

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

  const handleScroll = () => {
    const listPanes = panes;

    listPanes.forEach(({ title, ref }, index) => {
      const isLast = index === listPanes.length - 1;

      const nextIndex = index + 1;
      // const sizeAppBar = refAppBar?.current?.offsetHeight ?? 0;
      const sizeAppBar = 0;

      let elementPosition = ref?.current?.offsetTop || 0 - sizeAppBar;
      let nextElementPosition =
        (listPanes?.[nextIndex]?.ref?.current?.offsetTop ||
          document.body.clientHeight) - sizeAppBar;

      console.log('scrollY', window.scrollY);
      console.log('elementPosition', elementPosition);
      console.log('nextElementPosition', nextElementPosition);
      console.log('sizeAppBar', sizeAppBar);
      console.log('');

      const penultimoSize =
        (listPanes?.[listPanes.length - 2]?.ref?.current?.offsetTop || 2700) +
        100;

      if (isLast && window.scrollY > penultimoSize) {
        setSelectedSection(title);
        // pega o tamanho do penultimo
        // elementPosition =
        //   (listPanes?.[listPanes.length - 2]?.ref?.current?.offsetTop || 2700) +
        //   50;
      } else if (
        window.scrollY >= elementPosition &&
        window.scrollY < nextElementPosition
      ) {
        if (actualSelect.current !== title) {
          setSelectedSection(title);
        }
      }
    });
    console.log('');
    console.log('');
    console.log('');
    // if (window.scrollY > 700) setSelectedSection('Sobre');
  };

  useEffect(() => {
    actualSelect.current = selectedSection ?? panes[0].title;
  }, [selectedSection, panes]);

  useEffect(() => {
    setHeight(refAppBar?.current?.offsetHeight ?? 0);
  }, [refAppBar]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderPanes = () => {
    return panes?.map(({ title, ref }) => (
      <ToggleButton
        key={title}
        value={title}
        selected={selectedSection === title}
        onClick={() => {
          setSelectedSection(title);
          executeScroll(ref);
        }}
      >
        <Typography variant="h4">{title}</Typography>
      </ToggleButton>
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
