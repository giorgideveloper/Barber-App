import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const BookingOrder = () => {
	const RenderItem = () => (
		<View style={styles.item}>
			<Image />
			<View style={{ marginLeft: 16 }}>
				<Text style={styles.name}></Text>
				<Text style={styles.email}></Text>
			</View>
		</View>
	);
	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<ScrollView>
					<View style={styles.container}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								marginTop: 10,
							}}
						>
							<Text
								className='text-start p-2 pr-7 tracking-wider rounded-2xl drop-shadow-2xl text-white font-bold text-xl'
								style={{ backgroundColor: '#808769' }}
							>
								Your Order
							</Text>
						</View>
						<RenderItem />
						<RenderItem />
					</View>
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
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
});

export default BookingOrder;
