import axios from 'axios';
import React, { useState } from 'react';
import JobDetail from '../../../FindJob/JobDetail';
import { serverLink } from './../../../../../utilities/links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ManagehiddenJob.css'

const ManagehiddenJob = ({ job, index }) => {
    const [showJobDetail, setShowJobDetail] = useState(false);
    const handleRemoveFromHidden = (id) => {
        axios.post(`${serverLink}/user/removeFromHidden/${id}`, {}, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
    }
    return (
        <div>
            <div className={`grid grid-cols-[3fr,1fr] justify-between border-b border-zinc-400 mx-10 py-2 p-1 ${((index + 1) % 2) !== 0 && 'bg-zinc-200'} `}>
                <div data-tip="Click to expand" className={`tooltipCustom `}>
                    <p onClick={() => setShowJobDetail(!showJobDetail)} className={`hover:underline cursor-pointer   text-left ${showJobDetail && 'text-primary font-bold underline'}`}>{job.jobTitle}</p>
                </div>
                <p className={`tooltip text-xl hover:text-primary `} data-tip="Remove From Hidden" onClick={() => handleRemoveFromHidden(job?._id)}><FontAwesomeIcon icon={faTrash} /></p>
            </div>
            {
                showJobDetail &&
                <JobDetail selectedJob={job} setShowJobDetail={setShowJobDetail} />
            }
        </div >
    );
};

export default ManagehiddenJob;