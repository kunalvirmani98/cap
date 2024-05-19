import './App.css';
import Filter from './components/filter/filter';
import Vacancies from './components/vacancies';
import { useDispatch, useSelector } from 'react-redux';
import { setData, addData } from './store/reducer';
import { useEffect, useRef, useState } from 'react';
import { LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Height } from '@mui/icons-material';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  let fetchedRecords = useRef(0);
  let loaderCount = 10;

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
    ) {
      fetchData('UPDATE');
    }
  };

  async function fetchData(command) {
    setIsLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      "limit": 10,
      "offset": fetchedRecords.current
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };

    // dispatch(setData(result.jd))
    try {
      const response = await fetch(process.env.REACT_APP_DATA_URL, requestOptions);
      const vacancyData = await response.json();
      console.log('data', vacancyData);

      if (command == 'SET') {
        fetchedRecords.current = 10;
        dispatch(setData(vacancyData.jdList));
      }

      if (command == 'UPDATE') {
        fetchedRecords.current = fetchedRecords.current + 10;
        dispatch(addData(vacancyData.jdList));
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData('SET');
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Filter />
      <Vacancies />
      {
        isLoading &&
        <div>
          <CardLoader />
          <CardLoader />
          <CardLoader />
        </div>
      }
    </div>
  );
}

function CardLoader() {
  const loaderStyle = {
    height: '12px',
    background: 'lightgray',
    borderRadius: '4px',
    width: '50px',
    marginBottom: '4px',
  };

  return (
    <Paper className='card' square={false} elevation={2}>
      <Box className='chip-container'>
      </Box>
      <Box className='card-content'>
        <div className='info'>
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '100px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '100px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '100px' }} />
        </div>
      </Box>
      <p className='salary-range'><LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '200px' }} /></p>
      <div className='description-container'>
        <p className='description-content'>
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
          <LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />
        </p>
      </div>
      <div className='info-container'>
        <h3><LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '200px' }} /></h3>
        <h2><LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '100px' }} /></h2>
      </div>
    </Paper>
  )
}

export default App;