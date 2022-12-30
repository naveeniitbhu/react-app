import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing, breakpoints }: Theme) => ({
  root: {
    flexGrow: 1,
  },
  ctaCardsWrapper: {
    marginBottom: spacing(2),
    marginTop: spacing(3),
    // backgroundColor: 'green',
  },
  ctaCard: {
    height: '100%',
    [breakpoints.between('xs', 'sm')]:  {},
    background: palette.secondary.light,
    backgroundColor: 'white',
  },
  ctaCardAction: {
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaButton: {
    fontSize: '40px',
    fontFamily: 'Oswald, sans-serif',
    width: '100%',
    height: '100%',
    color: 'white',
    backgroundColor: 'red',
    textAlign: 'center',
    [breakpoints.between('xs', 'sm')]: {
      fontSize: '25px',
    },
  },
  cardAction: {
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutUsSection: {
    background: palette.secondary.dark,
    backgroundColor: 'yellow',
  },
  sectionHeading: {
    marginBottom: spacing(2),
    marginTop: spacing(3),
    color: 'darkred',
    fontWeight: 'bold',
    [breakpoints.between('xs', 'sm')]: {
      fontSize: '20px'
    },
  },
  descriptionPrimary: {
    fontSize: 55,
    fontWeight: 'bold',
    fontFamily: 'Oswald, sans-serif',
    [breakpoints.between('xs', 'sm')]:  {
      fontSize: '35px'
    },
  },
  infoCard: {
    height: '100%',
    [breakpoints.between('xs', 'sm')]:  {
      padding: spacing(2),
    },
    background: palette.secondary.light,
    backgroundColor: 'blue',
  },
  card: {
    height: '100%',
  },

  ctaDescription: {
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  ctaDescription2: {
    backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '0px',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  button: {
    // marginLeft: spacing(2),
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
  MuiCardContent: {
    root: {
      padding: 0,
      '&:last-child': {
        paddingBottom: 0,
      },
    },
  },
}));

export default useStyles;
