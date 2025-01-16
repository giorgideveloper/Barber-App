import { useCallback, useEffect, useState } from 'react';
import {
	Button,
	Image,
	Text,
	TouchableOpacity,
	useColorScheme,
	View,
} from 'react-native';

import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
	duration: 500,
	fade: true,
});

export default function App({ onPressLearnMore }: any) {
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
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#F3ECDA',
			}}
			onLayout={onLayoutRootView}
		>
			<Text className='text-[#44513D] text-5xl font-bold  text-center'>
				{' '}
				BARBER SHOP
			</Text>
			<Text className='text-2xl pb-5 text-[#F97239]'>CLIPPERS</Text>
			<Image
				source={require('../assets/images/barber.png')}
				style={{ width: 220, height: 300 }}
			/>
			;
			<Text
				className={` ${
					colorScheme === 'dark' ? 'text-dark' : 'text-dark'
				} text-justify p-5`}
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nulla
				eligendi dolore quos nobis eum aut asperiores praesentium! Natus vel a
				libero nesciunt blanditiis sapiente alias iste tenetur dolor
				repudiandae.
			</Text>
			<TouchableOpacity onPress={onPressLearnMore}>
				<Text
					style={{ fontSize: 20 }}
					className='text-white bg-[#F97239] p-4 rounded-2xl font-bold '
				>
					ჯავშანის გაკეთება
				</Text>
			</TouchableOpacity>
		</View>
	);
}
