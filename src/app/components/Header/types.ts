import { MouseEventHandler, RefObject } from 'react';

type PaneType = {
  title: string;
  onClick?: MouseEventHandler<HTMLElement>;
  ref?: RefObject<HTMLElement | null>;
};

export type HeaderProps = {
  panes: PaneType[];
  windowProps?: () => Window;
};

export type UseHeaderProps = {
  panes: PaneType[];
};
