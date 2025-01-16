import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

const HorizontalScrollCards = () => {
	const cards = [
		{
			id: 1,
			title: 'Card 1',
			image: 'https://icon-library.com/images/barber-icon/barber-icon-11.jpg',
		},
		{
			id: 2,
			title: 'Card 2',
			image: 'https://www.freeiconspng.com/uploads/barber-scissors-icon-12.png',
		},
		{ id: 3, title: 'Card 3', image: '../assets/images/barber.png' },
		{ id: 6, title: 'Card 4', image: 'https://via.placeholder.com/150' },
		{ id: 7, title: 'Card 4', image: 'https://via.placeholder.com/150' },
		{ id: 8, title: 'Card 4', image: 'https://via.placeholder.com/150' },
	];

	return (
		<View className='flex-1 bg-gray-100'>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='mt-5 px-4'
				contentContainerStyle={{ paddingRight: 16 }}
			>
				{cards.map(card => (
					<View
						key={card.id}
						className='mr-4  bg-white rounded-lg shadow-md overflow-hidden w-64 text-center justify-center items-center'
						style={{
							width: 150,
							height: 200,
							backgroundColor: 'white',
							borderRadius: 10,
							borderWidth: 0,
							borderColor: 'gray',
							overflow: 'hidden',
							position: 'relative',
							margin: 5,
							marginTop: 15,
						}}
					>
						<Image
							source={require('../assets/images/barber.png')}
							// source={{ uri: card.image }}
							className='h-20 w-20'
							resizeMode='cover'
						/>
						<Text
							className='text-lg font-semibold  font-bold'
							style={{ color: '#FA7235', marginTop: 5 }}
						>
							{card.title}
						</Text>
						<Text className='text-lg font-semibold '>$30.00</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default HorizontalScrollCards;
