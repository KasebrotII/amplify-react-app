import './App.css';
import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

export const Born = () => {

    const [bornOn, updateBorn] = useState([]);
      // Define function to call API
    const fetchBirthDate = async() =>  {
        const data = await API.get('cryptoapi', `/born`);
        updateBorn(data.bornOn);

}


// Call fetchCoins function when component loads
useEffect(() => {
  fetchBirthDate()
  
}, [])

return (
    <div>
      <h2>Birth Date</h2>
      <ul>
        {bornOn.map((item, index) => (
          <h5 key={index}>{item.create_at}</h5>
        ))}
      </ul>
    </div>
  );

}