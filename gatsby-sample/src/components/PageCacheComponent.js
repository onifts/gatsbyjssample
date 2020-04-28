import React, { useState, useEffect } from 'react';
import { HashRouter, Route } from 'react-keeper'
import { navigate } from "gatsby"

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import PageCacheContentComponent from './PageCacheContentComponent'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const images__1 = [
    'https://onifts.s3.ap-northeast-2.amazonaws.com/upload/aaf1badb-534e-40ce-8afe-32543b2a87e3-1587981205502.png',
    'https://media1.giphy.com/media/2wgWdnnajgQIyjvnNy/giphy-downsized-medium.gif?cid=e8452e68eebdc35c1fcb33be1b44e34f354057274632bc6c&rid=giphy-downsized-medium.gif'
];

const images__2 = [
    'https://onifts.s3.ap-northeast-2.amazonaws.com/upload/b8b25c67-5487-4135-bfc5-ebe0cded4d8a-1587983216329.png',
    'https://media1.giphy.com/media/SVSx34Rna6oNzmQYv0/giphy.gif?cid=e8452e685525ea9f612eb87f892fcb94ab86077fc86283e3&rid=giphy.gif'
];

const images__3 = [

    'https://onifts.s3.ap-northeast-2.amazonaws.com/upload/9e38597d-ce48-45f2-a75a-eacbd3189333-1587981211631.jpg',
    'https://onifts.s3.ap-northeast-2.amazonaws.com/upload/02b58364-4878-4df9-bdfe-12a144fa80a5-1587981211589.jpg',
    'https://onifts.s3.ap-northeast-2.amazonaws.com/upload/9b069760-7f62-4733-b137-e9cf8c1e0166-1587981206116.PNG',
    'https://onifts.s3.ap-northeast-2.amazonaws.com/upload/2082531e-4416-4737-9a66-31a13d72eb8c-1587981205920.png',
    'https://onifts.s3.ap-northeast-2.amazonaws.com/upload/729d5fca-4f24-44ce-8f59-e279cebdef1e-1587972263603.PNG',

];

export default function PageCacheComponent() {
  
    const classes = useStyles();
    const theme = useTheme();
    
    const [open, setOpen] = React.useState(false);
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [images, setImages] = useState([]);
    const [openChat, setOpenChat] = useState(false);

    const handleCheck = () => {

        console.log(scrollPosition)

    } // end handleCheck

    const [id, setId] = useState(0);
    const [scrollPosition, setSrollPosition] = useState([]);

    const handleClick = (param) => {

        // START : Scroll Position 유지 

        let position__ = document.getElementById('message').scrollTop;
        let id__ = (id === 0 ? param : id);

        if( scrollPosition.filter(row => row.id == id__).length === 0 ) {

            setSrollPosition( scrollPosition.concat( { id : id__, position : position__ } ) );

        }
        else {

            setSrollPosition( scrollPosition.map( row => row.id == id__ ? { ...row, position : position__ } : { ...row } ) );

        } // end if 

        setId(param);

        // END : Scroll Position 유지 

        if ( param === 1 ) {
            
            setImages( images__3 )
            setOpenChat( true )

            navigate('test13#/m/'+param)

        }
        else {
            
            setImages( images__2 )
            setOpenChat( true )

            navigate('test13#/m/'+param)
        
        } // end if 

    } // end handleClick

    useEffect(() => {
        
        const temp = scrollPosition.filter(row => row.id == id);

        if( temp.length > 0 ) {

            document.getElementById('message').scrollTop = temp[0].position;

        } // end if 

    },[id]); // end useEffect

    return (
        
        <HashRouter>
        <div className={classes.root}>
            
            <CssBaseline />
            
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                    [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Mini variant drawer
                </Typography>
                <button onClick={handleCheck} >[ Check ]</button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
                }}
            >
                <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
                </div>
                <Divider />
                <List>
                    
                    <ListItem button key={-1} onClick={()=>handleClick(1)}>
                        <ListItemIcon><ChevronRightIcon /></ListItemIcon>
                        <ListItemText primary={'=> 1'} />
                    </ListItem>
                    <ListItem button key={-2} onClick={()=>handleClick(2)}>
                        <ListItemIcon><ChevronRightIcon /></ListItemIcon>
                        <ListItemText primary={'=> 2'} />
                    </ListItem>

                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                <Divider />
                <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
            </Drawer>
            
            <main className={classes.content}>
                <div className={classes.toolbar} />

                {/* {idx && <PageCacheContentComponent images={images} />} */}

                <div style={{overflow:'auto',height:500}} id="message" >
                {openChat && <Route cache component={PageCacheContentComponent} path="/m/:id" images={images} />}
                </div>
                
            </main>
        
        </div>
        </HashRouter>

    );
} // end PageCacheComponent
