import React from 'react'
import './progressbar.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Progressbar = () => {
    const percentage = 66;

    return (
        <div className='progress-bar'>
            <div className="progress-bar__heading">
                <h5>Today visits requests</h5>
                <MoreVertIcon />
            </div>
            <div className="progress-bar__circle">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />;
            </div>
            <div className="progress-bar__content">
                <h4>This week visit requests</h4>
                <h1 className='today'>5</h1>
                <div className="progress-bar__content__status">
                    <div>
                        <b>Target</b>
                        <span>
                            <p>+50</p>
                            <KeyboardArrowUpIcon />
                        </span>
                    </div>
                    <div>
                        <b>Last week</b>
                        <span>
                            <p>-12</p>
                            <KeyboardArrowUpIcon />
                        </span>
                    </div>
                    <div>
                        <b>Last month</b>
                        <span>
                            <p>+42</p>
                            <KeyboardArrowUpIcon />
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Progressbar
