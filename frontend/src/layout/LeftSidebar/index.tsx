import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import AppMenu from './Menu'
import { getMenuItems } from '@/common'

import logoDark from '@/assets/images/logo-dark.png'
import logoSM from '@/assets/images/logo-sm.png'
import logoImg from '@/assets/images/logo.png'

const LeftSidebar = () => {
	console
	return (
		<div className="left-sidenav">
			<div className="brand">
				<Link to="/" className="logo">
					<div className="d-flex gap-1 justify-content-center">
						<span>
							<img src={"/static/images/logo-sm.png"} alt="logo-small" className="logo-sm" />
						</span>
						<span>
							<img
								src={"/static/images/logo.png"}
								alt="logo-large"
								className="logo-lg logo-light"
							/>
							<img
								src={"/static/images/logo-dark.png"}
								alt="logo-large"
								className="logo-lg logo-dark"
							/>
						</span>
					</div>
				</Link>
			</div>

			<SimpleBar className="menu-content h-100">
				<AppMenu menuItems={getMenuItems()} />

				<div className="update-msg text-center">
					<Link
						to=""
						className="float-end close-btn text-white"
						data-dismiss="update-msg"
						aria-label="Close"
						aria-hidden="true"
					>
						<i className="mdi mdi-close"></i>
					</Link>
				</div>
			</SimpleBar>
		</div>
	)
}

export default LeftSidebar
