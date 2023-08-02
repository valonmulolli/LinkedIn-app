import { View, Text } from 'react-native';
import posts from '../../../assets/data/posts.json';
import PostListItem from '@/components/PostListItem';
import { ScrollView } from 'react-native-gesture-handler';
import { useLocalSearchParams } from 'expo-router';

export default function PostDetailsScreen() {
	const { id } = useLocalSearchParams();

	const post = posts.find((post) => post.id === id);

	if (!post) {
		return (
			<View>
				<Text>Post not found</Text>
			</View>
		);
	}

	return (
		<ScrollView>
			<PostListItem post={post} />
		</ScrollView>
	);
}
