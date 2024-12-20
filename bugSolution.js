// bugSolution.js

import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('@my_key');
        setData(value);
      } catch (e) {
        setError(e);
      } 
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{data || 'No data'}</Text>
    </View>
  );
};

export default App;