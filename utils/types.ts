export interface titleType {
	params: {
		name: string
	}
}

export interface preSearchType {
	preSearch: string | undefined | string[]
}

export interface animeProps {
	data: {
		url: string
		images: {
			webp: {
				image_url: string
			}
		}
		title: string
		score: number
		synopsis: string
	}
	visible: boolean,
}

//interface animeArrayProps extends Array<animeProps>{}

export interface animeArrayProps {
	data: animeProps[]
}

export interface dataProps {
	url: string
	images: {
		webp: {
			image_url: string
		}
	}
	title: string
	score: number
	synopsis: string
}
