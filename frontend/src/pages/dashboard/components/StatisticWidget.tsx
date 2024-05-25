import { type StatisticType } from '../types'
import { Card, CardBody, Col, Row } from 'react-bootstrap'

const StatisticWidget = ({
	change,
	state,
	subTitle,
	title,
	variant,
	icon,
	backgroundColor
}: StatisticType) => {
	const Icon = icon
	return (
		<Card className="report-card">
			<CardBody>
				<Row className="d-flex justify-content-center">
					<Col>
						<p className="text-dark mb-0 fw-semibold h5">{title}</p>
						<h2 className="my-2">{state}</h2>
						<p className="mb-0 text-truncate text-muted">
							<span className={`fully-sense-text-${variant} fw-bold h5`}>
								{variant == 'danger' ? (
									<i className="mdi mdi-trending-down" />
								) : (
									<i className="mdi mdi-trending-up" />
								)}
								{change}
							</span>{' '}
							{subTitle}
						</p>
					</Col>
					<div className="col-auto align-self-center">
						<div className={`report-main-icon ${backgroundColor}`}>
							<Icon className="align-self-center text-muted icon-sm" />
						</div>
					</div>
				</Row>
			</CardBody>
		</Card>
	)
}

export default StatisticWidget
