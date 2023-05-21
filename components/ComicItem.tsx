import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Comic from '../services/models';
import { transformText } from '../utils/transformText';
import { GlobalColors } from '../services/styles/styles';
type ComicItemProps = {
	item: Comic;
};

const ComicItem = ({ item }: ComicItemProps) => {
	const {
		month,
		num,
		link,
		year,
		news,
		safe_title,
		transcript,
		alt,
		img,
		title,
		day,
	} = item;
	const navigation = useNavigation();

	const goToDetailsHandler = () => {
		navigation.navigate('Details', {
			comic: { ...item },
		});
	};
	return (
		<View style={styles.itemContainer}>
			<View style={styles.headingContainer}>
				<Text style={styles.headingText}>{`${title}: ${num}`}</Text>
			</View>
			<View style={[styles.card, styles.cardElevated]}>
				<Image
					source={{
						uri: img,
					}}
					style={styles.cardImage}
					alt={alt}
				/>
			</View>

			<TouchableOpacity style={styles.cardFooter} onPress={goToDetailsHandler}>
				<Text>{`Click for More info ->`}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ComicItem;

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
		height: 180,
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
		height: 120,
		borderWidth: 1.5,
		borderRadius: 12,
		padding: 12,
		marginVertical: 12,
		marginHorizontal: 16,
		backgroundColor: GlobalColors.colors.gold,
	},
	cardTitle: {
		fontWeight: 'bold',
	},
	cardLabel: {},
	cardDescription: {},
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
