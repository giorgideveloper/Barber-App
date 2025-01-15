import { Image, StyleSheet, View, Text, useColorScheme } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Link } from 'expo-router';

export default function HomeScreen() {
	const colorScheme = useColorScheme();
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image
					source={require('@/assets/images/partial-react-logo.png')}
					style={styles.reactLogo}
				/>
			}
		>
			<View className='flex-1 items-center justify-center'>
				<Text
					className={` text-5xl p-2 ${
						colorScheme === 'dark' ? 'text-white' : 'text-dark'
					}`}
				>
					Profile Pagesss
				</Text>

				<Link href='/barber' className='p-3 bg-blue-500 text-white '>
					Go to Barber
				</Link>
			</View>
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
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
	container: { flex: 1, padding: 20, justifyContent: 'center' },
	input: { marginBottom: 10, borderWidth: 1, padding: 10, borderRadius: 5 },
});
