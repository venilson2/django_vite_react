import { Col, Row } from 'react-bootstrap'
import Statistics from './components/Statistics'
import AudienceOverviewChart from './components/AudienceOverviewChart'
import TrafficReports from './components/TrafficReports'
import WelcomeHeader from '@/components/WelcomeHeader'

const Analytics = () => {
	return (
		<>
			<WelcomeHeader title="Fulano" />
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
