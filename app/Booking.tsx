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
import DatapikerDay from '@/components/DatapikerDay';
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
			className='-h-screen-safe-offset-1'
			style={{ backgroundColor: '#F3ECDA' }}
		>
			{/* <BookingOrder /> */}
			<DatapikerDay />
		</View>
	);
}
