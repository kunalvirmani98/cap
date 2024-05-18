import { Paper } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import Button from '@mui/material/Button';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

export default function Vacancies() {
    const data = useSelector(state => state.data);

    // Fetching filter data from Redux state
    const remote = useSelector(state => state.remote);
    const minExperience = useSelector(state => state.minExperience);
    const companyName = useSelector(state => state.name);
    const role = useSelector(state => state.role);
    const minBasePay = useSelector(state => state.minBasePay);

    function applyFilter (jd) {
        let flag = true;
        
        console.log ('Filter selected', remote);
        console.log ('Job Location', jd.location);
        // Filters : Remote, Minimum Experience, MinBasePay, CompanyName, Role
        if (remote.length != 0) {
            // if (remote.includes('on-site') && remote.includes('remote')) {
            // }

            if (remote.includes('on-site') && jd.location.toLowerCase() === 'remote') {
                flag = false;
            } 

            if (remote.includes('remote') && jd.location.toLowerCase() != 'remote') {
                flag = false;
            }

            if (!flag) return flag;
        }

        if (minExperience) {
            flag = minExperience <= jd.minExp;
            if (!flag) return flag;
        }

        if (minBasePay || minBasePay == 0 && minBasePay != null) {
            flag = jd.minJdSalary ? jd.minJdSalary >= minBasePay : false;
            if (!flag) return flag;
        }

        if (companyName) {
            flag = jd.companyName.toLowerCase().includes(companyName.toLowerCase());
            if (!flag) return flag;
        }

        if (role.length != 0) {
            flag = jd.jobRole ? role.includes(jd.jobRole) : false;
            if (!flag) return flag;
        }

        return flag;
    }

    if (data?.length == 0) return <CircularProgress sx={{ marginTop: '100px' }}/>

    return (
        <div className='job-listing'>
            {data && data.filter((jd) => applyFilter(jd)).map((jd, index) => {
                return (
                    <JobCard key={`jd-${index}`} jd={jd} />
                )
            })}
        </div>
    )
}

function JobCard ({ key, jd }) {
    const [showMore, setShowMore] = useState(false);;
    return (
                    <Paper className='card' square={false} elevation={2}>
                        <Box className='chip-container'>
                            <Chip icon={<HourglassTopIcon />} label="Posted 10 days ago" variant='outlined' className='chip' size='small' />
                        </Box>
                        <Box className='card-content'>
                            <img width={25} height={40} src={jd.logoUrl}/>
                            <div className='info'>
                                <a className='link' href={jd.jdLink}>{jd.companyName}</a>
                                <p className='position'>{jd.jobRole}</p>
                                <p className='location'>{jd.location}</p>
                            </div>
                        </Box>
                        {(jd.minJdSalary || jd.maxJdSalary) && <p className='salary-range'>Estimated Salary: {jd.minJdSalary ? jd.minJdSalary : 'NA'} - {jd.maxJdSalary ? jd.maxJdSalary : 'NA'} LPA</p>}
                        <div className='description-container'>
                            <p className='description-label'>About Company:</p>
                            <p className='description-content'>{jd.jobDetailsFromCompany}</p>
                            {
                                <div className={(jd.jobDetailsFromCompany?.length > 350 && showMore) ? `d-none` : `show-more-section`}>
                                    <Button onClick={(e) => setShowMore(true)}>Show more</Button>
                                </div>
                            }
                        </div>
                        <div className='info-container'>
                            <h3>Minimum Experience</h3>
                            <h2>{jd.minExp ? jd.minExp + ' years' : 'NA'}</h2>
                        </div>
                        <div className='button-container'>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<FlashOnIcon sx={{ color : 'yellow' }}/>}
                                className='apply-button'
                                elevation={0}
                                >
                                Easy Apply
                                </Button>
                        </div>
                        <div className='button-container'>
                            <Button variant="contained" color="primary" className='referral-button'>
                                <Avatar alt="Avatar" src="/avatar-1.jpeg" sx={{ width: 24, height: 24, marginRight: '4px' }} className='blur'/>
                                <Avatar alt="Avatar" src="/avatar-2.jpeg" sx={{ width: 24, height: 24, marginRight: '10px' }} className='blur'/>
                                Unlock referral asks
                            </Button>
                        </div>
                    </Paper>
    )
}