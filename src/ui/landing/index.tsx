import React, { ReactElement } from 'react';
import importer from '@utils/importer';
import {
  Typography,
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Button,
  CardActionArea,
  CardMedia,
  CardActions,
} from '@material-ui/core';
import useStyles from './style';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default function Landing(): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AboutUs />
      {/* <LearningResources /> */}
    </div>
  );
}

const AboutUs = () => {
  const reactIconLogo = importer('./assets/react-icon.svg');
  const workIcon = importer('./assets/work1.png');
  const classes = useStyles();
  return (
    <Grid className={classes.aboutUsSection} container justify="center" alignItems="center">
      <Grid item xs={12} sm={12} md={12} className={classes.wrapper}>
        <Typography className={classes.sectionHeading} align="center" variant="h4" component="h2">
          Be in Top 1% Coder
        </Typography>
        <Typography
          className={classes.descriptionPrimary}
          align="center"
          variant="h4"
          component="h2"
        >
          Crack Big MNC And Product Based Startups
        </Typography>
        <Typography
          className={classes.descriptionPrimary}
          align="center"
          variant="h4"
          component="h2"
        >
          With This Bundles
        </Typography>
        <Grid container justify="center" alignItems="stretch" className={classes.ctaCardsWrapper}>
          <CtaCard href="https://afteracademy.com" action="Buy This Pack Now At &#8377; 199" />
        </Grid>
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          className={classes.cardWrapper}
        >
          <Grid item xs={12} sm={12} md={5}>
            <Grid container justify="center">
              <Grid item>
                <BundleCard
                  imgUrl={reactIconLogo}
                  href="https://afteracademy.com"
                  title="PROVEN FRONTEND GUIDE TO CRACK MNC INTERVIEWS"
                  action="BUY THIS PACK NOW AT &#8377; 199"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Grid container justify="center">
              <Grid item>
                <GetJobCard
                  imgUrl={workIcon}
                  href="https://afteracademy.com"
                  title="GET YOUR DREAM TECH JOB"
                  action="Apply Now"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const CtaCard = ({ href, action = 'Learn More' }: { href: string; action?: string }) => {
  const classes = useStyles();
  return (
    <Card className={classes.ctaCard} raised={true}>
      <Button
        className={classes.ctaButton}
        variant="contained"
        component="a"
        size="large"
        color="primary"
        href={href}
      >
        {action}
      </Button>
    </Card>
  );
};

const BundleCard = ({
  imgUrl,
  href,
  title,
  action = 'Learn More',
}: {
  imgUrl: string;
  href: string;
  title: string;
  action?: string;
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.bundleCard} raised={true}>
      <CardHeader
        className={classes.getJobBundleHeader}
        avatar={<Avatar className={classes.avatar} src={imgUrl} />}
        title={
          <Typography variant="subtitle1" component="p" className={classes.titleBundle}>
            {title}
          </Typography>
        }
      />
      <CardContent>
        <Grid
          container
          justify="center"
          alignItems="stretch"
          className={classes.bundletopicscolumn}
        >
          <Grid item xs={12} sm={6} md={6}>
            <div className={classes.checkTopicWrapper}>
              <CheckCircleOutlineIcon className={classes.checkCircle} />
              <Typography variant="subtitle1" component="p" className={classes.topic}>
                Javascript Q/A Bundle
              </Typography>
            </div>
            <div className={classes.checkTopicWrapper}>
              <CheckCircleOutlineIcon className={classes.checkCircle} />
              <Typography variant="subtitle1" component="p" className={classes.topic}>
                ReactJS Q/A Bundle
              </Typography>
            </div>
            <div className={classes.checkTopicWrapper}>
              <CheckCircleOutlineIcon className={classes.checkCircle} />
              <Typography variant="subtitle1" component="p" className={classes.topic}>
                Redux Q/A Bundle
              </Typography>
            </div>
            <div className={classes.checkTopicWrapper}>
              <CheckCircleOutlineIcon className={classes.checkCircle} />
              <Typography variant="subtitle1" component="p" className={classes.topic}>
                Coding Questions Q/A Bundle
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className={classes.checkTopicWrapper}>
              <CheckCircleOutlineIcon className={classes.checkCircle} />
              <Typography variant="subtitle1" component="p" className={classes.topic}>
                HTML & CSS Q/A Bundle
              </Typography>
            </div>
            <div className={classes.checkTopicWrapper}>
              <CheckCircleOutlineIcon className={classes.checkCircle} />
              <Typography variant="subtitle1" component="p" className={classes.topic}>
                Webpack Q/A Bundle
              </Typography>
            </div>
            <div className={classes.checkTopicWrapper}>
              <CheckCircleOutlineIcon className={classes.checkCircle} />
              <Typography variant="subtitle1" component="p" className={classes.topic}>
                Job Guide Bonus
              </Typography>
            </div>
            <div className={classes.checkTopicWrapper}>
              <CheckCircleOutlineIcon className={classes.checkCircle} />
              <Typography variant="subtitle1" component="p" className={classes.topic}>
                Resume Guide Bonus
              </Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <Button
          className={classes.ctaButtonBundle}
          variant="contained"
          component="a"
          size="large"
          color="primary"
          href={href}
          target="_blank"
        >
          {action}
        </Button>
      </CardActions>
    </Card>
  );
};

const GetJobCard = ({
  imgUrl,
  href,
  title,
  action = 'Learn More',
}: {
  imgUrl: string;
  href: string;
  title: string;
  action?: string;
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.getJobCard} raised={true}>
      <CardHeader
        className={classes.getJobBundleHeader}
        avatar={<Avatar className={classes.avatarWork} src={imgUrl} />}
        title={
          <Typography variant="subtitle1" component="p" className={classes.titleBundle}>
            {title}
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={4} justify="flex-start" alignItems="center">
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="subtitle1" component="p" className={classes.headGetJob}>
              Software engineers like you join my mentorship program to get their dream Job.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} justify="flex-start" alignItems="center">
          <Grid item xs={6} sm={6} md={6}>
            <div className={classes.checkTopicWrapper}>
              <CheckCircleOutlineIcon className={classes.checkCircle} />
              <Typography variant="subtitle1" component="p" className={classes.topic}>
                1-on-1 personalization
              </Typography>
            </div>
            <div className={classes.checkTopicWrapper}>
              <CheckCircleOutlineIcon className={classes.checkCircle} />
              <Typography variant="subtitle1" component="p" className={classes.topic}>
                3 - 6 months program
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <div className={classes.checkTopicWrapper}>
              <CheckCircleOutlineIcon className={classes.checkCircle} />
              <Typography variant="subtitle1" component="p" className={classes.topic}>
                Learn Anywhere and Anytime
              </Typography>
            </div>
            <div className={classes.checkTopicWrapper}>
              <CheckCircleOutlineIcon className={classes.checkCircle} />
              <Typography variant="subtitle1" component="p" className={classes.topic}>
                No Payment Till Hired
              </Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <Button
          className={classes.ctaButtonBundle}
          variant="contained"
          component="a"
          size="large"
          color="primary"
          href={href}
          target="_blank"
        >
          {action}&nbsp;&nbsp;&#8594;
        </Button>
      </CardActions>
    </Card>
  );
};

const InfoCard = ({
  imgUrl,
  href,
  title,
  subtitle,
  description,
  action = 'Learn More',
}: {
  imgUrl: string;
  href: string;
  title: string;
  subtitle?: string;
  description: string;
  action?: string;
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.infoCard} raised={true}>
      <CardHeader
        avatar={<Avatar style={{ objectFit: 'contain' }} className={classes.avatar} src={imgUrl} />}
        title={title}
        subheader={subtitle}
      />
      <CardContent>
        <Typography variant="subtitle1" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <Button
          className={classes.button}
          variant="contained"
          component="a"
          size="small"
          color="primary"
          href={href}
          target="_blank"
        >
          {action}
        </Button>
      </CardActions>
    </Card>
  );
};

const ReasourceCard = ({
  href,
  imgUrl,
  title,
  description,
  action,
}: {
  href: string;
  imgUrl: string;
  title: string;
  description: string;
  action: string;
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} raised={true} elevation={4}>
      <CardActionArea href={href} target="_blank">
        <CardMedia component="img" alt={title} src={imgUrl} title={title} />
        <CardContent>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component="a" size="small" color="primary" href={href} target="_blank">
          {action}
        </Button>
      </CardActions>
    </Card>
  );
};

const LearningResources = () => {
  const classes = useStyles();
  const blog = importer('./assets/home-bg.jpg');
  const youtube = importer('./assets/afteracademy-youtube.jpg');
  const opensource = importer('./assets/mindorks-opensource.jpg');
  const mBlog = importer('./assets/mindorks-blog.jpg');
  const mMedium = importer('./assets/mindorks-medium-blog.jpg');
  const mYoutube = importer('./assets/mindorks-youtube.jpg');
  return (
    <Grid className={classes.resourcesSection} container justify="center" alignItems="center">
      <Grid item xs={11} sm={11} md={11}>
        <Typography className={classes.sectionHeading} align="center" variant="h4" component="h2">
          Our Free Learning Resources
        </Typography>
        <Grid container spacing={4} justify="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={4}>
            <ReasourceCard
              href="https://afteracademy.com/blogs"
              imgUrl={blog}
              title="AfterAcademy Blogs"
              action="Read"
              description="Blogs and articles for Android, Kotlin, Machine Learning, React Js, Node Js, iOS and IOT with best development and coding practices"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReasourceCard
              href="https://youtube.com/afteracademy"
              imgUrl={youtube}
              title="AfterAcademy Youtube"
              action="Watch"
              description="AfterAcademy host video lessons and tutorials on computer programming and software development."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReasourceCard
              href="https://github.com/MindorksOpenSource"
              imgUrl={opensource}
              title="MindOrks OpenSource"
              action="Explore"
              description="Open source project used by thousands of apps and companies. Being among highest ranked respositories in the world."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReasourceCard
              href="https://blog.mindorks.com"
              imgUrl={mBlog}
              title="MindOrks Publication"
              action="Read"
              description="Blogs and articles for Android, Kotlin, Machine Learning, React Js, Node Js, iOS and IOT with best development and coding practices"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReasourceCard
              href="https://medium.com/mindorks"
              imgUrl={mMedium}
              title="MindOrks Community Blogs"
              action="Read"
              description="Our community publishes stories worth reading on software development and design, Android and Machine learning."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ReasourceCard
              href="https://youtube.com/mindorks"
              imgUrl={mYoutube}
              title="MindOrks YouTube"
              action="Watch"
              description="Video lessons on software development including Java, Android, iOS, Machine learning, Web and Mobile development. domains."
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
