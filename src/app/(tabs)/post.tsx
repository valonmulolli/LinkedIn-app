import { StyleSheet, TextInput, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useNavigation, useRouter } from 'expo-router';
import { useLayoutEffect, useState } from 'react';

export default function Post() {
	const navigation = useNavigation();
  const router = useRouter()
  const [text, setText] = useState('');

	const onPost = () => {
		console.warn('Posting: ', text);

    router.push('/(tabs)/')
    setText('')
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Pressable onPress={onPost} style={styles.postButton}>
					<Text style={styles.postButtonText}>Post</Text>
				</Pressable>
			),
		});
	}, [onPost]);

	return (
		<View style={styles.container}>
			<TextInput
        value={text}
        onChangeText={setText}
				placeholder='What do you want to talk about'
				style={styles.input}
				multiline={true}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
	},
	input: {
		fontSize: 18,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
  postButton: {
    backgroundColor: 'gray',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginRight: 10
  },
  postButtonText: {
    color: 'white',
		fontWeight: '600',
  }
});
