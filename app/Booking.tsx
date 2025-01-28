import { Pressable, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import { useSearchParams } from 'expo-router/build/hooks';

import DatapikerDay from '@/components/DatapikerDay';
import BookingOrder from '@/components/BookingOrder';
export default function booking() {
	const colorScheme = useColorScheme();

	const { propKey }: any = useSearchParams();

	console.log(propKey);
	return (
		<View
			className='-h-screen-safe-offset-1'
			style={{ backgroundColor: '#F3ECDA' }}
		>
			<BookingOrder />

			<DatapikerDay />
			<Pressable
				style={{
					backgroundColor: '#FA7235',
					justifyContent: 'center',
					alignItems: 'center',
					padding: 10,
					borderRadius: 5,
					marginBottom: 60,
					marginHorizontal: 60,
				}}
			>
				<Text className=' text-white font-bold text-2xl'>Booking</Text>
			</Pressable>
		</View>
	);
}
