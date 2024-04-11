import React, { useState } from 'react';
import './slot.css';

const TimeSlot = () => {
  const timeSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  return (
    <div className="time-slot-container">
      <h2>Select Time Slot</h2>
      <div className="time-slots">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className={`time-slot-button ${selectedSlot === slot ? 'selected' : ''}`}
            onClick={() => handleSlotClick(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
      {selectedSlot && (
        <p className="selected-slot">You have selected: {selectedSlot}</p>
      )}
    </div>
  );
};

export default TimeSlot;