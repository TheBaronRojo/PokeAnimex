import axios from 'axios'
import { animeProps } from '@/utils/types'

export async function searchTitle(title?: string): Promise<any> {
	try {
		if (
			title === '' ||
			title === undefined ||
			title === null ||
			title.length <= 0
		) {
			return {
				error: true,
				errorMessage: 'Please enter a title',
				result: [],
			}
		} else {
			let band: boolean = true
			let data: Array<animeProps> = []
			let lastPage: number = 1

			while (band) {
				const {
					data: { data: results, pagination },
				} = await axios.get(`https://api.jikan.moe/v4/anime`, {
					params: {
						q: title,
						page: lastPage,
					},
				})
				data.push(...results)
				if (!pagination.has_next_page) {
					band = false
				} else {
					lastPage += 1
				}
			}

			return {
				error: false,
				errorMessage: '',
				result: {
					data,
				},
			}
		}
	} catch (err: any) {
		return {
			error: true,
			errorMessage: err.message,
			result: [],
		}
	}
}

export function scoreAverage(score: number): string {
	try {
		if (score >= 1 && score <= 4) {
			return 'I do not recommend it.'
		} else if (score > 4 && score <= 7) {
			return 'You may have fun.'
		} else if (score > 7) {
			return 'Great, this is one of the best anime.'
		} else {
			return 'No score.'
		}
	} catch (err) {
		return 'Invalid score.'
	}
}
