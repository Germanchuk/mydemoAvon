import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'




const ListItem = ({
	title,
	performer,
	imgSrc,
	index,
	setSelectedIndex,
	selected,
}) => {


	return (
		<TouchableOpacity
			style={[styles.container, { backgroundColor: selected ? '#d3d3d3' : null }]}
			onPress={() => setSelectedIndex(index)}
		>
			<View style={styles.imgContainer}>

				<Image source={imgSrc} style={styles.img} />

			</View>
			<View style={styles.info}>
				<Text style={styles.title}>
					{title}
				</Text>
				<Text>
					{performer}
				</Text>
			</View>
		</TouchableOpacity >
	)
}

export default ListItem


const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		paddingHorizontal: 16,
	},
	imgContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 16,
		paddingRight: 16,
	},
	info: {
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#d3d3d3',
		flex: 1,
		display: 'flex',
		justifyContent: 'space-between',
	},
	img: {
		width: 50,
		height: 50,
		borderRadius: 10,
	},
	title: {
		fontSize: 16,
	}
})