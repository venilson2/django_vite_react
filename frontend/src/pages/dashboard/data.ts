import { FiActivity, FiBriefcase, FiClock, FiUsers } from 'react-icons/fi'

import logo4 from '@/assets/images/small/atom.svg'
import logo3 from '@/assets/images/small/blocks.svg'
import logo2 from '@/assets/images/small/cobweb.svg'
import logo1 from '@/assets/images/small/rgb.svg'

import browser1 from '@/assets/images/browser_logo/chrome.png'
import browser3 from '@/assets/images/browser_logo/in-explorer.png'
import browser2 from '@/assets/images/browser_logo/micro-edge.png'
import browser4 from '@/assets/images/browser_logo/opera.png'
import type {
	BrowserReport,
	PageViews,
	SalesReport,
	StatisticType,
	TrafficReport,
} from './types'

const statisticsData: StatisticType[] = [
	{
		title: 'Inscrições',
		state: '24',
		icon: FiUsers,
		subTitle: 'Crescimento',
		change: '8.5',
		variant: 'success',
		backgroundColor: 'fully-sense-bg-orange-light',
	},
	{
		title: 'Afiliados',
		state: '20',
		icon: FiBriefcase,
		subTitle: 'Realizou uma ou mais vendas',
		change: '1.5',
		variant: 'success',
		backgroundColor: 'fully-sense-bg-neutral-4',
	},
	{
		title: 'Vendas',
		state: 'R$2400',
		icon: FiActivity,
		subTitle: 'Total: 1 pedido(s)',
		change: '35',
		variant: 'danger',
		backgroundColor: 'fully-sense-bg-neutral-1',
	},
	{
		title: 'Comissões',
		state: 'R$85000',
		icon: FiClock,
		subTitle: '',
		change: 'Ver Detalhes',
		variant: 'success',
		backgroundColor: 'fully-sense-bg-neutral-2',
	},
]

const pageViews: PageViews[] = [
	{
		name: 'Dastone - Admin Dashboard',
		subName: 'analytic-index.html',
		logo: logo1,
		view: '4.3k',
	},
	{
		name: 'Metrica Simple- Admin Dashboard',
		subName: 'sales-index.html',
		logo: logo2,
		view: '4.3k',
	},
	{
		name: 'Crovex - Admin Dashboard',
		subName: 'helpdesk-index.html',
		logo: logo3,
		view: '2.9k',
	},
	{
		name: 'Annex - Admin Dashboard',
		subName: 'calendar.html',
		logo: logo4,
		view: '1.6k',
	},
]

const trafficReports: TrafficReport[] = [
	{
		channel: 'Organic search',
		session: {
			state: 10853,
			change: 52,
		},
		prevPeriod: {
			state: 566,
			change: 92,
		},
		change: 52.8,
		variant: 'success',
	},
]

const salesReports: SalesReport[] = [
    {
        product: "Laptop",
        location: "São Paulo",
        datetime: "2024-05-01 10:00:00",
        value: 2500.00,
        status: "Completed"
    },
    {
        product: "Smartphone",
        location: "Rio de Janeiro",
        datetime: "2024-05-02 11:30:00",
        value: 1200.50,
        status: "Pending"
    },
    {
        product: "Headphones",
        location: "Belo Horizonte",
        datetime: "2024-05-03 14:00:00",
        value: 299.99,
        status: "Shipped"
    },
    {
        product: "Monitor",
        location: "Porto Alegre",
        datetime: "2024-05-04 09:15:00",
        value: 899.99,
        status: "Delivered"
    }
];

export { pageViews, statisticsData, trafficReports, salesReports }
