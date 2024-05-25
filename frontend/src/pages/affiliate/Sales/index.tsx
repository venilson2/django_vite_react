import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import RevenuStatus from './components/RevenuStatus'
import Widget from './components/Widget'
import ChartWidget from './components/ChartWidget'
import EarrnigReportChart from './components/EarrnigReportChart'
import EarningReports from './components/EarningReports'
import PopulerProducts from './components/PopulerProducts'
import DataTables from '@/pages/ui-kit/tables/DataTables'

const Sales = () => {
	return (
		<>
			<PageBreadcrumb subName="Afiliados" title="Vendas" />
			<Row>
				<Col lg={9}>
					<RevenuStatus />
					<Widget />
				</Col>
				<Col lg={3}>
					<ChartWidget />
					<EarrnigReportChart />
				</Col>
			</Row>

			<Row>
				<Col lg={6}>
					<EarningReports />
				</Col>
				<Col lg={6}>
					<PopulerProducts />
				</Col>
			</Row>
			<Row>
				<Col lg={12}>
					<DataTables />
				</Col>
			</Row>
		</>
	)
}

export default Sales
