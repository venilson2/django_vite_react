import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { FiChevronDown } from 'react-icons/fi'
import Dropdown from './Dropdown'

interface PageTitleProps {
	title: string
}

const menuItems = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

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
								{menuItems && (
									<Col xs="auto">
										<Dropdown label={"Maio"} menuItems={menuItems} />
									</Col>
								)}
							</div>
						</Row>
					</div>
				</Col>
			</Row>
		</>
	)
}

export default WelcomeHeader
