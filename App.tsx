import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from 'react-query';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { getLatestComicNumber } from './api/xkcdApi';
const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  
	const [latestComicNumber, setLatestComicNumber] = useState<number | null>(
		null
	);

	useEffect(() => {
		getLatestComicNumber().then((num) => {
			setLatestComicNumber(num);
		});
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			{latestComicNumber && (
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name='Home'
							component={HomeScreen}
							initialParams={{ latestComicNumber: latestComicNumber }}
							options={{
								title: 'Explore Your Comics World!',
								headerStyle: {
									backgroundColor: '#CAC089',
								},
							}}
						/>
						<Stack.Screen name='Details' component={DetailsScreen} options={{
								title: 'Details',
								headerStyle: {
									backgroundColor: '#CAC089',
								},
							}}/>
					</Stack.Navigator>
				</NavigationContainer>
			)}
		</QueryClientProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
