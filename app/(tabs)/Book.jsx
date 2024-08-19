// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import axios from 'axios';

// const WarehouseBookingPage = () => {
//   const [vegetable, setVegetable] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const handleBooking = async () => {
//     if (!vegetable || !quantity || !date) {
//       Alert.alert('Error', 'Please fill all the fields');
//       return;
//     }

//     try {
//       const response = await axios.post('https://your-backend-api.com/bookWarehouse', {
//         vegetable,
//         quantity,
//         date: date.toISOString(),
//       });

//       if (response.status === 200) {
//         Alert.alert('Success', 'Warehouse booked successfully');
//       } else {
//         Alert.alert('Error', 'Failed to book warehouse');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'An error occurred while booking');
//     }
//   };

//   const handleDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(false);
//     setDate(currentDate);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Book a Warehouse</Text>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Type of Vegetable:</Text>
//         <TextInput
//           style={styles.input}
//           value={vegetable}
//           onChangeText={setVegetable}
//           placeholder="Enter vegetable type"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Quantity (in tons ):</Text>
//         <TextInput
//           style={styles.input}
//           value={quantity}
//           onChangeText={setQuantity}
//           placeholder="Enter quantity"
//           keyboardType="numeric"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Pick-Up Date:</Text>
//         <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
//         {showDatePicker && (
//           <DateTimePicker
//             value={date}
//             mode="date"
//             display="default"
//             onChange={handleDateChange}
//           />
//         )}
//         <Text style={styles.dateText}>{date.toDateString()}</Text>
//       </View>

//       <Button title="Book Warehouse" onPress={handleBooking} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#f0f0f0',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//   },
//   dateText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: '#555',
//   },
// });

// export default WarehouseBookingPage;
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

const WarehouseBookingPage = () => {
  const [vegetable, setVegetable] = useState('Potato'); // Fixed to Potato
  const [packets, setPackets] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleBooking = async () => {
    if (!vegetable || !packets || !date) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }

    try {
      const response = await axios.post('https://your-backend-api.com/bookWarehouse', {
        vegetable,
        packets,
        date: date.toISOString(),
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Warehouse booked successfully');
      } else {
        Alert.alert('Error', 'Failed to book warehouse');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while booking');
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const calculateWeight = (packets) => {
    const kg = packets * 50;
    const quintal = kg / 100;
    return { kg, quintal };
  };

  const { kg, quintal } = calculateWeight(packets);

  return (
    <ImageBackground
      source={require('../Asssests/8.jpg')} // Replace with your background image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Book a Warehouse</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Type of Vegetable:</Text>
          <TextInput
            style={[styles.input, styles.boldText]} // Make "Potato" bold and deep
            value={vegetable}
            editable={false} // Fixed to Potato
            placeholder="Potato"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Number of Packets:</Text>
          <TextInput
            style={styles.input}
            value={packets}
            onChangeText={setPackets}
            placeholder="Enter number of packets"
            keyboardType="numeric"
          />
          {packets ? (
            <Text style={styles.weightDetails}>
              {packets} Packet(s) = {kg} kg = {quintal.toFixed(2)} quintal(s)
            </Text>
          ) : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pick-Up Date:</Text>
          <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          <Text style={styles.dateText}>{date.toDateString()}</Text>
        </View>

        <Button title="Book Warehouse" onPress={handleBooking} />
      </View>
   </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 80,
   // backgroundColor: '#fff', // Semi-transparent background
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#5d2303', // Deep color for "Potato"
  },
  weightDetails: {
    marginTop: 10,
    fontSize: 17,
    color: '#555',
    fontWeight: 'bold',
  },
  dateText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default WarehouseBookingPage;
