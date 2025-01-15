import { Image, StyleSheet, View, Button, Alert } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';

export default function HomeScreen() {
	const [form, setForm] = useState({
		name: '',
		surname: '',
		phone: '',
		password: '',
	});
	const handleRegister = () => {
		// TODO: Implement backend registration logic
		console.log(form);
	};
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image
					source={require('@/assets/images/booking-cover.jpg')}
					style={styles.reactLogo}
				/>
			}
		>
			<View style={styles.titleContainer}>
				<ThemedText type='title'>დაჯავშნე ვიზიტი</ThemedText>
				<HelloWave />
			</View>
			<View className='bg-slate-700'>
				<Button
					title='ჯავშანის გაკეთება'
					onPress={() => Alert.alert('Cannot press this one')}
				/>
			</View>
			{/* <View style={styles.container}>
				<TextInput
					placeholder='Name'
					style={styles.input}
					value={form.name}
					onChangeText={text => setForm({ ...form, name: text })}
				/>
				<TextInput
					placeholder='Surname'
					style={styles.input}
					value={form.surname}
					onChangeText={text => setForm({ ...form, surname: text })}
				/>
				<TextInput
					placeholder='Phone'
					style={styles.input}
					value={form.phone}
					onChangeText={text => setForm({ ...form, phone: text })}
					keyboardType='phone-pad'
				/>
				<TextInput
					placeholder='Password'
					style={styles.input}
					value={form.password}
					onChangeText={text => setForm({ ...form, password: text })}
					secureTextEntry
				/>
				<Button title='Register' onPress={handleRegister} />
			</View> */}
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 278,
		width: 420,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
	container: { flex: 1, padding: 20, justifyContent: 'center' },
	input: { marginBottom: 10, borderWidth: 1, padding: 10, borderRadius: 5 },
});
