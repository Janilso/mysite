import { Box } from '@mui/material';
import icon from '../../assets/icons';
import { styles } from './styles';

interface IconSkillProps {
    type?:
        | 'css'
        | 'dart'
        | 'flutter'
        | 'git'
        | 'github'
        | 'gmail'
        | 'html'
        | 'javascript'
        | 'nextjs'
        | 'reactjs'
        | 'sass'
        | 'typescript';
}

const IconSkill: React.FC<IconSkillProps> = ({ type = 'html' }) => {
    const skillIcon = icon[type];
    return (
        <Box sx={styles.container}>
            <img src={skillIcon} />
        </Box>
    );
};

export default IconSkill;
