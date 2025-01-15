import { useCallback, useEffect, useState } from 'react';
import { Button, Text, useColorScheme, View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
	duration: 500,
	fade: true,
});

export default function App({ onPressLearnMore }) {
	const colorScheme = useColorScheme();
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				// Pre-load fonts, make any API calls you need to do here

				// Artificially delay for two seconds to simulate a slow loading
				// experience. Remove this if you copy and paste the code!
				await new Promise(resolve => setTimeout(resolve, 2000));
			} catch (e) {
				console.warn(e);
			} finally {
				// Tell the application to render
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(() => {
		if (appIsReady) {
			// This tells the splash screen to hide immediately! If we call this after
			// `setAppIsReady`, then we may see a blank screen while the app is
			// loading its initial state and rendering its first pixels. So instead,
			// we hide the splash screen once we know the root view has already
			// performed layout.
			SplashScreen.hide();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<View
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
			onLayout={onLayoutRootView}
		>
			<Text
				className={` ${colorScheme === 'dark' ? 'text-white' : 'text-dark'}`}
			>
				SplashScreen Demo! 👋
			</Text>

			<Button
				onPress={onPressLearnMore}
				title='Learn More'
				color='#841584'
				accessibilityLabel='Learn more about this purple button'
			/>
		</View>
	);
}
