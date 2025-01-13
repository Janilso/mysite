import { useMediaQuery } from '@mui/material';
import { RefObject, useEffect, useRef, useState } from 'react';
import { UseHeaderProps } from './types';

const useHeader = ({ panes }: UseHeaderProps) => {
  const isSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(
    panes[0].title
  );
  const [height, setHeight] = useState(0);

  const refAppBar = useRef<HTMLDivElement>(null);
  const actualSelect = useRef<string>(null);

  const open = Boolean(anchorEl);

  const executeScroll = (ref?: RefObject<HTMLElement | null> | undefined) => {
    const { current } = ref || {};
    if (current)
      window.scrollTo({
        top: current.offsetTop - (isSM ? 56 : 64),
        left: 0,
      });
  };

  const handleClose = () => setAnchorEl(null);

  const handleScroll = () => {
    const listPanes = panes;

    listPanes.forEach(({ title, ref }, index) => {
      const isLast = index === listPanes.length - 1;

      const nextIndex = index + 1;
      const sizeAppBar = refAppBar?.current?.offsetHeight ?? 0;

      const elementPosition = (ref?.current?.offsetTop ?? 0) - sizeAppBar;
      const nextElementPosition =
        (listPanes?.[nextIndex]?.ref?.current?.offsetTop ??
          document.body.clientHeight) - sizeAppBar;

      const penultimoSize =
        (listPanes?.[listPanes.length - 2]?.ref?.current?.offsetTop || 2700) +
        100;

      if (isLast && window.scrollY > penultimoSize) {
        setSelectedSection(title);
      } else if (
        window.scrollY >= elementPosition &&
        window.scrollY < nextElementPosition
      ) {
        if (actualSelect.current !== title) {
          setSelectedSection(title);
        }
      }
    });
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

  return {
    height,
    open,
    executeScroll,
    handleClose,
    isSM,
    selectedSection,
    setSelectedSection,
    refAppBar,
    anchorEl,
    setAnchorEl,
  };
};

export default useHeader;
