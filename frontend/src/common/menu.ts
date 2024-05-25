import type { IconType } from 'react-icons'
import {
	FiBox,
	FiFilePlus,
	FiGrid,
	FiHome,
	FiLayers,
	FiLock,
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
		icon: FiGrid,
		label: 'Afiliados',
		isTitle: false,
		children: [
			{
				key: 'sales',
				label: 'Vendas',
				url: '/afiliados/vendas',
			}
		],
	}
]
