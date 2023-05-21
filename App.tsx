import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from 'react-query';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { getLatestComicNumber } from './api/xkcdApi';
import Comic from './services/models';
import { RootStackParamList } from './services/models';
import { GlobalColors } from './services/styles/styles';


const Stack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

export default function App(): JSX.Element {
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
									backgroundColor: GlobalColors.colors.topBar,
								},
							}}
						/>
						<Stack.Screen
							name='Details'
							component={DetailsScreen}
							options={{
								title: 'Details',
								headerStyle: {
									backgroundColor: GlobalColors.colors.topBar,
								},
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			)}
		</QueryClientProvider>
	);
}
