import { IconMenu } from '@/app/assets/icons';
import {
  AppBar,
  Box,
  ButtonBase,
  Container,
  Menu,
  MenuItem,
  ToggleButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { styles } from './styles';
import { HeaderProps } from './types';
import useHeader from './useHeader';
import ElevationScroll from '../ElevationScroll';

const Header: React.FC<HeaderProps> = ({
  panes,
  windowProps,
  ...restProps
}) => {
  const {
    executeScroll,
    handleClose,
    height,
    open,
    isSM,
    selectedSection,
    setSelectedSection,
    refAppBar,
    anchorEl,
    setAnchorEl,
  } = useHeader({
    panes,
  });

  const renderPanes = () => {
    return panes?.map(({ title, ref }) => {
      return (
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
      );
    });
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
      <ElevationScroll
        sx={styles.appBar}
        sxScrolling={styles.appBarScroll}
        window={windowProps}
        {...restProps}
      >
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
                    id="positioned-button"
                    aria-controls={open ? 'positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                  >
                    <IconMenu width={30} height={30} />
                  </ButtonBase>
                  <Menu
                    id="positioned-menu"
                    aria-labelledby="positioned-button"
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
