import React, { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'
import ListItem from './ListItem'

const PortraitScreen = ({
	selectedIndex,
	setSelectedIndex,
	items,
}) => {
	return (
		<ScrollView>
			{items.map((item, index) => (
				<ListItem
					key={item.id}
					title={item.title}
					performer={item.performer}
					imgSrc={item.imgSrc}
					index={index}
					selected={selectedIndex === index}
					setSelectedIndex={setSelectedIndex}
				/>
			))}
		</ScrollView>
	)
}

export default PortraitScreen
