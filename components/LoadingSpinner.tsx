import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ActivityIndicator,
	FlatList,
	Touchable,
	TouchableOpacity,
} from 'react-native';

import { GlobalColors } from '../services/styles/styles';
const LoadingSpinner = () => {
	return (
		<View style={styles.spinnerContainer}>
			<Text>We're loading your favourite comics! </Text>
			<ActivityIndicator size='large' color={GlobalColors.colors.cta} />
		</View>
	);
};

export default LoadingSpinner;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: GlobalColors.colors.white50,
	},
	spinnerContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: GlobalColors.colors.white50,
		marginVertical: 12,
	},
});
