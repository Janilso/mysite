'use client';
import { Image } from '@/app/components';
import { ComponetBoxType, IconImageProps } from '@/app/components/Image/types';
import { Box } from '@mui/material';
import chevronUp from './chevronUp.svg';
import css from './css.svg';
import dart from './dart.svg';
import facebook from './facebook.svg';
import flutter from './flutter.svg';
import git from './git.svg';
import github from './github.svg';
import gmail from './gmail.svg';
import html from './html.svg';
import instagram from './instagram.svg';
import javascript from './javascript.svg';
import jest from './jest.svg';
import linkedin from './linkedin.svg';
import menu from './menu.svg';
import nextjs from './nextjs.svg';
import reactjs from './reactjs.svg';
import sass from './sass.svg';
import typescript from './typescript.svg';

const IconCss: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image alt={`ícone css`} src={css} priority {...props} {...rest} />
    )}
    sx={sx}
  />
);

const IconDart: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image alt={`ícone dart`} src={dart} priority {...props} {...rest} />
    )}
    sx={sx}
  />
);

const IconFacebook: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image
        alt={`ícone facebook`}
        src={facebook}
        priority
        {...props}
        {...rest}
      />
    )}
    sx={sx}
  />
);

const IconFlutter: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image
        alt={`ícone flutter`}
        src={flutter}
        priority
        {...props}
        {...rest}
      />
    )}
    sx={sx}
  />
);

const IconGit: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image alt={`ícone git`} src={git} priority {...props} {...rest} />
    )}
    sx={sx}
  />
);

const IconGitHub: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image alt={`ícone github`} src={github} priority {...props} {...rest} />
    )}
    sx={sx}
  />
);

const IconGmail: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image alt={`ícone gmail`} src={gmail} priority {...props} {...rest} />
    )}
    sx={sx}
  />
);

const IconHtml: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image alt={`ícone html`} src={html} priority {...props} {...rest} />
    )}
    sx={sx}
  />
);

const IconInstagram: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image
        alt={`ícone instagram`}
        src={instagram}
        priority
        {...props}
        {...rest}
      />
    )}
    sx={sx}
  />
);

const IconJavascript: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image
        alt={`ícone javascript`}
        src={javascript}
        priority
        {...props}
        {...rest}
      />
    )}
    sx={sx}
  />
);

const IconLinkedIn: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image
        alt={`ícone linkedin`}
        src={linkedin}
        priority
        {...props}
        {...rest}
      />
    )}
    sx={sx}
  />
);

const IconNextJs: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image alt={`ícone nextjs`} src={nextjs} priority {...props} {...rest} />
    )}
    sx={sx}
  />
);

const IconReactJs: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image
        alt={`ícone reactjs`}
        src={reactjs}
        priority
        {...props}
        {...rest}
      />
    )}
    sx={sx}
  />
);

const IconSass: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image alt={`ícone sass`} src={sass} priority {...props} {...rest} />
    )}
    sx={sx}
  />
);

const IconTypescript: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image
        alt={`ícone typescript`}
        src={typescript}
        priority
        {...props}
        {...rest}
      />
    )}
    sx={sx}
  />
);

const IconMenu: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image alt={`ícone menu`} src={menu} priority {...props} {...rest} />
    )}
    sx={sx}
  />
);

const IconJest: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image alt={`ícone jest`} src={jest} priority {...props} {...rest} />
    )}
    sx={sx}
  />
);

const IconChevronUp: IconImageProps = ({ sx, ...rest }) => (
  <Box
    component={(props: ComponetBoxType) => (
      <Image
        alt={`ícone chevronup`}
        src={chevronUp}
        priority
        {...props}
        {...rest}
      />
    )}
    sx={sx}
  />
);

export {
  IconChevronUp,
  IconCss,
  IconDart,
  IconFacebook,
  IconFlutter,
  IconGit,
  IconGitHub,
  IconGmail,
  IconHtml,
  IconInstagram,
  IconJavascript,
  IconJest,
  IconLinkedIn,
  IconMenu,
  IconNextJs,
  IconReactJs,
  IconSass,
  IconTypescript,
};
