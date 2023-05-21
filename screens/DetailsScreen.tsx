import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Comic from '../services/models';
import { GlobalColors } from '../services/styles/styles';

const DetailsScreen = ({ route, navigation }) => {
	const { comic }: { comic: Comic } = route.params;
	const dateText =
		comic.day && comic.month && comic.year
			? `${comic.day}/${comic.month}/${comic.year}`
			: '';

	return (
		<>
			<View style={styles.itemContainer}>
				<View style={styles.headingContainer}>
					<Text
						style={styles.headingText}>{`${comic.title}: ${comic.num}`}</Text>

					<Text style={styles.headingTextDate}>{dateText}</Text>
				</View>
				<View style={[styles.card, styles.cardElevated]}>
					<Image
						source={{
							uri: comic.img,
						}}
						style={styles.cardImage}
						alt={comic.alt}
					/>
				</View>

				<View style={styles.cardBody}>
					<Text style={styles.cardTitle}>
						{comic.safe_title ? comic.safe_title : comic.title}:
					</Text>

					<Text style={styles.cardLabel}>
						{comic.news ? comic.news : 'No news'}
					</Text>
					<Text style={styles.cardLabel}>
						{comic.transcript ? comic.transcript : 'No transcript'}
					</Text>
					{!comic.news && !comic.transcript && (
						<Text style={styles.cardDescription}>{comic.alt}</Text>
					)}
				</View>
			</View>
		</>
	);
};

export default DetailsScreen;

const styles = StyleSheet.create({
	itemContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: GlobalColors.colors.white50,
		borderWidth: 1.5,
		borderRadius: 12,
		paddingVertical: 12,
		marginVertical: 12,
		marginHorizontal: 8,
	},
	headingContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headingText: {
		fontSize: 18,
		fontWeight: 'bold',
		marginHorizontal: 12,
	},
	headingTextDate: {
		fontSize: 16,
	},
	card: {
		width: '90%',
		height: 280,
		borderWidth: 1.5,
		borderRadius: 12,
		marginVertical: 12,
		marginHorizontal: 16,
	},
	cardElevated: {
		backgroundColor: GlobalColors.colors.white50,
		color: GlobalColors.colors.black,
		elevation: 3,
	},
	cardImage: {
		flex: 1,
		resizeMode: 'contain',
	},
	cardBody: {
		width: '90%',
		borderWidth: 1.5,
		borderRadius: 12,
		padding: 16,
		marginVertical: 12,
		marginHorizontal: 16,
		backgroundColor: GlobalColors.colors.gold,
	},
	cardTitle: {
		fontWeight: 'bold',
		fontSize: 22,
	},
	cardLabel: {
		fontWeight: '600',
		fontSize: 18,
		fontStyle: 'italic',
	},
	cardDescription: {
		fontWeight: '600',
		fontSize: 16,
		fontStyle: 'italic',
	},
	cardFooter: {
		width: '90%',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1.5,
		borderRadius: 12,
		padding: 12,
		backgroundColor: GlobalColors.colors.cta,
		marginVertical: 12,
		marginHorizontal: 16,
	},
});
