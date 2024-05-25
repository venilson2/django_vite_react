import { ComponentContainerCard } from '@/components'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const AudienceOverviewChart = () => {
	const chartOpts: ApexOptions = {
		chart: {
			height: 320,
			type: 'area',
			stacked: true,
			toolbar: {
				show: false,
				autoSelected: 'zoom',
			},
		},
		colors: ['#68846b'],
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
			width: [1.5, 1.5],
			dashArray: [0, 4],
			lineCap: 'round',
		},
		grid: {
			padding: {
				left: 0,
				right: 0,
			},
			strokeDashArray: 3,
		},
		markers: {
			size: 0,
			hover: {
				size: 0,
			},
		},
		series: [
			{
				name: 'Vendas',
				data: [0, 45, 10, 75, 35, 94, 40, 115, 30, 105, 65, 110],
			},
		],

		xaxis: {
			categories: [
				'Jan',
				'Fev',
				'Mar',
				'Abr',
				'Mai',
				'Jun',
				'Jul',
				'Aug',
				'Set',
				'Out',
				'Nov',
				'Dec',
			],
			axisBorder: {
				show: true,
			},
			axisTicks: {
				show: true,
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.4,
				opacityTo: 0.3,
				stops: [0, 90, 100],
			},
		},

		tooltip: {
			x: {
				format: 'dd/MM/yy HH:mm',
			},
		},
		legend: {
			position: 'top',
			horizontalAlign: 'right',
		},
	}
	return (
		<ComponentContainerCard
			title="Vendas"
			label="Maio"
			menuItems={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
		>
			<div>
				<ReactApexChart
					height={330}
					options={chartOpts}
					series={chartOpts.series}
					type="area"
				/>
			</div>
		</ComponentContainerCard>
	)
}

export default AudienceOverviewChart
