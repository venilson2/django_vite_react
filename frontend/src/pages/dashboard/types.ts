import type { IconType } from 'react-icons'

export type StatisticType = {
	title: string
	state: string
	icon: IconType
	change: string
	subTitle: string
	variant: string
	backgroundColor: string
}

export type PageViews = {
	logo: string
	name: string
	subName: string
	view: string
}


export type TrafficReport = {
	channel: string
	session: {
		state: number
		change: number
	}
	prevPeriod: {
		state: number
		change: number
	}
	change: number
	variant: string
}

export type SalesReport = {
	product: string
	location: string
	datetime: string
	value: number
	status: string
}

export type BrowserReport = {
	browser: {
		name: string
		image: string
	}
	session: {
		state: number
		change: number
	}
	bounceRate: number
	Transaction: {
		state: number
		change: number
	}
}
