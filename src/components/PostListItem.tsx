import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { Post } from '../types';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

type PostListItemProps = {
	post: Post;
};

type FooterButtonProp = {
	text: string;
	icon: React.ComponentProps<typeof FontAwesome>['name'];
};
function FooterButton({ text, icon }: FooterButtonProp) {
	return (
		<View style={{ flexDirection: 'row' }}>
			<FontAwesome name={icon} size={24} color='black' />
			<Text style={{ marginLeft: 5, color: 'gray', fontWeight: '500' }}>
				{text}
			</Text>
		</View>
	);
}

export default function PostListItem({ post }: PostListItemProps) {
	return (
		<Link href={`/posts/${post.id}`} asChild>
			<Pressable style={styles.container}>
				{/* Header */}
				<Link href={`/users/${post.profile.id}`} asChild>
					<Pressable style={styles.header}>
						<Image
							style={styles.userImage}
							source={{ uri: post.profile.image }}
						/>
						<View>
							<Text style={styles.userName}>{post.profile.name}</Text>
							<Text>{post.profile.position}</Text>
						</View>
					</Pressable>
				</Link>

				{/* Text content */}
				<Text style={styles.content}>{post.content}</Text>

				{/* Image content */}
				{post.image && (
					<Image source={{ uri: post.image }} style={styles.postImage} />
				)}

				{/* Footer */}
				<View style={styles.footer}>
					<FooterButton text='Likes' icon='thumbs-o-up' />
					<FooterButton text='Comments' icon='comment-o' />
					<FooterButton text='Share' icon='share' />
				</View>
			</Pressable>
		</Link>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		width: '100%',
		maxWidth: 500,
		alignSelf: 'center',
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
	userName: {
		fontWeight: 'bold',
		fontSize: 16,
		marginBottom: 5,
	},
	userImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 10,
	},
	content: {
		margin: 10,
		marginTop: 10,
	},
	postImage: {
		width: '100%',
		aspectRatio: 1,
	},
	footer: {
		flexDirection: 'row',
		paddingVertical: 10,
		justifyContent: 'space-around',
		borderTopWidth: 0.5,
		borderColor: 'lightgray',
	},
});
