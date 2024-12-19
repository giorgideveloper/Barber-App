import React from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Alert,
	StyleSheet,
} from 'react-native';

const App = () => {
	const users = [
		{ id: '1', name: 'John', email: 'John@example' },
		{ id: '2', name: 'Jane', email: 'Jane@example' },
		{ id: '3', name: 'Mike', email: 'Mike@example' },
		{ id: '4', name: 'Emma', email: 'Emma@example' },
		{ id: '5', name: 'David', email: 'David@example' },
		{ id: '6', name: 'Olivia', email: 'Olivia@example' },
		{ id: '7', name: 'Sophia', email: 'Sophia@example' },
		{ id: '8', name: 'Isabella', email: 'Isabella@example' },
		{ id: '9', name: 'Amelia', email: 'Amelia@example' },
		{ id: '10', name: 'Harper', email: 'Harper@example' },
	];

	const handlePress = (name: string) => {
		Alert.alert('მომხმარებლის ინფორმაცია', `სახელი: ${name}`);
	};

	const renderItem = ({
		item,
	}: {
		item: { id: string; name: string; email: string };
	}) => (
		<TouchableOpacity
			onPress={() => handlePress(item.name)}
			style={styles.item}
		>
			<Text style={styles.name}>{item.name}</Text>
			<Text style={styles.email}>{item.email}</Text>
		</TouchableOpacity>
	);

	return (
		<View className='flex p-11'>
			<FlatList
				data={users}
				keyExtractor={item => item.id}
				renderItem={renderItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#f5f5f5',
	},
	item: {
		padding: 16,
		marginVertical: 8,
		backgroundColor: '#fff',
		borderRadius: 8,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 1 },
		shadowRadius: 3,
		elevation: 2,
	},
	name: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
	},
	email: {
		fontSize: 14,
		color: '#666',
	},
});

export default App;
