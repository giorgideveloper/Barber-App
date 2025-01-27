import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import dayjs from 'dayjs';

interface TimeSlot {
	time: string;
	booked: boolean;
}

const DatapikerDay: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<string | null>(null);
	const [selectedTime, setSelectedTime] = useState<string | null>(null);

	// Generate days for the current week
	const generateWeekDates = () => {
		const today = dayjs();
		const startOfWeek = today.startOf('week');
		return Array.from({ length: 7 }, (_, index) =>
			startOfWeek.add(index, 'day').format('YYYY-MM-DD')
		);
	};

	const weekDates = generateWeekDates();

	const timeSlots: TimeSlot[] = [
		{ time: '09:00 AM', booked: false },
		{ time: '10:00 AM', booked: false },
		{ time: '11:00 AM', booked: false },
		{ time: '12:00 PM', booked: true },
		{ time: '01:00 PM', booked: false },
		{ time: '02:00 PM', booked: false },
		{ time: '03:00 PM', booked: true },
		{ time: '04:00 PM', booked: false },
		{ time: '05:00 PM', booked: false },
		{ time: '06:00 PM', booked: false },
		{ time: '07:00 PM', booked: false },
		{ time: '08:00 PM', booked: true },
		{ time: '09:00 PM', booked: false },
	];

	const handleDateSelect = (date: string) => {
		setSelectedDate(date);
		setSelectedTime(null); // Reset time selection on date change
	};

	const handleTimeSelect = (time: string, booked: boolean) => {
		if (!booked) {
			setSelectedTime(time);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Date & Time</Text>

			{/* Horizontal Week Calendar */}
			<View style={styles.calendarContainer}>
				<FlatList
					data={weekDates}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={item => item}
					renderItem={({ item }) => {
						const isSelected = selectedDate === item;
						return (
							<TouchableOpacity
								style={[
									styles.dateContainer,
									isSelected && styles.selectedDateContainer,
								]}
								onPress={() => handleDateSelect(item)}
							>
								<Text
									style={[styles.dayText, isSelected && styles.selectedText]}
								>
									{dayjs(item).format('dd')} {/* SU, MO, TU */}
								</Text>
								<Text
									style={[styles.dateText, isSelected && styles.selectedText]}
								>
									{dayjs(item).format('D')} {/* Day of the month */}
								</Text>
							</TouchableOpacity>
						);
					}}
				/>
			</View>

			{/* Time Slots */}
			<Text style={styles.subtitle}>
				{selectedDate ? `Selected Date: ${selectedDate}` : 'Select a Date'}
			</Text>

			<FlatList
				data={timeSlots}
				numColumns={3}
				keyExtractor={item => item.time}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={[
							styles.timeSlot,
							item.booked && styles.bookedSlot,
							selectedTime === item.time && !item.booked && styles.selectedSlot,
						]}
						onPress={() => handleTimeSelect(item.time, item.booked)}
						disabled={item.booked}
					>
						<Text
							style={[
								styles.timeText,
								item.booked && styles.bookedText,
								selectedTime === item.time &&
									!item.booked &&
									styles.selectedText,
							]}
						>
							{item.time}
						</Text>
					</TouchableOpacity>
				)}
				contentContainerStyle={styles.timeContainer}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#F9F9F9',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 16,
		marginVertical: 10,
	},
	calendarContainer: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	dateContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		marginHorizontal: 5,
		borderRadius: 8,
		backgroundColor: '#E0E0E0',
	},
	selectedDateContainer: {
		backgroundColor: '#FF5722',
	},
	dayText: {
		fontSize: 14,
		color: '#000',
	},
	dateText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#000',
	},
	selectedText: {
		color: '#FFF',
	},
	timeContainer: {
		marginTop: 10,
	},
	timeSlot: {
		flex: 1,
		margin: 5,
		paddingVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
		backgroundColor: '#E0E0E0',
	},
	bookedSlot: {
		backgroundColor: '#A5D6A7',
	},
	selectedSlot: {
		backgroundColor: '#FF5722',
	},
	timeText: {
		fontSize: 14,
		color: '#000',
	},
	bookedText: {
		color: '#FFF',
		fontWeight: 'bold',
	},
	selectedText: {
		color: '#FFF',
		fontWeight: 'bold',
	},
});

export default DatapikerDay;
