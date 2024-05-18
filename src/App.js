import './App.css';
import Filter from './components/filter/filter';
import Vacancies from './components/vacancies';
import { useDispatch, useSelector } from 'react-redux';
import { setData, addData } from './store/reducer';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
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
        isLoading && <div>Loading jobs ...</div>
      }
    </div>
  );
}

export default App;