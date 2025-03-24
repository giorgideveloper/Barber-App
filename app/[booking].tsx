import { Pressable, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import DatapikerDay from '@/components/DatapikerDay';
import BookingOrder from '@/components/BookingOrder';

export default function Booking() {
	const colorScheme = useColorScheme();
	const { booking } = useLocalSearchParams();
	
	// Parse the booking data from URL parameters
	const bookingData = booking ? JSON.parse(booking as string) : null;
	console.log('Booking Data:', bookingData);

	return (
		<View
			className='-h-screen-safe-offset-1'
			style={{ backgroundColor: '#F3ECDA' }}
		>
			<BookingOrder bookingUser={bookingData?.user} bookingBarber={bookingData?.selectedBarber} />
			<DatapikerDay />

			<Pressable
				style={{
					backgroundColor: '#FA7235',
					justifyContent: 'center',
					alignItems: 'center',
					padding: 10,
					borderRadius: 20,
					marginBottom: 120,
					marginHorizontal: 60,
				}}
			>
				<Text className=' text-white font-bold text-2xl'>Booking</Text>
			</Pressable>
		</View>
	);
}
