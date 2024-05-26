import type { IconType } from 'react-icons'
import {
	FiGrid,
	FiHome,
	FiDollarSign
} from 'react-icons/fi'

export type MenuItemType = {
	key: string
	label: string
	isTitle?: boolean
	icon?: IconType
	url?: string
	parentKey?: string
	target?: string
	badge?: {
		variant: string
		text: string
	}
	children?: MenuItemType[]
}

export const VERTICAL_MENU_ITEMS: MenuItemType[] = [
	{
		key: 'dashboard',
		label: 'Visão Geral',
		isTitle: false,
		url: '/dashboard',
		icon: FiHome,
	},
	{
		key: 'affiliates',
		label: 'Afiliados',
		isTitle: false,
		url: '/afiliados',
		icon: FiGrid,
	},
	{
		key: 'sales',
		label: 'Vendas',
		isTitle: false,
		url: '/vendas',
		icon: FiDollarSign,
	}
]
