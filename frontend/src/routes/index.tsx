/* eslint-disable react-refresh/only-export-components */
import Sales from '@/pages/sales'
import { lazy } from 'react'
import { Navigate, RouteProps } from 'react-router-dom'

//Dashboards
const Dashboard = lazy(() => import('@/pages/dashboard'))
const Affiliates = lazy(() => import('@/pages/affiliates'))

const Login = lazy(() => import('@/pages/authentication/Login'))
const Error404 = lazy(() => import('@/pages/authentication/Error404'))
const Error500 = lazy(() => import('@/pages/authentication/Error500'))

export type RoutesProps = {
	path: RouteProps['path']
	name: string
	element: RouteProps['element']
}

const dashboardRoutes: RoutesProps[] = [
	{
		path: '/',
		name: 'Home Page',
		element: <Navigate to="/dashboard" />,
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		element: <Dashboard />,
	},
]

const affiliateRoutes: RoutesProps[] = [
	{
		path: '/afiliados',
		name: 'Sales',
		element: <Affiliates />,
	},
]

const salesRoutes: RoutesProps[] = [
	{
		path: '/vendas',
		name: 'Sales',
		element: <Sales />
	},
]

const authRoutes: RoutesProps[] = [
	{
		path: '/auth/login',
		name: 'Login',
		element: <Login />,
	},
	{
		path: '/auth/auth-404',
		name: '404 Error',
		element: <Error404 />,
	},
	{
		path: '/auth/auth-500',
		name: '500 Error',
		element: <Error500 />,
	},
	{
		path: '*',
		name: '404 Error',
		element: <Error404 />,
	},
]

const allAdminRoutes = [
	...dashboardRoutes,
	...affiliateRoutes,
	...salesRoutes,
]

const allBlankRoutes = [...authRoutes]

export { allAdminRoutes, allBlankRoutes }
