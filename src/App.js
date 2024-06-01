import './App.css';
import Filter from './components/filter/filter';
import Vacancies from './components/vacancies';
import Login from './components/login/login';
import { useDispatch, useSelector } from 'react-redux';
import { setData, addData } from './store/reducer';
import { useEffect, useRef, useState } from 'react';
import { LinearProgress } from '@mui/material';
import NavBar from './components/navbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const loaderStyle = {
  height: '12px',
  background: 'lightgray',
  borderRadius: '4px',
  width: '50px',
  marginBottom: '4px',
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [appError, setAppError] = useState(null);
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  const dispatch = useDispatch();
  let fetchedRecords = useRef(0);

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
      // console.log('data', vacancyData);

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
      setAppError(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData('SET');
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /*
    LOGIC TO BE REVAMPED
   isLoggedIn AppState 
   false      Init           -> Show Login 
   true       Init           -> Show App without any data
   true       Loading        -> Show Loader
   true       Error          -> Show Error
   true       Success        -> show App with data
  */

  if (!isLoggedIn) {
    return (
      <div className='App'>
        <Login />
      </div>
    )
  }

  if (isLoggedIn && appError) {
    return (
      <div className='App'>
        <Error />
      </div>
    )
  }

  if (isLoggedIn) {
    return (
      <div className="App">
        <NavBar />
        <Filter isLoading={isLoading} />
        <Vacancies />
        {
          isLoading &&
          <div className='loader-listing'>
            {
              GenerateLoaders('card', 10)
            }
          </div>
        }
      </div>
    );
  }
}

function CardLoader() {
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
          {GenerateLoaders('linear', 18)}
        </p>
      </div>
      <div className='info-container'>
        <h3><LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '200px' }} /></h3>
        <h2><LinearProgress variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '100px' }} /></h2>
      </div>
    </Paper>
  )
}

function GenerateLoaders(type, count) {
  if (type === 'card') {
    let cardLoaderArray = [];

    for (let i = 0; i < count; i++) {
      cardLoaderArray.push(<CardLoader key={`card-loader-${i}`} />);
    }

    return cardLoaderArray;
  }
  else if (type === 'linear') {
    let linearLoaderArray = [];

    for (let i = 0; i < count; i++) {
      linearLoaderArray.push(<LinearProgress key={`linear-loader-${i}`} variant='indeterminate' color='primary' sx={{ ...loaderStyle, width: '300px' }} />);
    }

    return linearLoaderArray;
  }
}

function Error() {
  return (
    <p style={{ textAlign: 'center', fontSize: '20px', color: 'red' }}>Aw Snap! Error occured while loading application</p>
  )
}

export default App;