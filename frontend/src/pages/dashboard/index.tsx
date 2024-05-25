import { Col, Row } from 'react-bootstrap'
import Statistics from './components/Statistics'
import AudienceOverviewChart from './components/AudienceOverviewChart'
import TrafficReports from './components/TrafficReports'
import WelcomeHeader from '@/components/WelcomeHeader'

const Dashboard = () => (
	<>
		<WelcomeHeader title="Admin" />
		<Row>
			<Col>
				<Statistics />
				<AudienceOverviewChart />
			</Col>
		</Row>
		<Row>
			<Col>
				<TrafficReports />
			</Col>
		</Row>
	</>
)

export default Dashboard
