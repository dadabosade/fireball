import { makeStyles } from '@mui/styles';

const styles = makeStyles( theme => ({
    mainTitle: {
        textAlign: 'center',
        fontSize: 28,
        [theme.breakpoints.up('md')]: {
            fontSize: 34
        }
    },
    teamMember: {
        width: '100%',
        height: '100%',
        color: theme.palette.common.white,
        borderWidth: 0,
        background: 'transparent',
        borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        boxShadow: 'none',
    },
    aavegotchiName: {
        fontSize: 18,
        textAlign: 'center',
        padding: '25px 0 0',
        [theme.breakpoints.up('md')]: {
            fontSize: 25,
            padding: '25px 0 10px',
        }
    },
    aavegotchiYouName: {
        color: theme.palette.primary.main,
        fontWeight: 500
    },
    aavegotchiAvatar: {
        width: 150,
        height: 150,
        '& > img': {
            width: 100,
            height: 100
        }
    }
}));

export default styles
