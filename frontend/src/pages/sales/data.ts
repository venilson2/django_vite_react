import type {
	WidgetType,
	EarningReportType,
	PopularProductsType,
	CustomersDetailsType,
} from './types'

import product1 from '@/assets/images/products/01.png'
import product2 from '@/assets/images/products/02.png'
import product4 from '@/assets/images/products/04.png'
import product5 from '@/assets/images/products/img-5.png'

const WidgetsData: WidgetType[] = [
	{
		title: 'WEEKLY SALES',
		count: '$24,500',
	},
	{
		title: 'ORDERS PLACED',
		count: '520',
	},
	{
		title: 'CONVERSION RATE',
		count: '82.8%',
	},
	{
		title: 'AVG. VALUE',
		count: '$80.5',
	},
]

const EarningReportData: EarningReportType[] = [
	{
		date: '01 January',
		itemCount: 50,
		text: '-$70',
		earnings: '$15,000',
	},
	{
		date: '02 January',
		itemCount: 25,
		text: '-',
		earnings: '$9,500',
	},
	{
		date: '03 January',
		itemCount: 65,
		text: '-$115',
		earnings: '$35,000',
	},
	{
		date: '04 January',
		itemCount: 20,
		text: '-',
		earnings: '$8,500',
	},
	{
		date: '05 January',
		itemCount: 40,
		text: '-$60',
		earnings: '$12,000',
	},
	{
		date: '06 January',
		itemCount: 45,
		text: '-$65',
		earnings: '$13,500',
	},
]

const PopularProductsData: PopularProductsType[] = [
	{
		product: {
			productImage: product1,
			productName: 'Dastone Camera EDM 5D(White)',
			productID: 'A3652',
		},

		price: {
			originalPrice: 70,
			discountPrice: 50,
		},
		sell: {
			originalPrice: 550,
			sellPrice: 450,
		},
		status: 'Stock',
	},
	{
		product: {
			productImage: product2,
			productName: 'Dastone Shoes Max-Zon',
			productID: 'A5002',
		},

		price: {
			originalPrice: 150,
			discountPrice: 99,
		},
		sell: {
			originalPrice: 900,
			sellPrice: 750,
		},
		status: 'Out of Stock',
	},
	{
		product: {
			productImage: product4,
			productName: 'Dastone Mask N99 [ISI]',
			productID: 'A6598',
		},

		price: {
			originalPrice: 250,
			discountPrice: 199,
		},
		sell: {
			originalPrice: 280,
			sellPrice: 220,
		},
		status: 'Stock',
	},
	{
		product: {
			productImage: product5,
			productName: 'Dastone Bag (Blue)',
			productID: 'A9547',
		},

		price: {
			originalPrice: 49,
			discountPrice: 40,
		},
		sell: {
			originalPrice: 1000,
			sellPrice: 500,
		},
		status: 'Out of Stock',
	},
]

const customersDetails: CustomersDetailsType[] = [
	{
		id: 1,
		name: 'Unity Pugh',
		ext: '9958',
		city: 'Curicó',
		startDate: '2005/02/11',
		completion: '37%',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 2,
		name: 'Theodore Duran',
		ext: '8971',
		city: 'Dhanbad',
		startDate: '1999/04/07',
		completion: '97%',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 3,
		name: 'Kylie Bishop',
		ext: '3147',
		city: 'Norman',
		startDate: '2005/09/08',
		completion: '63%',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 4,
		name: 'Willow Gilliam',
		ext: '3497',
		city: 'Amqui',
		startDate: '2009/29/11',
		completion: '30%',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 5,
		name: 'Blossom Dickerson',
		ext: '5018',
		city: 'Kempten',
		startDate: '2006/11/09',
		completion: '17%',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 6,
		name: 'Elliott Snyder',
		ext: '3925',
		city: 'Enines',
		startDate: '2006/03/08',
		completion: '57%',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 7,
		name: 'Castor Pugh',
		ext: '9488',
		city: 'Neath',
		startDate: '2014/23/12',
		completion: '93%',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 8,
		name: 'Pearl Carlson',
		ext: '6231',
		city: 'Cobourg',
		startDate: '2014/31/08',
		completion: '100%',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 9,
		name: 'Deirdre Bridges',
		ext: '1579',
		city: 'Eberswalde-Finow',
		startDate: '2014/26/08',
		completion: '44%',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 10,
		name: 'Daniel Baldwin',
		ext: '6095',
		city: 'Moircy',
		startDate: '2000/11/01',
		completion: '33%',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
	{
		id: 11,
		name: 'Pearl Carlson',
		ext: '6231',
		city: 'Cobourg',
		startDate: '2014/31/08',
		completion: '100%',
		subRows: [
			{
				id: 51,
				age: 23,
				name: 'Bruno',
				company: 'Magmina',
				phone: '+1 (813) 583-2089',
			},
		],
	},
]

export { WidgetsData, EarningReportData, PopularProductsData, customersDetails }
