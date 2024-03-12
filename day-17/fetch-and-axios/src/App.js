import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchingComponent = () => {
  const [fetchData, setFetchData] = useState([]);
  const [axiosData, setAxiosData] = useState([]);

  useEffect(() => {
    // Using Fetch
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setFetchData(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });

    // Using Axios
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setAxiosData(response.data);
      })
      .catch(error => {
        console.error('Axios error:', error);
      });
  }, []);

  return (
    <div>
      <h2>Data Fetching Component</h2>
      <div>
        <h3>Data fetched using Fetch:</h3>
        <ul>
          {fetchData.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Data fetched using Axios:</h3>
        <ul>
          {axiosData.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataFetchingComponent;
