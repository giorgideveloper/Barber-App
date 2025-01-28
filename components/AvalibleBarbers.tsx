import React from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Alert,
	StyleSheet,
	Image,
	ImageSourcePropType,
} from 'react-native';

type User = {
	id: string;
	name: string;
	email: string;
	image: ImageSourcePropType;
};

const App = ({ setUser }: any) => {
	const [selectedId, setSelectedId] = React.useState<string | null>(null);
	const users = [
		{
			id: '1',
			name: 'John',
			email: 'John@example',
			image: require('../assets/images/user.png'),
		},
		{
			id: '2',
			name: 'Jane',
			email: 'Jane@example',
			image: require('../assets/images/user.png'),
		},
		{
			id: '3',
			name: 'Mike',
			email: 'Mike@example',
			image: require('../assets/images/user.png'),
		},
	];

	const handlePress = (id: string) => {
		setSelectedId(id);
		setUser(id);
	};

	const renderItem = ({ item }: { item: User }) => (
		<TouchableOpacity
			onPress={() => handlePress(item.id)}
			style={[
				styles.item,
				item.id === selectedId ? styles.selected : styles.item,
			]}
		>
			<Image source={item.image} style={styles.image} />
			<View style={{ marginLeft: 16 }}>
				<Text style={styles.name}>{item.name}</Text>
				<Text style={styles.email}>{item.email}</Text>
			</View>
		</TouchableOpacity>
	);

	return (
		<View>
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
		flexDirection: 'row',
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
	image: {
		width: 40,
		height: 40,
	},
	selected: {
		backgroundColor: '#FA7235',
		color: '#fff',
	},
});

export default App;
