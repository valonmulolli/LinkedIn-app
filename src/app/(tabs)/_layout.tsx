import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '@/constants/Colors';
import MyNetwork from './network';
import Post from './post';
import Notifications from './notifications';
import Profile from './profile'


function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#191919',
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home Feed',
					tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
					headerRight: () => (
						<Link href='/search' asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name='search'
										size={24}
										color='gray'
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name='network'
				options={{
					title: 'My Network',
					tabBarIcon: ({ color }) => <TabBarIcon name='group' color={color} />,
				}}
			/>
			<Tabs.Screen
				name='post'
				options={{
					title: 'Post',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='plus-square' color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='notifications'
				options={{
					title: 'Notifications',
					tabBarIcon: ({ color }) => <TabBarIcon name='bell' color={color} />,
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'Profile',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='user' color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
