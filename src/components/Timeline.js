import React, { useState } from 'react';
import styles from '../styles/timeline.module.css';
import { events } from '../data/events';

console.log('Timeline styles:', styles); // Debug styles

const Timeline = () => {
  console.log('Timeline component rendering');
  console.log('Available styles:', styles);
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const getYearPercent = (dateStr) => {
    const date = new Date(dateStr);
    const startOfYear = new Date('2025-01-01');
    const endOfYear = new Date('2025-12-31');
    
    // Calculate days since start of year
    const daysSinceStart = (date - startOfYear) / (1000 * 60 * 60 * 24);
    // Calculate total days in the year
    const totalDays = (endOfYear - startOfYear) / (1000 * 60 * 60 * 24);
    
    // Convert to percentage
    return (daysSinceStart / totalDays) * 100;
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '1200px',
      height: '100px',
      margin: '2rem auto 1.5rem',
      padding: '0 2rem',
      backgroundColor: '#f8f8f8',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '6px',
        backgroundColor: '#e0e0e0',
        marginTop: '2rem',
        borderRadius: '3px'
      }}>
        {events.map((ev, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              top: '-20px',
              left: `${getYearPercent(ev.date)}%`,
              width: '20px',  // Wider touch target
              height: '46px', // Taller touch target
              backgroundColor: 'transparent', // Make the touch target invisible
              cursor: 'pointer',
              transform: 'translateX(-50%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onMouseEnter={() => setHoveredEvent(ev)}
            onMouseLeave={() => setHoveredEvent(null)}
          >
            <div style={{
              width: '3px',
              height: hoveredEvent === ev ? '30px' : '26px',
              backgroundColor: hoveredEvent === ev ? '#000' : '#444',
              borderRadius: '1.5px',
              transition: 'height 0.2s, background-color 0.2s'
            }}></div>
            {hoveredEvent === ev && (
              <div style={{
                position: 'absolute',
                top: '-3.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '0.5rem',
                fontSize: '0.9rem',
                width: '160px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                zIndex: 10
              }}>
                <div style={{ fontWeight: 'bold', color: '#666', marginBottom: '0.2rem', fontSize: '0.8rem' }}>
                  {new Date(ev.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
                <div style={{ color: '#333', lineHeight: 1.2 }}>{ev.title}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
