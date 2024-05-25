import { lazy } from 'react'
import { Navigate, RouteProps } from 'react-router-dom'

//Dashboards
const Dashboard = lazy(() => import('@/pages/dashboard'))
const SalesAffiliate = lazy(() => import('@/pages/affiliate/Sales'))

const Login = lazy(() => import('@/pages/authentication/Login'))
const Error404 = lazy(() => import('@/pages/authentication/Error404'))
const Error500 = lazy(() => import('@/pages/authentication/Error500'))

const Apex = lazy(() => import('@/pages/ui-kit/charts/Apex'))
const ChartJs = lazy(() => import('@/pages/ui-kit/charts/ChartJs'))
const BasicTables = lazy(() => import('@/pages/ui-kit/tables/BasicTables'))
const DataTables = lazy(() => import('@/pages/ui-kit/tables/DataTables'))
const FeatherIcons = lazy(() => import('@/pages/ui-kit/icons/FeatherIcons'))
const FontAwesomeIcons = lazy(
	() => import('@/pages/ui-kit/icons/FontAwesomeIcons')
)
const ThemifyIcons = lazy(() => import('@/pages/ui-kit/icons/ThemifyIcons'))
const TypIcons = lazy(() => import('@/pages/ui-kit/icons/TypIcons'))
const DripIcon = lazy(() => import('@/pages/ui-kit/icons/DripIcons'))
const MaterialDesignIcons = lazy(
	() => import('@/pages/ui-kit/icons/MaterialDesignIcons')
)

const Widgets = lazy(() => import('@/pages/widgets'))

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
		path: '/afiliados/vendas',
		name: 'Sales',
		element: <SalesAffiliate />,
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



const chartsRoutes: RoutesProps[] = [
	{
		path: '/ui/charts/apex',
		name: 'Apex Charts',
		element: <Apex />,
	},
	{
		path: '/ui/charts/chartjs',
		name: 'Chartjs',
		element: <ChartJs />,
	},
]

const tablesRoutes: RoutesProps[] = [
	{
		path: '/ui/tables/basic',
		name: 'Basic Tables',
		element: <BasicTables />,
	},
	{
		path: '/ui/tables/datatables',
		name: 'Data Tables',
		element: <DataTables />,
	},
]

const iconsRoutes: RoutesProps[] = [
	{
		path: '/ui/icons/dripicon',
		name: 'DripIcon',
		element: <DripIcon />,
	},
	{
		path: '/ui/icons/feather',
		name: 'Feather',
		element: <FeatherIcons />,
	},
	{
		path: '/ui/icons/fa',
		name: 'Font Awesome',
		element: <FontAwesomeIcons />,
	},
	{
		path: '/ui/icons/md',
		name: 'Material Design',
		element: <MaterialDesignIcons />,
	},
	{
		path: '/ui/icons/themify',
		name: 'Themify',
		element: <ThemifyIcons />,
	},
	{
		path: '/ui/icons/typicons',
		name: 'TypIcons',
		element: <TypIcons />,
	},
]

const widgetsRoutes: RoutesProps[] = [
	{
		path: '/widgets',
		name: 'Widgets',
		element: <Widgets />,
	},
]

const allUiRoutes = [
	...chartsRoutes,
	...tablesRoutes,
	...iconsRoutes,
	...widgetsRoutes,
]
const allAdminRoutes = [
	...dashboardRoutes,
	...affiliateRoutes,
	...allUiRoutes,
]

const allBlankRoutes = [...authRoutes]

export { allAdminRoutes, allBlankRoutes }
