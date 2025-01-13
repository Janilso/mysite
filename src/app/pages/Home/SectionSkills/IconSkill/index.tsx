import React from 'react';
import { IconSkillProps } from './types';
import {
  IconCss,
  IconDart,
  IconFlutter,
  IconGit,
  IconHtml,
  IconJavascript,
  IconJest,
  IconNextJs,
  IconReactJs,
  IconSass,
  IconTypescript,
} from '@/app/assets/icons';
import { Box, Typography } from '@mui/material';
import { styles } from './styles';

const IconSkill: React.FC<IconSkillProps> = ({ type = 'html' }) => {
  const size = { width: 84, height: 84 };

  const skillIcon = {
    css: <IconCss {...size} />,
    dart: <IconDart {...size} />,
    flutter: <IconFlutter {...size} />,
    git: <IconGit {...size} />,
    html: <IconHtml {...size} />,
    javascript: <IconJavascript {...size} />,
    nextjs: <IconNextJs {...size} />,
    reactjs: <IconReactJs {...size} />,
    sass: <IconSass {...size} />,
    typescript: <IconTypescript {...size} />,
    jest: <IconJest {...size} />,
  };

  const skillsText = {
    css: 'CSS 3',
    dart: 'Dart',
    flutter: 'Flutter',
    git: 'Git',
    html: 'HTML 5',
    javascript: 'Javascript',
    nextjs: 'NextJS',
    reactjs: 'ReactJS',
    sass: 'Sass',
    typescript: 'Typescript',
    jest: 'Jest',
  };

  return (
    <Box sx={styles.container}>
      {skillIcon[type]}
      <Typography sx={styles.text}>{skillsText[type]}</Typography>
    </Box>
  );
};

export default IconSkill;
