import React from 'react';
import './EventList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';


function EventList() {
  const events = [
    { date: '08/06/2024', city: 'MADRID', venue: 'ESTADIO SANTIAGO BERNABEÚ', soldOut: false },
    { date: '03/12/2023', city: 'BUENOS AIRES', venue: 'ESTADIO RIVER PLATE', soldOut: true },
    { date: '02/12/2023', city: 'BUENOS AIRES', venue: 'ESTADIO RIVER PLATE', soldOut: true },
    { date: '02/09/2023', city: 'MALAGA', venue: 'CALA MIJAS', soldOut: true },
    { date: '19/08/2023', city: 'CADIZ', venue: 'CONCERT MUSIC FESTIVAL', soldOut: true },
    { date: '17/08/2023', city: 'ALICANTE', venue: 'BOOMBASTIC', soldOut: true },

  ];

  return (
    <div className="EventListContainer">
      <h1>PROXIMAS FECHAS</h1>
      <table className="EventList">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Ciudad</th>
            <th>Sede</th>
            <th className="centered">Disponibilidad</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.date}</td>
              <td>
              <FontAwesomeIcon icon={faFlag} className="flag-icon" />
              {event.city}
              </td>
              <td>{event.venue}</td>
              <td className={event.soldOut ? 'soldOut' : 'buyNow'}>
                {event.soldOut ? 'SOLD OUT' : 'Comprar ahora'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventList;
