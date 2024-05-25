import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import Statistics from './components/Statistics'
import AudienceOverviewChart from './components/AudienceOverviewChart'
import TrafficReports from './components/TrafficReports'

const Analytics = () => {
	return (
		<>
			<PageBreadcrumb subName="Dashboard" title="Analytics" />
			<Row>
				<Col lg={12}>
					<Statistics />
					<AudienceOverviewChart />
				</Col>
			</Row>
			<Row>
				<Col lg={12}>
					<TrafficReports />
				</Col>
			</Row>
		</>
	)
}

export default Analytics
