import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type BookingOrderProps = {
	bookingUser: {
		id: string;
		name: string;
		email: string;
		image: any;
	} | null;
	bookingBarber: {
		id: string;
		title: string;
		email: string;
		image: any;
	} | null;
};

const BookingOrder: React.FC<BookingOrderProps> = ({ bookingUser, bookingBarber }) => {

	const RenderItem = (item: { image: any; name: string; email: string }) => (
		<View style={styles.item}>
			<Image 
				source={typeof item?.image === 'string' ? { uri: item?.image } : item?.image} 
				style={styles.image} 
			/>
			<View style={{ marginLeft: 16 }}>
				<Text style={styles.name}>{item?.name}</Text>
				<Text style={styles.email}>{item?.email}</Text>
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
						<RenderItem image={bookingUser?.image || ''} name={bookingUser?.name || ''} email={bookingUser?.email || ''} />
						<RenderItem image={bookingBarber?.image || ''} name={bookingBarber?.title || ''} email={bookingBarber?.email || ''} />
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
		borderRadius: 20,
	},
});

export default BookingOrder;
