import {
	CalendarRange,
	KanbanSquare,
	LayoutDashboard,
	Settings,
	Timer
} from 'lucide-react'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		icon: LayoutDashboard,
		link: DASHBOARD_PAGES.HOME,
		name: 'Статистика'
	},
	{
		icon: KanbanSquare,
		link: DASHBOARD_PAGES.TASKS,
		name: 'Задачи'
	},
	{
		icon: CalendarRange,
		link: DASHBOARD_PAGES.TIME_BLOCKING,
		name: 'Расписание'
	},
	{
		icon: Settings,
		link: DASHBOARD_PAGES.SETTINGS,
		name: 'Настройки'
	}
]
