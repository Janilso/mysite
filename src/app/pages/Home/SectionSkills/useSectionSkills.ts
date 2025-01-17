import { useMediaQuery } from '@mui/material';

const useSectionSkills = () => {
  const isMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const types = [
    'html',
    'css',
    'javascript',
    'typescript',
    'jest',
    'flutter',
    'reactjs',
    'nextjs',
    'sass',
    'git',
  ];

  return { isMd, types };
};

export default useSectionSkills;
