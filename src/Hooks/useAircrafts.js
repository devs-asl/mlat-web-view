import { useEffect, useState } from 'react';

export const useAircrafts = () => {
    
    const [aircrafts, setAircrafts] = useState([]);

    useEffect(() => {
        setInterval(function(){
            fetch('http://192.168.30.5:9001')
                .then(response => response.json())
                .then(data => setAircrafts(data));
            
          }, 2000);  
        },[])
        

    
    return {aircrafts}
};
