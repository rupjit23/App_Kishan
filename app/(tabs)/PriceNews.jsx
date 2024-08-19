import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';

const ComparisonPage = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');

        // Replace with your actual API endpoints
        const response1 = await axios.get('https://your-api-endpoint.com/data1');
        const response2 = await axios.get('https://your-api-endpoint.com/data2');
        const response3 = await axios.get('https://your-api-endpoint.com/data3');

        setData1(response1.data.value); // Assuming API response has a 'value' field
        setData2(response2.data.value);
        setData3(response3.data.value);

      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getComparisonIcon = (value, otherValues) => {
    if (value > Math.max(...otherValues)) {
      return <FontAwesome name="arrow-up" size={30} color="green" />;
    } else if (value < Math.min(...otherValues)) {
      return <FontAwesome name="arrow-down" size={30} color="red" />;
    } else {
      return <FontAwesome name="minus" size={30} color="grey" />;
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <ImageBackground
      source={require('../Asssests/6.jpg')} // Replace with your background image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title1}>Price Rate</Text>
        <Text style={styles.title}>Comparison</Text>

        <View style={styles.comparisonContainer}>
          <View style={styles.box}>
            <Text style={styles.boxTitle}> WEST BENGAL</Text>
            <Text style={styles.boxValue}>{data1}</Text>
            <View style={styles.comparisonIcon}>
              {getComparisonIcon(data1, [data2, data3])}
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.boxTitle}>UTTAR PRADESH</Text>
            <Text style={styles.boxValue}>{data2}</Text>
            <View style={styles.comparisonIcon}>
              {getComparisonIcon(data2, [data1, data3])}
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.boxTitle}>BIHAR</Text>
            <Text style={styles.boxValue}>{data3}</Text>
            <View style={styles.comparisonIcon}>
              {getComparisonIcon(data3, [data1, data2])}
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjust the image style as needed
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title1: {
    fontSize: 47,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  comparisonContainer: {
    flexDirection: 'column', // Set to column
    justifyContent: 'space-between', // Space between the boxes
    width: '100%',
    alignItems: 'center', // Center the boxes
  },
  box: {
    width: '70%',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fef2eb',
    borderRadius: 10,
    marginBottom: 20, // Space between boxes
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    padding: 10,
  },
  boxTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  boxValue: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  comparisonIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});

export default ComparisonPage;
