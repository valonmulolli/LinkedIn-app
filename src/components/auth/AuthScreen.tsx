import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const AuthScreen = () => {
	const [activeTab, setActiveTab] = useState('sign-in');
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Text
					onPress={() => setActiveTab('sign-in')}
					style={{
						fontWeight: '600',
						fontSize: 20,
						color: activeTab === 'sign-in' ? '#0099ff' : 'gray',
					}}
				>
					Sign in
				</Text>
				<Text
					onPress={() => setActiveTab('sign-up')}
					style={{
						fontWeight: '600',
						fontSize: 20,
						color: activeTab === 'sign-up' ? '#0099ff' : 'gray',
					}}
				>
					Sign up
				</Text>
			</View>
			{activeTab === 'sign-in' && <SignInScreen />}
			{activeTab === 'sign-up' && <SignUpScreen />}
		</View>
	);
};

export default AuthScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});
