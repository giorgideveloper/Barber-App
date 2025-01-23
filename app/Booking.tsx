import {
	View,
	Text,
	useColorScheme,
	TextInput,
	Pressable,
	Platform,
} from 'react-native';
import React from 'react';
import { useSearchParams } from 'expo-router/build/hooks';
import BookingOrder from '@/components/BookingOrder';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function booking() {
	const colorScheme = useColorScheme();
	const { propKey }: any = useSearchParams();
	const [date, setDate] = React.useState(new Date());
	const [showPicker, setShowPicker] = React.useState(false);
	const toggleDatePicker = () => setShowPicker(!showPicker);
	const onChange = ({ type, selectedDate }: any) => {
		if (type === 'set') {
			const currentDate = selectedDate;
			setDate(currentDate);
			if (Platform.OS === 'ios') {
				toggleDatePicker();
			}
		} else {
			toggleDatePicker();
		}
	};
	console.log(propKey);
	return (
		<View
			className='  -h-screen-safe-offset-1'
			style={{ backgroundColor: '#F3ECDA' }}
		>
			{/* <BookingOrder /> */}
			<Pressable onPress={toggleDatePicker}>
				<TextInput
					editable={false}
					style={{
						width: 100,
						height: 100,
						marginVertical: 8,
						backgroundColor: '#fff',
						borderRadius: 8,
						shadowColor: '#000',
						shadowOpacity: 0.1,
						shadowOffset: { width: 0, height: 1 },
						shadowRadius: 3,
						elevation: 2,
					}}
					placeholder='Sat u'
				/>
			</Pressable>
			{showPicker && (
				<DateTimePicker
					mode='date'
					display='spinner'
					value={date}
					onChange={onChange}
				/>
			)}
		</View>
	);
}
