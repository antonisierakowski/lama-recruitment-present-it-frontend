import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import { selectCurrentPath } from '../../store/app/selectors';
import { Link } from 'react-router-dom';

export const Header: React.FC = (): React.ReactElement => {
  const currentRoute = useSelector((state: RootState) =>
    selectCurrentPath(state),
  );
  const isOnIndexPage = currentRoute === '/';
  return (
    <AppBar color="secondary" className={styles.header}>
      <Typography variant="subtitle2">
        Present it - Recruitment task for Lama Media
      </Typography>
      {isOnIndexPage ? null : (
        <Link to="/">
          <Typography variant="subtitle2">Start a new presentation</Typography>
        </Link>
      )}
    </AppBar>
  );
};
