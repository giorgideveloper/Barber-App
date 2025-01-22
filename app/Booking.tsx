import { View, Text, useColorScheme } from 'react-native';
import React from 'react';
import { useSearchParams } from 'expo-router/build/hooks';

export default function booking() {
	const colorScheme = useColorScheme();
	const { propKey }: any = useSearchParams();
	console.log(propKey);
	return (
		<View
			className=' -h-screen-safe-offset-1'
			style={{ backgroundColor: '#F3ECDA' }}
		>
			<View className='bg-orange-700 w-100 rounded-xl  p-20 m-5'>
				<Text
					className={`p-5 text-5xl  ${
						colorScheme === 'dark' ? 'text-white' : 'text-dark'
					}`}
				>
					booking {propKey}
				</Text>
			</View>
		</View>
	);
}
