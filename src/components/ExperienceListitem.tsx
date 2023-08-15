import { Experience } from '@/types';
import { View, Text, Image, StyleSheet } from 'react-native';

type ExperienceListitemProps = {
	experience: Experience;
};

export default function ExperienceListitem({
	experience,
}: ExperienceListitemProps) {
	return (
		<View style={styles.container}>
			<Image style={styles.Image} source={{ uri: experience.companyimage }} />
			<View>
				<Text style={styles.title}>{experience.title}</Text>
				<Text>{experience.companyname}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 5,
		marginBottom: 10,
		paddingBottom: 10,
		borderBottomWidth: 0.5,
		borderColor: 'lightgrey',
	},
	Image: {
		width: 50,
		aspectRatio: 1,
		marginRight: 5,
	},
	title: {
		fontSize: 16,
		fontWeight: '500',
	},
});
