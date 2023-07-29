import axios from 'axios'

export async function searchTitle(title?: string): Promise<any> {
	try {
		if (title === '') {
			return {
				error: true,
				errorMessage: 'Please enter a title',
				result: [],
			}
		} else {
			const {
				data: { data, pagination },
			} = await axios.get(`https://api.jikan.moe/v4/anime`, {
				params: {
					q: title,
				},
			})
			return {
				error: false,
				errorMessage: '',
				result: {
                    data,
                    pagination,
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

export function scoreAverage(score: number) : string
{
	try
	{
		if(score >= 1 && score <= 4)
		{
			return "I do not recommend it."
		}
		else if(score > 4 && score <= 7)
		{
			return "You may have fun."
		}
		else if(score > 7)
		{
			return "Great, this is one of the best anime."
		}
		else
		{
			return "Invalid score."
		}
	}
	catch(err)
	{
		return "Invalid score."
	}
}
