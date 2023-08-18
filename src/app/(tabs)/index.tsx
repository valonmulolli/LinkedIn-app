import { FlatList, ActivityIndicator, Text } from 'react-native';
import PostListItem from '@/components/PostListItem';
// import posts from '../../../assets/data/posts.json';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const postList = gql`
	query PostListQuery {
		postList {
			id
			content
			image
			profile {
				id
				name
				position
				image
			}
		}
	}
`;

const postPaginatedList = gql`
	query postPaginatedListQuery($first: Int, $after: Int) {
		postPaginatedList(first: $first, after: $after) {
			id
			content
			image
			profile {
				id
				name
				position
				image
			}
		}
	}
`;

export default function HomeFeedScreen() {
	const [hasMore, sethasMore] = useState(true);
	const { loading, error, data, fetchMore, refetch } = useQuery(postPaginatedList, {
		variables: { first: 5 },
	});

	const loadMore = async () => {
		if (!hasMore) {
			return;
		}

		const res = await fetchMore({
			variables: { after: data.postPaginatedList.length },
		});
		if (res.data.postPaginatedList.length === 0) {
			sethasMore(false);
		}
		console.log(res.data.postPaginatedList);
	};

	if (loading) {
		return <ActivityIndicator />;
	}

	if (error) {
		console.log(error);
		return <Text>Not Found</Text>;
	}

	return (
		<FlatList
			data={data.postPaginatedList}
			renderItem={({ item }) => <PostListItem post={item} />}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ gap: 10 }}
			onEndReached={loadMore}

			refreshing={loading}
			onRefresh={refetch}
		/>
	);
}
