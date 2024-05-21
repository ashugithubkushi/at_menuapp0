// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // For making API requests

// function UsernameDisplay() {
//   const [username, setUsername] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsername = async () => {
//       setIsLoading(true);
//       setError(null);

//       try {
//         const response = await axios.get('http://localhost:3000/adminRegisterData'); // Replace with your actual API endpoint
//         setUsername(response.data.username);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUsername();
//   }, []);

//   return (
//     <div>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {!isLoading && !error && username && <p>Welcome, {username}!</p>}
//     </div>
//   );
// }

// export default UsernameDisplay;
