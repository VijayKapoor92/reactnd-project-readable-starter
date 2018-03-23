import lightBlue from 'material-ui/colors/lightBlue';

export default theme => ({
    root: theme.mixins.gutters({
        flexGrow: 1,
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    container:{
        marginTop:'60px'
    },
    main: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 8
    }),
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    fab: {
        position:'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2
    },
    avatar: {
        backgroundColor:lightBlue[200]
    },
    commentForm: {
        minWidth: 350
    }
});