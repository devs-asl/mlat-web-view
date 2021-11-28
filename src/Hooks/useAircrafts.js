import { useEffect, useState } from 'react';

export const useAircrafts = () => {
    
    const [aircrafts, setAircrafts] = useState([]);

    useEffect(() => {
        setInterval(function(){
            fetch('http://127.0.0.1:8001')
                .then(response => response.json())
                .then(data => setAircrafts(data));
            
          }, 2000);  
        },[])
        

    
    return {aircrafts}
};
