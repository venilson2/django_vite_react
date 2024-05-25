import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { FiChevronDown } from 'react-icons/fi'

interface PageTitleProps {
	title: string
}

const WelcomeHeader = ({ title }: PageTitleProps) => {
	return (
		<>
			<Row className="row">
				<Col sm={12}>
					<div className="page-title-box">
						<Row>
							<Col>
								<h2 className="">Olá, {title}!</h2>
							</Col>
							<div className="col-auto align-self-center d-flex gap-1">
								<Link
									to="#"
									className="btn btn-sm btn-outline-secondary"
									id="Dash_Date"
								>
									<span className="ay-name" id="Day_Name">
										Maio
									</span>
									&nbsp;
                                    <FiChevronDown className="align-self-center icon-xs ms-1" />
								</Link>
							</div>
						</Row>
					</div>
				</Col>
			</Row>
		</>
	)
}

export default WelcomeHeader
