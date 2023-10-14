import './App.css';
import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

export const Born = () => {
    const [bornOn, updateBorn] = useState([]);

    // Format date to be more readable
    const formatDate = (dateString) => {
      const date = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString(date);
    };

      // Define function to call API
    const fetchBirthDate = async() =>  {
        const data = await API.get('cryptoapi', `/born`);
        updateBorn(data);
        console.log(data.created_at)

}

useEffect(() => {
  fetchBirthDate()
}, [])


return (
    <div>
      <h2>GitHub Birth Date</h2>
      <h5>{formatDate(bornOn.created_at)}</h5>
    </div>
  );
}