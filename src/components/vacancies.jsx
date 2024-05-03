import { useSelector, useDispatch } from 'react-redux';

export default function Vacancies() {
    const data = useSelector(state => state.data);

    // Fetching filter data from Redux state
    const remote = useSelector(state => state.remote);
    console.log ('Remote', remote);
    if (data?.length == 0) return <h1>Loading... Please wait!</h1>

    return (
        <div>
            JOB DESCRIPTIONS
            {data && data.filter((jd) => {
                if (remote.length == 0) return true;

                return remote.includes(jd.location)
            }).map((jd, index) => {
                return (
                    <div className='card' key={`jd-${index}`}>
                        <h1>{jd.jdUid}</h1>
                    </div>
                )
            })}
        </div>
    )
}