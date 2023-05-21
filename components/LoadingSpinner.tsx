import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { GlobalColors } from '../services/styles/styles';
const LoadingSpinner = (): JSX.Element => {
	return (
		<View style={styles.spinnerContainer}>
			<Text style={styles.loadingText}>
				We're loading your favourite comics!{' '}
			</Text>
			<ActivityIndicator size='large' color={GlobalColors.colors.cta} />
		</View>
	);
};

export default LoadingSpinner;

const styles = StyleSheet.create({
	spinnerContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: GlobalColors.colors.white50,
		marginVertical: 12,
	},
	loadingText: {
		marginVertical: 12,
	},
});
