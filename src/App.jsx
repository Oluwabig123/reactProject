import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListComponent from './Component/ListComponent';



function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderItem = (item) => {
    return (
      <div>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        <p><strong>Author:</strong> {item.userId}</p>

      </div>
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div >
      <h1>Posts</h1>
      <ListComponent items={data} renderItem={renderItem} />
    </div>
  );
};


export default App;
