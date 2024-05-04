import './App.css';
import Filter from './components/filter/filter';
import Vacancies from './components/vacancies';
import { useDispatch, useSelector } from 'react-redux';
import { setData, addData } from './store/reducer';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  let fetchedRecords = 0;

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
    ) {
      fetchData('UPDATE');
    }
  };

  async function fetchData(command) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      "limit": 10,
      "offset": fetchedRecords
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };

    // dispatch(setData(result.jd))
    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      const vacancyData = await response.json();
      console.log('data', vacancyData);

      if (command == 'SET') {
        fetchedRecords = 10;
        dispatch(setData(vacancyData.jdList));
      }

      if (command == 'UPDATE') {
        fetchedRecords = fetchedRecords + 10;
        dispatch(addData(vacancyData.jdList));
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }

    // .then((response) => response.text())
    // .then((result) => {
    //   console.log(JSON.parse(result).jdList)
    //   dispatch(setData(JSON.parse(result).jdList));
    // })
    // .catch((error) => console.error(error));

  }

  useEffect(() => { fetchData('SET') }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Filter />
      <Vacancies />
    </div>
  );
}

export default App;
