import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { useInfiniteQuery } from 'react-query';
import ComicItem from '../components/ComicItem';
import Comic from '../services/models';
import { GlobalColors } from '../services/styles/styles';
import { fetchComic } from '../api/xkcdApi';
import LoadingSpinner from '../components/LoadingSpinner';

const HomeScreen = ({ route }) => {
	const { latestComicNumber } = route.params;
	const latestComicNum = Number(latestComicNumber);
	const [start, setStart] = useState(latestComicNum);

	const fetchComics = async ({ pageParam = start }) => {
		try {
			const comics = await fetchComic(pageParam);
			return comics;
		} catch (error) {
			console.error('Error fetching comics:', error);
			throw error;
		}
	};

	const { isLoading, data, fetchNextPage } = useInfiniteQuery({
		queryKey: ['comics'],
		queryFn: fetchComics,
		getNextPageParam: (lastPage, pages) => lastPage.num - 1,
	});

	const getMore = () => {
		const newStart = start - 1;
		fetchNextPage({ pageParam: newStart });
		setStart(newStart);
	};

	const renderItem = React.useCallback(({ item }: { item: Comic }) => {
		return <ComicItem item={item} />;
	}, []);

	return isLoading ? (
		<LoadingSpinner />
	) : (
		<View style={styles.container}>
			<FlatList
				data={data ? data.pages : []}
				keyExtractor={(item) => item.num.toString()}
				renderItem={renderItem}
				onEndReached={getMore}
			/>
		</View>
	);
};

export default HomeScreen;

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
