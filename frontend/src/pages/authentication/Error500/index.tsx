import { Card, CardBody, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PageMetaData } from '@/components'
import AuthLayout from '../AuthLayout'

const Error500 = () => {
	return (
		<AuthLayout>
			<PageMetaData title="Error 500" />
			<Card>
				<CardBody className="p-0 auth-header-box">
					<div className="text-center p-3">
						<Link to="/" className="logo logo-admin">
							<Image
								src={"/static/images/logo-sm-dark.png"}
								height="50"
								alt="logo"
								className="auth-logo"
							/>
						</Link>
						<h4 className="mt-3 mb-1 fw-semibold text-white font-18">
							Ops! Desculpe, a página não foi encontrada
						</h4>
						<p className="text-muted  mb-0">De volta ao painel do Fully Sense.</p>
					</div>
				</CardBody>
				<CardBody>
					<div className="ex-page-content text-center">
						<Image src={"/static/images/error.svg"} alt="0" className="" height="170" />
						<h1 className="mt-5 mb-4">500!</h1>
						<h5 className="font-16 text-muted mb-5">Somthing went wrong</h5>
					</div>
					<Link
						className="btn btn-primary w-100 waves-effect waves-light"
						to="/"
					>
						Voltar ao painel <i className="fas fa-redo ms-1"></i>
					</Link>
				</CardBody>
				<CardBody className="bg-light-alt text-center">
					<span className="text-muted d-none d-sm-inline-block">
						Fully Sense © {new Date().getFullYear()}
					</span>
				</CardBody>
			</Card>
		</AuthLayout>
	)
}

export default Error500
