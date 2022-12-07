import Controls from "./controls.js";
import Timer from "./timer.js";
import Events from "./events.js";
import {
    buttonPlay,
    buttonPause,
    buttonSet, 
    buttonStop,
    minutesDisplay,
    secondsDisplay
} from "./elements.js";
import Sounds from "./sounds.js";
import Theme from "./theme.js";

const theme = Theme();

const controls = Controls ({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
})

const timer = Timer ({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sounds = Sounds();

Events({ controls, timer, sounds });