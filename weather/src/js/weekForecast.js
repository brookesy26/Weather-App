import { useEffect, useState } from 'react';

const WeekForecast = ({ apiData }) => {
  const [daysTimes, setDaysTimes] = useState({
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  });

  useEffect(() => {
    if (apiData !== null) {
      apiData.list.forEach(timeSlot => {
        const date = new Date(timeSlot.dt * 1000);
        const day = date.getDay();
        const week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        setDaysTimes(prev => ({
          ...prev,
          [week[day]]: [...prev[week[day]], timeSlot]
        }));
      });
    }
  }, [apiData]);

  return (
    <>
      <AverageStat data={daysTimes} />
    </>
  );
}

export default WeekForecast;

const AverageStat = ({ data }) => {
  const [dayAverages, setDayAverages] = useState({
    sunday: null,
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null
  })
  useEffect(() => {
    Object.keys(data).map(day => {
      const weekDay = data[day]
      console.log(weekDay)
      if (weekDay.length !== 0) {
        const tempSum = weekDay.reduce((sum, timeSlot) => sum += timeSlot.main.temp, 0)
        const averageTemp = tempSum / weekDay.length
        console.log(Math.floor(averageTemp))
        setDayAverages(prev => ({ ...prev, [day]: Math.floor(averageTemp) }))
        return null
      } else {
        return ('no Data')
      }
    })
  }, [data])

  return (
    <>
      {Object.keys(dayAverages).map((day, index) => (
        <p key={index}>{dayAverages[day]}</p>
      ))}
    </>
  )
}