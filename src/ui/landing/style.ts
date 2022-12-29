import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing, breakpoints }: Theme) => ({
  root: {
    flexGrow: 1,
  },
  aboutUsSection: {
    paddingBottom: spacing(10),
    background: palette.secondary.dark,
    backgroundColor: 'green'
  },
  sectionHeading: {
    marginBottom: spacing(6),
    marginTop: spacing(2),
  },
  infoCard: {
    height: '100%',
    [breakpoints.down('sm')]: {
      padding: spacing(2),
    },
    background: palette.secondary.light,
  },
  card: {
    height: '100%',
  },
  cardAction: {
    paddingBottom: spacing(3),
  },
  avatar: {
    width: 60,
    height: 60,
  },
  button: {
    marginLeft: spacing(2),
  },
  resourcesSection: {
    paddingTop: spacing(6),
    paddingBottom: spacing(10),
  },
  wrapper: {
    backgroundImage: "url('/assets/home-bg.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '1000px',
    // backgroundColor: 'orange',
    // width: '100%'
  },
  descriptionPrimary: {
    fontSize: 32
  }
}));

export default useStyles;
