import { useSelector, useDispatch } from 'react-redux';

export default function Vacancies() {
    const data = useSelector(state => state.data);

    if (data?.length == 0) return <h1 style={{ color: 'red' }}>No Vacanies!</h1>

    return (
        <div>
            JOB DESCRIPTIONS
            {data && data.map((jd, index) => {
                return (
                    <div className='card' key={`jd-${index}`}>
                        <h1>{jd.jdUid}</h1>
                    </div>
                )
            })}
        </div>
    )
}