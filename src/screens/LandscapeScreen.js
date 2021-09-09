import React, { useState, useRef, useCallback, useEffect } from 'react'
import { Animated, Image, StyleSheet, Text, View, Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

let width, height;


if (windowWidth < windowHeight) {
	width = windowHeight;
	height = windowWidth;
} else {
	width = windowWidth;
	height = windowHeight;
}

const LandscapeScreen = ({
	items,
	selectedIndex,
	setSelectedIndex,
	orientation,
}) => {

	const flatRef = useRef(new Animated.Value(0));
	const scrollX = flatRef.current;

	const handleVieweableItemsChanged = useCallback(({ _, changed }) => {
		setSelectedIndex(changed[0].index);
	}, []);

	useEffect(() => {
		console.log('orientation: ', orientation)
	}, [orientation])

	return (
		<View style={{ flex: 1, }} >
			<View style={[StyleSheet.absoluteFillObject, { flex: 1, }]}>
				{items.map((item, index) => {

					const inputRange = [
						(index - 1) * width,
						index * width,
						(index + 1) * width,
					];

					const opacity = scrollX.interpolate({
						inputRange,
						outputRange: [0, 1, 0],
					})

					return <Animated.Image
						key={item.id}
						source={item.imgSrc}
						style={[StyleSheet.absoluteFillObject, { width, height }, { opacity }]}
						blurRadius={50}
					/>
				})}
			</View>
			<Animated.FlatList
				onScroll={Animated.event([
					{ nativeEvent: { contentOffset: { x: scrollX } } }
				],
					{ useNativeDriver: true }
				)}
				data={items}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				keyExtractor={(_, index) => index.toString()}
				renderItem={item => {
					return (
						<View style={styles.imgContainer}>
							<Image source={item.item.imgSrc} style={styles.img} />
							<Text style={styles.title}>{item.item.title}</Text>
							<Text style={styles.subtitle}>{item.item.performer}</Text>
						</View>
					)
				}}
				initialScrollIndex={selectedIndex}
				viewabilityConfig={{
					itemVisiblePercentThreshold: 50,
				}}
				onViewableItemsChanged={handleVieweableItemsChanged}
			/>
		</View>
	)
}

export default LandscapeScreen


const styles = StyleSheet.create({
	img: {
		width: width * 0.3,
		height: width * 0.3,
		resizeMode: 'cover',
		borderRadius: width * 0.03,
	},
	imgContainer: {
		width,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 18,
		marginTop: 16,
	},
	subtitle: {
		color: 'white',
		marginTop: 8,
	}
})