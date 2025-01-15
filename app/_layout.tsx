import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import '../global.css';
import { useColorScheme } from '@/hooks/useColorScheme';
import StartScreen from './SplashScreens';

export default function RootLayout() {
	const [isFirstLaunch, setIsFirstLaunch] = useState(true);
	const colorScheme = useColorScheme();
	const onPressLearnMore = () => setIsFirstLaunch(false);

	return (
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			{isFirstLaunch ? (
				<StartScreen onPressLearnMore={onPressLearnMore} />
			) : (
				<Stack>
					<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
					<Stack.Screen name='+not-found' />
				</Stack>
			)}

			<StatusBar style='auto' />
		</ThemeProvider>
	);
}
