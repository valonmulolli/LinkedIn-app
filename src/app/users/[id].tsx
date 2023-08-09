import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Text, View, Pressable, Image, StyleSheet,ScrollView } from 'react-native';
import userJson from '../../../assets/data/user.json';
import { useLayoutEffect, useState } from 'react';
import { User } from '@/types';
import ExperienceListitem from './../../components/ExperienceListitem';

export default function UserProfile() {
	const [user, setUser] = useState<User>(userJson);

	const { id } = useLocalSearchParams();
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({ title: user.name });
	}, [user?.name]);

	const onConnect = () => {
		console.warn('Connect');
	};

	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			{/* Header */}
			<View style={styles.header}>
				{/* BG Image */}
				<Image source={{ uri: user.bgImage }} style={styles.bgImage} />

				<View style={{ padding: 10, paddingTop: 0 }}>
					{/* Profile Image */}
					<Image source={{ uri: user.image }} style={styles.image} />
					{/* Name and Position */}
					<Text style={styles.name}>{user.name}</Text>
					<Text>{user.position}</Text>

					{/* Connect button */}
					<Pressable onPress={onConnect} style={styles.button}>
						<Text style={styles.buttonText}>Connect</Text>
					</Pressable>
				</View>
			</View>

			{/* About */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>About</Text>
				<Text style={styles.paragraph}>{user.about}</Text>
			</View>

			{/* Experience */}
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Experience</Text>
				{user.experience?.map((experience) => (
					<ExperienceListitem experience={experience}key={experience.id}/>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {},
	header: {
		backgroundColor: 'white',
	},
	bgImage: {
		width: '100%',
		aspectRatio: 3 / 2,
		marginBottom: -60,
	},
	image: {
		width: 120,
		aspectRatio: 1,
		borderRadius: 60,
		borderWidth: 3,
		borderColor: 'white',
	},
	name: {
		fontSize: 24,
		fontWeight: '500',
	},
	button: {
		backgroundColor: '#0A66C2',
		padding: 10,
		alignItems: 'center',
		borderRadius: 50,
		marginVertical: 10,
	},
	buttonText: {
		color: 'white',
		fontWeight: '600',
		padding: 5,
	},
	section: {
		backgroundColor: 'white',
		padding: 10,
		marginVertical: 10,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: '500',
		marginVertical: 5,
	},
	paragraph: {
		lineHeight: 20,
	},
});
