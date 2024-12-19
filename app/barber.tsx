import { View, Text, useColorScheme } from 'react-native';
import React from 'react';

export default function barber() {
	const colorScheme = useColorScheme();
	return (
		<View className='flex items-center justify-center -h-screen-safe-offset-36 '>
			<View className='bg-orange-700 w-100 rounded-xl '>
				<Text
					className={`p-5 text-5xl  ${
						colorScheme === 'dark' ? 'text-white' : 'text-dark'
					}`}
				>
					Barbers
				</Text>
			</View>
		</View>
	);
}
