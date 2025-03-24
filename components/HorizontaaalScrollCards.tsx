import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';

const HorizontalScrollCards = ({ selectedBarber, setSelectedBarber }: any) => {

	const cards = [
		{
			id: 1,
			title: 'Beard',
			image: 'https://icon-library.com/images/barber-icon/barber-icon-11.jpg',
		},
		{
			id: 2,
			title: 'Hair',
			image: 'https://icon-library.com/images/barber-icon/barber-icon-10.jpg',
		},
		{ id: 3, title: 'Card 3', image: 'https://icon-library.com/images/barber-icon/barber-icon-9.jpg' },
		{ id: 6, title: 'Card 4', image: 'https://icon-library.com/images/barber-icon/barber-icon-12.jpg' },
		{ id: 7, title: 'Card 4', image: 'https://icon-library.com/images/barber-icon/barber-icon-13.jpg' },
		{ id: 8, title: 'Card 4', image: 'https://icon-library.com/images/barber-icon/barber-icon-14.jpg' },
	];
	const handlePress = (card: any) => {
		setSelectedBarber(card);

	};

	return (
		<View className=''>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingRight: 16 }}
			>
				{cards.map(card => (
					<TouchableOpacity
						key={card.id}
						onPress={() => handlePress(card)}
						className='mr-3  bg-white rounded-lg shadow-md overflow-hidden w-64 text-center justify-center items-center'
						style={{
							width: 150,
							height: 200,
							borderRadius: 10,
							borderWidth: 0,
							borderColor: 'gray',
							overflow: 'hidden',
							position: 'relative',
							margin: 5,
							marginTop: 10,
							backgroundColor: selectedBarber?.id === card.id ? '#FA7235' : 'white',
						}}
					>
						<Image
						
							source={{ uri: card.image }}
							className='h-20 w-20'
							resizeMode='cover'
						/>
						<Text
							className='text-lg font-semibold  font-bold'
							style={{
								marginTop: 5,
								color: selectedBarber?.id === card.id ? 'white' : '#FA7235',
							}}
						>
							{card.title}
						</Text>
						<Text className='text-lg font-semibold '>$30.00</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
};

export default HorizontalScrollCards;
