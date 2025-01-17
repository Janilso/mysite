import { loadMore } from '@/app/utils/functions';
import { PROJECTS } from '@/app/utils/variables';
import { useMediaQuery } from '@mui/material';
import { useMemo, useRef, useState } from 'react';

const QTD_RANGE = 3;

const useSectionProject = () => {
  const isMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const projects = useMemo(() => PROJECTS, []);

  const [range, setRange] = useState(QTD_RANGE);
  const refItemProject = useRef<HTMLDivElement>(null);
  const refContainerProjects = useRef<HTMLDivElement>(null);

  const newRange = loadMore(projects, range, QTD_RANGE);

  const handleClickMore = () => {
    setRange((prevRange) =>
      prevRange < projects?.length ? newRange : QTD_RANGE
    );
  };

  return {
    projects,
    range,
    newRange,
    setRange,
    refItemProject,
    handleClickMore,
    refContainerProjects,
    isMd,
  };
};

export default useSectionProject;
