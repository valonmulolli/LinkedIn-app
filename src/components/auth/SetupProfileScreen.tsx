import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { gql, useMutation } from '@apollo/client';

import { useUserContext } from '@/context/UserContext';

const createProfileMutation = gql`
	mutation CreateProfile($about: String, $name: String, $authid: String) {
		insertProfile(about: $about, name: $name, authid: $authid) {
			id
			name
			authid
			about
		}
	}
`;

const SetupProfileScreen = () => {
	const [name, setName] = useState('');
	const [about, setAbout] = useState('');

	const { authUser, reloadDbUser } = useUserContext();

	const [handleMutation, { loading }] = useMutation(createProfileMutation);

	const onSave = async () => {
		try {
			await handleMutation({
				variables: {
					name,
					about,
					authid: authUser.id,
				},
			});
			reloadDbUser()
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View style={styles.container}>
			<Text>Setup Profile</Text>

			<TextInput
				style={styles.input}
				placeholder='Name'
				value={name}
				onChangeText={setName}
			/>

			<TextInput
				style={styles.input}
				placeholder='About'
				multiline
				numberOfLines={3}
				value={about}
				onChangeText={setAbout}
			/>

			<TouchableOpacity style={styles.button} onPress={onSave}>
				<Text style={styles.buttonText}>{loading ? 'Saving...' : 'Save'}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
	},
	input: {
		borderColor: 'gainsboro',
		borderWidth: 1,
		padding: 10,
		width: '100%',
		borderRadius: 10,
		marginVertical: 5,
	},
	button: {
		backgroundColor: '#0099ff',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginVertical: 5,
		width: '100%',
	},
	buttonText: {
		color: 'white',
		fontWeight: '600',
	},
});

export default SetupProfileScreen;
