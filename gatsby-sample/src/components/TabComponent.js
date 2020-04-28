import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';

import EmojiComponent from './EmojiComponent.js';
import GifComponent from './GifComponent.js';

function TabPanel(props) {
    
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
//     return {
//         id: `full-width-tab-${index}`,
//         'aria-controls': `full-width-tabpanel-${index}`,
//     };
// }

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
}));

export default function FullWidthTabs() {
  
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            
            <AppBar position="fixed" color="default" style={{top: 'auto',bottom: 0,padding:0,margin:0}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                <Tab icon={<EmojiEmotionsIcon />} aria-label="Emoji" />
                <Tab icon={<GifIcon style={{ fontSize: 40 }} />} aria-label="GIF" />
                <Tab icon={<TurnedInNotIcon />} aria-label="Sticker"  />
                </Tabs>
            </AppBar>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
            
                <TabPanel value={value} index={0} dir={theme.direction}>
                    
                    <EmojiComponent />

                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    
                    <GifComponent />

                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>

                    Message : <input type="text" name="message" value="123" />

                </TabPanel>

            </SwipeableViews>

        </div>

    );

}
