import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing, breakpoints }: Theme) => ({
  root: {
    flexGrow: 1,
  },
  ctaCardsWrapper: {
    marginBottom: spacing(2),
    marginTop: spacing(3),
    [breakpoints.down('sm')]: {
      marginBottom: spacing(1),
    },
  },
  ctaCard: {
    height: '100%',
    [breakpoints.between('xs', 'sm')]: {},
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
  ctaButtonBundle: {
    fontSize: '20px',
    fontFamily: 'Oswald, sans-serif',
    color: 'white',
    backgroundColor: '#D72988',
    textAlign: 'center',
    [breakpoints.between('xs', 'sm')]: {
      fontSize: '13px',
    },
  },
  titleBundle: {
    fontSize: '22px',
    color: 'orange',
    // color: '#D72988',
    fontWeight: 'bold',
    fontFamily: 'Oswald, sans-serif',
    [breakpoints.down('sm')]: {
      fontSize: '15px',
    },
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutUsSection: {
    background: palette.secondary.dark,
    backgroundColor: 'yellow',
  },
  cardWrapper: {
    paddingLeft: '30px',
    paddingRight: '30px',
    marginTop: spacing(4),
    [breakpoints.down('sm')]: {
      paddingLeft: spacing(1),
      paddingRight: spacing(1),
      marginTop: spacing(0),
    },
  },
  singleCardGridWrapper: {
    marginBottom: '30px',
  },
  sectionHeading: {
    marginBottom: spacing(2),
    marginTop: spacing(3),
    color: 'darkred',
    fontWeight: 'bold',
    [breakpoints.between('xs', 'sm')]: {
      fontSize: '20px',
    },
  },
  descriptionPrimary: {
    fontSize: 55,
    fontWeight: 'bold',
    fontFamily: 'Oswald, sans-serif',
    [breakpoints.between('xs', 'sm')]: {
      fontSize: '35px',
    },
  },
  gridItem: {
    width: '100%',
  },
  bundleCard: {
    width: '600px',
    height: '350px',
    [breakpoints.between('xs', 'sm')]: {
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      width: '100%',
      height: '100%',
    },
    background: 'rgba(18, 18, 18, 0.7)',
  },
  bundleCard2: {
    width: '550px',
    height: '100%',
    [breakpoints.between('xs', 'sm')]: {
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
    },
    background: 'rgba(18, 18, 18, 0.7)',
  },
  getJobCard: {
    height: '100%',
    [breakpoints.between('xs', 'sm')]: {
      padding: spacing(2),
    },
    background: 'rgba(18, 18, 18, 0.7)',
  },
  infoCard: {
    height: '100%',
    [breakpoints.between('xs', 'sm')]: {
      padding: spacing(2),
    },
    background: palette.secondary.light,
  },
  card: {
    height: '100%',
  },
  checkTopicWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '10px',
    paddingLeft: '5px',
  },
  checkCircle: {
    color: '#45EA18',
  },
  topic: {
    paddingLeft: '10px',
  },
  headGetJob: {
    paddingBottom: '20px',
    paddingLeft: '10px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  ctaDescription: {
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  ctaDescription2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '0px',
  },
  avatar: {
    '& .MuiAvatar-img': {
      objectFit: 'contain',
    },
  },
  avatarWork: {
    '& .MuiAvatar-img': {
      objectFit: 'contain',
    },
  },
  button: {},
  resourcesSection: {
    paddingTop: spacing(6),
    paddingBottom: spacing(10),
  },
  wrapper: {
    backgroundImage: "url('/assets/home-bg.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '1000px',
  },
  MuiCardContent: {
    root: {
      padding: 0,
      '&:last-child': {
        paddingBottom: 0,
      },
    },
  },
  getJobBundleHeader: {
    [breakpoints.down('sm')]: {
      paddingBottom: '0px',
    },
  },
  bundletopicscolumn: {
    [breakpoints.down('sm')]: {
      paddingBottom: '0px',
      paddingTop: '0px',
    },
  },
}));

export default useStyles;
