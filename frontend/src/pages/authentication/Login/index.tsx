import {
	Button,
	Card,
	CardBody,
	Col,
	Image,
	Row,
	TabContainer,
	TabContent,
	TabPane,
} from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import { FormInputPassword, FormTextInput, PageMetaData } from '@/components'
import useLogin from './useLogin'
import AuthLayout from '../AuthLayout'

const Login = () => {
	const { loading, control, login, redirectUrl, isAuthenticated } = useLogin()

	return (
		<>
			<PageMetaData title="Login" />
			{isAuthenticated && <Navigate to={redirectUrl} replace />}
			<AuthLayout>
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
								Fully Sense
							</h4>
						</div>
					</CardBody>
					<CardBody className="p-0">
						<TabContainer defaultActiveKey="1">

							<TabContent>
								<TabPane
									eventKey="1"
									className="p-3"
									id="LogIn_Tab"
									role="tabpanel"
								>
									<form className="form-horizontal auth-form" onSubmit={login}>
										<FormTextInput
											name="email"
											label="Email"
											containerClass="mb-2"
											control={control}
											placeholder="Enter email"
										/>
										<FormInputPassword
											name="password"
											label="Password"
											control={control}
											placeholder="Enter password"
										/>

										<Row className="form-group my-3">
											<Col sm={6}>
												{/* <div className="custom-control custom-switch switch-success">
													<input
														type="checkbox"
														className="custom-control-input"
														id="customSwitchSuccess"
													/>
													<label
														className="form-label text-muted"
														htmlFor="customSwitchSuccess"
													>
														Remember me
													</label>
												</div> */}
											</Col>
											<Col sm={6} className="text-end">
												{/* <Link
													to="/auth-recover-pw"
													className="text-muted font-13"
												>
													<i className="dripicons-lock"></i> Forgot password?
												</Link> */}
											</Col>
										</Row>

										<div className="form-group mb-0 row">
											<Col xs={12}>
												<Button
													variant="primary"
													className="w-100 waves-effect waves-light"
													disabled={loading}
													type="submit"
												>
													Entrar
													<i className="fas fa-sign-in-alt ms-1"></i>
												</Button>
											</Col>
										</div>
									</form>
								</TabPane>
							</TabContent>
						</TabContainer>
					</CardBody>
					<CardBody className="bg-light-alt text-center">
						<span className="text-muted d-none d-sm-inline-block">
							Fully Sense © {new Date().getFullYear()}
						</span>
					</CardBody>
				</Card>
			</AuthLayout>
		</>
	)
}

export default Login
