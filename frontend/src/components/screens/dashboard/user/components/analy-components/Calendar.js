// import React from 'react';
// import { Card } from 'react-bootstrap';

// const Calendar = () => {
//   return (
//     <Card className="mb-4">
//       <Card.Body>
//         <h6>Calendar</h6>
//         {/* Calendar component */}
//       </Card.Body>
//     </Card>
//   );
// };

// export default Calendar;
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  // Handle date change
  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <h6>Calendar</h6>
        {/* Calendar component */}
        <div style={{ maxWidth: '100%' }}>
          <Calendar
            onChange={onChange}
            value={date}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CalendarComponent;
