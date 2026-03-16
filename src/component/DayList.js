import dummy from '../db/data.json';

export default function DayList() {
    console.log(dummy);
    return (
        <div>
            <ul className='list_day'>
                {dummy.days.map()}
                <li></li>
            </ul>
        </div>
    );
}