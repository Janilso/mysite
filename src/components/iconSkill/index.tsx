import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import icon from '../../assets/icons';
import { skillsText } from '../../utils/constants';
import { styles } from './styles';

interface IconSkillProps {
  type?:
    | 'css'
    | 'dart'
    | 'flutter'
    | 'git'
    | 'html'
    | 'javascript'
    | 'nextjs'
    | 'reactjs'
    | 'sass'
    | 'typescript'
    | 'jest';
}

const IconSkill: React.FC<IconSkillProps> = ({ type = 'html' }) => {
  const skillIcon = icon[type];
  return (
    <Box sx={styles.container}>
      <Image alt={`Janilso ${type}`} width={88} height={88} src={skillIcon} />
      <Typography>{skillsText[type]}</Typography>
      <Box />
    </Box>
  );
};

export default IconSkill;
