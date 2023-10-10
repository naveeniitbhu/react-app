import React, { ReactElement, useEffect } from 'react';
import useStyles from './style';
import { useDispatch } from 'react-redux';
import { fetchLatestBlogs, removeMessage } from './actions';
import { useStateSelector } from '@core/reducers';
import Snackbar from '@ui/common/snackbar';
import { CardListPlaceholder } from '@ui/common/placeholders';
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardHeader,
  Avatar,
  Paper,
  TextField,
} from '@material-ui/core';
import importer from '@utils/importer';
import { Blog } from 'app-types';
import { Link } from 'react-router-dom';
import { convertToReadableDate } from '@utils/appUtils';
import FirstLetter from '@ui/common/firstletter';

const appNameCaps = process.env.APPNAMECAPS;

export default function Payments(): ReactElement {
  const classes = useStyles();
  const { data, isFetching, message } = useStateSelector((state) => state.blogListState);
  const dispatch = useDispatch();
  importer('./assets/blog-page-cover.jpg');

  return (
    <div className={classes.root}>
      <Grid spacing={3} container justify="center" alignItems="center">
        <Grid item xs={8}>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              className={classes.textFieldBorder}
              required={true}
              // classes={{ root: classes.field }}
              // error={credentials.isEmailError}
              margin="normal"
              variant="outlined"
              id="email"
              label="Email"
              // value={credentials.email}
              type="email"
              autoComplete="email"
              rows={1}
              autoFocus={true}
              // disabled={isLoggingIn}
              // helperText={credentials.emailError}
              // onChange={handleCredentialChange('email')}
              fullWidth
            />
            <TextField
              className={classes.textFieldBorder}
              required={true}
              // error={credentials.isPasswordError}
              margin="normal"
              variant="outlined"
              id="name"
              label="Name"
              // value={credentials.password}
              type="email"
              // autoComplete="current-password"
              rows={1}
              // disabled={isLoggingIn}
              // helperText={credentials.passwordError}
              // onChange={handleCredentialChange('password')}
              fullWidth
            />
            <TextField
              className={classes.textFieldBorder}
              required={true}
              // error={credentials.isPasswordError}
              margin="normal"
              variant="outlined"
              id="phoneNumber"
              label="Phone"
              // value={credentials.password}
              type="numberpad"
              // autoComplete="current-password"
              rows={1}
              // disabled={isLoggingIn}
              // helperText={credentials.passwordError}
              // onChange={handleCredentialChange('password')}
              fullWidth
            />
            <TextField
              className={classes.textFieldBorder}
              required={true}
              // error={credentials.isPasswordError}
              margin="normal"
              variant="outlined"
              id="address"
              label="Address"
              // value={credentials.password}
              type="email"
              // autoComplete="current-password"
              rows={1}
              // disabled={isLoggingIn}
              // helperText={credentials.passwordError}
              // onChange={handleCredentialChange('password')}
              fullWidth
            />
          </form>
        </Grid>
        <Grid item xs={4}>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              className={classes.textFieldBorder}
              required={true}
              // error={credentials.isEmailError}
              margin="normal"
              variant="outlined"
              id="email"
              label="Email"
              // value={credentials.email}
              type="email"
              autoComplete="email"
              rows={1}
              autoFocus={true}
              // disabled={isLoggingIn}
              // helperText={credentials.emailError}
              // onChange={handleCredentialChange('email')}
              fullWidth
            />
            <TextField
              className={classes.textFieldBorder}
              required={true}
              // error={credentials.isPasswordError}
              margin="normal"
              variant="outlined"
              id="name"
              label="Name"
              // value={credentials.password}
              type="email"
              // autoComplete="current-password"
              rows={1}
              // disabled={isLoggingIn}
              // helperText={credentials.passwordError}
              // onChange={handleCredentialChange('password')}
              fullWidth
            />
            <TextField
              className={classes.textFieldBorder}
              required={true}
              // error={credentials.isPasswordError}
              margin="normal"
              variant="outlined"
              id="phoneNumber"
              label="Phone"
              // value={credentials.password}
              type="numberpad"
              // autoComplete="current-password"
              rows={1}
              // disabled={isLoggingIn}
              // helperText={credentials.passwordError}
              // onChange={handleCredentialChange('password')}
              fullWidth
            />
            <TextField
              className={classes.textFieldBorder}
              required={true}
              // error={credentials.isPasswordError}
              margin="normal"
              variant="outlined"
              id="address"
              label="Address"
              // value={credentials.password}
              type="email"
              // autoComplete="current-password"
              rows={1}
              // disabled={isLoggingIn}
              // helperText={credentials.passwordError}
              // onChange={handleCredentialChange('password')}
              fullWidth
            />
          </form>
        </Grid>
      </Grid>
      {/* {message && (
        <Snackbar
          message={message.text}
          variant={message.type}
          onClose={() => dispatch(removeMessage.action())}
        />
      )} */}
    </div>
  );
}
