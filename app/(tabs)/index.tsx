import { View, Button, Alert, Text, ScrollView, Pressable } from 'react-native';

import { useState } from 'react';
import HorizontalScrollCards from '@/components/HorizontaaalScrollCards';
import AvalibleBarbers from '@/components/AvalibleBarbers';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
export default function HomeScreen() {
	const [form, setForm] = useState({
		name: '',
		surname: '',
		phone: '',
		password: '',
	});
	const [user, setUser] = useState(null);
	const handleRegister = () => {
		// TODO: Implement backend registration logic
		console.log(user);
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView edges={['top']}>
				<ScrollView>
					<View
						style={{
							flex: 1,
							backgroundColor: '#F3ECDA',
							padding: 15,
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								marginTop: 20,
							}}
						>
							<Text
								className='text-start p-2 rounded-2xl drop-shadow-2xl text-white font-bold text-xl'
								style={{ backgroundColor: '#808769' }}
							>
								Available Service
							</Text>
						</View>
						<HorizontalScrollCards />
						//TODO: Implement AvalibleBarbers component
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								marginTop: 40,
							}}
						>
							<Text
								className='text-start p-2 rounded-2xl drop-shadow-2xl text-white font-bold text-xl'
								style={{ backgroundColor: '#808769' }}
							>
								Available Barbers
							</Text>
						</View>
						<View>
							<AvalibleBarbers setUser={setUser} />
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
							<Link
								href={{
									pathname: '/[booking]',
									params: { booking: JSON.stringify(user) ?? '' },
								}}
								asChild
							>
								<Pressable
									style={{
										backgroundColor: '#FA7235',
										justifyContent: 'center',
										alignItems: 'center',
										padding: 10,
										borderRadius: 5,
										marginBottom: 20,
									}}
								>
									<Text className=' text-white font-bold text-lg'>
										გაგძელება
									</Text>
								</Pressable>
							</Link>
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
					</View>
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
// const styles = StyleSheet.create({
// 	titleContainer: {
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		gap: 8,
// 	},
// 	stepContainer: {
// 		gap: 8,
// 		marginBottom: 8,
// 	},
// 	reactLogo: {
// 		height: 278,
// 		width: 420,
// 		bottom: 0,
// 		left: 0,
// 		position: 'absolute',
// 	},
// 	container: { flex: 1, padding: 20, justifyContent: 'center' },
// 	input: { marginBottom: 10, borderWidth: 1, padding: 10, borderRadius: 5 },
// });
