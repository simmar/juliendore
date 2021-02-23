export const styles = (theme) => ({
  cropContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
    background: '#fff',
    [theme.breakpoints.up('sm')]: {
      height: 300,
    },
  },
  cropButton: {
    flexShrink: 0,
    marginLeft: 16,
  },
  controls: {
    padding: 16,
    display: 'flex',
    alignItems: 'stretch',
    background: '#fff',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
    },
  },
  sliderContainer: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
  },
  sliderLabel: {
    [theme.breakpoints.down('xs')]: {
      minWidth: 65,
    },
  },
  slider: {
    padding: '22px 0px',
    marginLeft: 16,
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 16px',
    },
  },
});
