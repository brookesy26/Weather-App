import { useEffect, useState } from 'react';

const TimeConverter = ({ time, format }) => {
  const [timeData, setTimeData] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const date = new Date(time * 1000)
    setTimeData({
      days: date.getDay(),
      hours: date.getHours(),
      mins: date.getMinutes()
    })
  }, [time, setTimeData]);


  let formattedTime = '';
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

  switch (format) {
    case 'days':
      formattedTime = `${daysOfWeek[timeData.days]}`;
      break;
    case 'hours':
      formattedTime = `${String(timeData.hours).padStart(2, '0')}`;
      break;
    case 'mins':
      formattedTime = `${String(timeData.days).padStart(2, '0')}`;
      break;
    case 'hours/mins':
      formattedTime = `${String(timeData.hours).padStart(2, '0')}:${String(timeData.mins).padStart(2, '0')}`;
      break;
    default:
      formattedTime = 'Invalid format';
  }

  return <span>{formattedTime}</span>;
};

export default TimeConverter;
