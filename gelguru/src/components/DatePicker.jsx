import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../modules/datepick.module.css';

const MyDatePicker = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);

    if (date) {
      const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).format(date);

      props.dateHandler(date);
      props.dateValueHandler(formattedDate);
    }
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        className={styles.datePick}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        value={props.dateValue}
      />
    </div>
  );
};

export default MyDatePicker;
