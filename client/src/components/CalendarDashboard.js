// import React, { useState, useEffect } from 'react';
// import '../App.css';

// const CalendarDashboard = () => {
//   const [events, setEvents] = useState([]);
//   const [filterDate, setFilterDate] = useState('');

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_BACKEND_URL}/events`, {
//       credentials: 'include',
//     })
//       .then((res) => res.json())
//       .then((data) => setEvents(data.events))
//       .catch((err) => console.error(err));
//   }, []);

//   const filteredEvents = events.filter((event) =>
//     filterDate ? event.start.dateTime.startsWith(filterDate) : true
//   );

//   return (
//     <div className="dashboard-container">
//       <h2>Google Calendar Events</h2>
//       <input
//         type="date"
//         value={filterDate}
//         onChange={(e) => setFilterDate(e.target.value)}
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Start Time</th>
//             <th>End Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredEvents.map((event) => (
//             <tr key={event.id}>
//               <td>{event.summary}</td>
//               <td>{new Date(event.start.dateTime).toLocaleString()}</td>
//               <td>{new Date(event.end.dateTime).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CalendarDashboard;




import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { Button } from "../components/ui/button";

export default function CalendarDashboard() {
  const [events, setEvents] = useState([]);
  const [filterDate, setFilterDate] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/events`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.events);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const filteredEvents = events.filter((event) =>
    filterDate ? event.start.dateTime.startsWith(filterDate) : true
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 to-indigo-600 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl space-y-6">
        <div className="text-center">
          <Calendar className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="text-3xl font-extrabold text-gray-900">Your Calendar Events</h2>
          <p className="mt-2 text-sm text-gray-600">
            Filter and view your Google Calendar events in a single dashboard.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="w-full sm:w-auto py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Button
            onClick={() => setFilterDate("")}
            className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white"
          >
            Clear Filter
          </Button>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
          </div>
        ) : filteredEvents.length > 0 ? (
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-4 py-2 border border-gray-200">Title</th>
                <th className="px-4 py-2 border border-gray-200">Start Time</th>
                <th className="px-4 py-2 border border-gray-200">End Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event) => (
                <tr
                  key={event.id}
                  className="hover:bg-indigo-50 transition-colors duration-200"
                >
                  <td className="px-4 py-2 border border-gray-200 text-gray-800">
                    {event.summary}
                  </td>
                  <td className="px-4 py-2 border border-gray-200 text-gray-800">
                    {new Date(event.start.dateTime).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border border-gray-200 text-gray-800">
                    {new Date(event.end.dateTime).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">No events found for the selected date.</p>
        )}
      </div>
    </div>
  );
}
