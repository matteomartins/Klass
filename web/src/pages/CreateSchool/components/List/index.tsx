import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';

import './styles.css';

interface ListProps {
    schedule?: string;
    duration?: number;
    intervals?: Array<any>;
}

const List:React.FC<ListProps> = ({schedule = '', duration = '', intervals = []}) => {
    const alert = useAlert();
    const [schedules, setSchedules] = useState(new Array<string>());

    function convertHourToMinutes(time:string) {
        const [hour, minutes] = time.split(':').map(Number);
        const timeInMinutes:number = (hour * 60) + minutes;
        return timeInMinutes;
    }

    function convertMinutesToHour(time:number){
        let hours = `${Math.floor(time / 60)}`;
        if(+hours >= 24) hours = `${+hours-24}`;
        if (hours.toString().length === 0) hours = `00`;
        else if (hours.toString().length === 1) hours = `0${hours}`;
        let minutes = (time % 60).toString();
        if(+minutes == 0) minutes = "00";
        return hours + ":" + minutes;
    }

    useEffect(() => {
        if(schedule === '') return;
        if(duration === 0) return;
        const startTime = schedule.split(' às ')[0];
        const endTime = schedule.split(' às ')[1];
        const startTimeMinutes = convertHourToMinutes(startTime);
        let endTimeMinutes = convertHourToMinutes(endTime);
        if(endTimeMinutes < startTimeMinutes) endTimeMinutes += 1440;
        const totalMinutes = endTimeMinutes-startTimeMinutes;
        let intervalCount = 1;
        let classCount = 1;
        let timeSum = 0;
        const newSchedules = [];
        for (let i = 0; i < totalMinutes/+duration; i++) {
            const start = convertMinutesToHour(startTimeMinutes+(+timeSum));
            const end = convertMinutesToHour(startTimeMinutes+timeSum+(+duration));
            const interval = intervals.find((interval:any) => interval.title.split(' às ')[0] === start);
            if(interval) {
                newSchedules.push(`Intervalo ${intervalCount}: ${interval.title.split(' às ')[0]} - ${interval.title.split(' às ')[1]}`);
                intervalCount++;
                timeSum += convertHourToMinutes(interval.title.split(' às ')[1]) - convertHourToMinutes(interval.title.split(' às ')[0]);
            }
            else {
                newSchedules.push(`Aula ${classCount}: ${start} - ${end}`);
                classCount++;
                timeSum += +duration;
            }
        }
        if(timeSum !== (endTimeMinutes-startTimeMinutes)) {
            alert.error('Os horário de final não bate')
        }
        setSchedules(newSchedules);
    }, [schedule, duration, intervals.length]);

    return (
        <ul className="creation-list-container">
            {schedules.map((name, ind) => (
                <li key={ind}>{name}</li>
            ))}
        </ul>
    )
}

export default List
