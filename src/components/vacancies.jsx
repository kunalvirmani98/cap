import { useSelector, useDispatch } from 'react-redux';

export default function Vacancies() {
    const data = useSelector(state => state.data);

    if (data.length == 0) return <h1 style={{ color: 'red' }}>No Vacanies!</h1>

    return <h1>Vacancies</h1>
}