import './App.css';
import Filter from './components/filter/filter';
import Vacancies from './components/vacancies';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from './store/reducer';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      "limit": 10,
      "offset": 0
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };

    // dispatch(setData(result.jd))
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result).jdList)
        dispatch(setData(JSON.parse(result).jdList));
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  return (
    <div className="App">
      <Filter />
      <Vacancies />
    </div>
  );
}

export default App;
