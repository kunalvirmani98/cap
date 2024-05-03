import { useSelector, useDispatch } from 'react-redux';

export default function Vacancies() {
    const data = useSelector(state => state.data);

    // Fetching filter data from Redux state
    const remote = useSelector(state => state.remote);
    const minExperience = useSelector(state => state.minExperience);
    const companyName = useSelector(state => state.name);
    const role = useSelector(state => state.role);
    const minBasePay = useSelector(state => state.minBasePay);
    const noOfEmployees = useSelector(state => state.noOfEmployees);

    function applyFilter (jd) {
        let flag = true;
        
        // Filters : Remote, Minimum Experience
        if (remote.length != 0) {
            flag = remote.includes(jd.location);
            if (!flag) return flag;
        }

        if (minExperience) {
            flag = minExperience <= jd.minExp;
            if (!flag) return flag;
        }

        if (minBasePay) {
            flag = jd.minJdSalary ? jd.minJdSalary >= minBasePay : false;
            if (!flag) return flag;
        }

        if (companyName) {
            flag = jd.companyName.toLowerCase().includes(companyName.toLowerCase());
            if (!flag) return flag;
        }

        if (role) {
            flag = role.includes(jd.jobRole);
            if (!flag) return flag;
        }

        return flag;
    }

    if (data?.length == 0) return <h1>Loading... Please wait!</h1>

    return (
        <div>
            JOB DESCRIPTIONS
            {data && data.filter((jd) => applyFilter(jd)).map((jd, index) => {
                return (
                    <div className='card' key={`jd-${index}`}>
                        <h1>{jd.jdUid}</h1>
                    </div>
                )
            })}
        </div>
    )
}