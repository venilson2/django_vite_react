import { ComponentContainerCard, PageBreadcrumb } from '@/components'
import { Col, ProgressBar, Row } from 'react-bootstrap'

const BasicExample = () => {
	return (
		<ComponentContainerCard
			title="Basic Example"
			description="Use background utility classes to change the appearance of individual progress bars."
		>
			<ProgressBar className="mb-3" now={10} />
			<ProgressBar className="mb-3" now={20} />
			<ProgressBar className="mb-3" now={30} />
			<ProgressBar className="mb-3" now={40} />
			<ProgressBar className="mb-3" now={50} />
			<ProgressBar now={60} />
		</ComponentContainerCard>
	)
}

const StripedAndAnimatedStripes = () => {
	return (
		<ComponentContainerCard
			title="Striped And Animated Stripes Example"
			description="Add .progress-bar-animated to .progress-bar to animate the stripes right to left via CSS3 animations."
		>
			<ProgressBar now={15} variant="warning" striped className="mb-3" />
			<ProgressBar now={30} striped variant="success" className="mb-3" />
			<ProgressBar now={45} striped className="mb-3" />
			<ProgressBar now={60} variant="info" animated striped className="mb-3" />
			<ProgressBar
				now={75}
				variant="danger"
				animated
				striped
				className="mb-3"
			/>
			<ProgressBar now={90} animated striped />
		</ComponentContainerCard>
	)
}

const LabelsAndMultipleBars = () => {
	return (
		<ComponentContainerCard
			title="Labels and Multiple bars Example"
			description="Add labels to your progress bars by placing text within the .progress-bar."
		>
			<ProgressBar variant="secondary" className="mb-3" now={20} label="20%" />
			<ProgressBar
				variant="secondary"
				className="mb-3"
				striped
				now={40}
				label="40%"
			/>
			<ProgressBar className="progress mb-3">
				<ProgressBar now={20} label="20%" />
				<ProgressBar now={20} variant="secondary" striped label="20%" />
				<ProgressBar now={20} variant="info" striped label="20%" />
			</ProgressBar>
			<ProgressBar className="progress">
				<ProgressBar now={20} />
				<ProgressBar now={40} variant="secondary" />
				<ProgressBar now={20} variant="info" />
			</ProgressBar>
		</ComponentContainerCard>
	)
}

const HeightAndBackgroundProgressBar = () => {
	return (
		<ComponentContainerCard
			title="Height And Background Color Example"
			description="We only set a height value on the .progress-bar, And add background color class."
		>
			<ProgressBar now={15} className="mb-3" style={{ height: 3 }} />
			<ProgressBar now={45} striped className="mb-3" />
			<ProgressBar now={60} striped style={{ height: 14 }} />
		</ComponentContainerCard>
	)
}

const VerticalExample = () => {
	return (
		<ComponentContainerCard
			title="Vertical Example"
			description="Add .progress-verticalto any .progress-bar-animated to apply a stripe via CSS gradient over the progress bar’s background color."
		>
			<Row>
				<Col md={4} className="d-flex justify-content-center">
					<div
						className="progress progress-vertical my-3"
						style={{ height: 8 }}
					>
						<div
							className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
							role="progressbar"
							style={{ height: '25%' }}
							aria-valuenow={50}
							aria-valuemin={0}
							aria-valuemax={100}
						/>
					</div>
					<div
						className="progress progress-vertical my-3"
						style={{ height: 8 }}
					>
						<div
							className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
							role="progressbar"
							style={{ height: '50%' }}
							aria-valuenow={50}
							aria-valuemin={0}
							aria-valuemax={100}
						/>
					</div>
					<div
						className="progress progress-vertical my-3"
						style={{ height: 8 }}
					>
						<div
							className="progress-bar progress-bar-striped progress-bar-animated"
							role="progressbar"
							style={{ height: '75%' }}
							aria-valuenow={75}
							aria-valuemin={0}
							aria-valuemax={100}
						/>
					</div>
				</Col>
				<Col md={4} className="d-flex justify-content-center">
					<div
						className="progress progress-vertical-bottom my-3"
						style={{ height: 8 }}
					>
						<div
							className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
							role="progressbar"
							style={{ height: '10%' }}
							aria-valuenow={10}
							aria-valuemin={0}
							aria-valuemax={100}
						/>
					</div>
					<div
						className="progress progress-vertical-bottom my-3"
						style={{ height: 8 }}
					>
						<div
							className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
							role="progressbar"
							style={{ height: '25%' }}
							aria-valuenow={25}
							aria-valuemin={0}
							aria-valuemax={100}
						/>
					</div>
					<div
						className="progress progress-vertical-bottom my-3"
						style={{ height: 8 }}
					>
						<div
							className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
							role="progressbar"
							style={{ height: '50%' }}
							aria-valuenow={50}
							aria-valuemin={0}
							aria-valuemax={100}
						/>
					</div>
				</Col>
				<Col md={4} className="d-flex justify-content-center">
					<div
						className="progress progress-vertical-bottom my-3"
						style={{ width: 30 }}
					>
						<div
							className="progress-bar progress-bar-striped progress-bar-animated"
							role="progressbar"
							style={{ height: '75%' }}
							aria-valuenow={75}
							aria-valuemin={0}
							aria-valuemax={100}
						/>
					</div>
					<div
						className="progress progress-vertical-bottom my-3"
						style={{ width: 30 }}
					>
						<div
							className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
							role="progressbar"
							style={{ height: '100%' }}
							aria-valuenow={100}
							aria-valuemin={0}
							aria-valuemax={100}
						>
							100%
						</div>
					</div>
				</Col>
			</Row>
		</ComponentContainerCard>
	)
}

const Progress = () => {
	return (
		<>
			<PageBreadcrumb subName="UI Kit" title="Progress" />
			<Row>
				<Col lg={6}>
					<BasicExample />
				</Col>
				<Col lg={6}>
					<StripedAndAnimatedStripes />
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<LabelsAndMultipleBars />
				</Col>
				<Col lg={6}>
					<HeightAndBackgroundProgressBar />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<VerticalExample />
				</Col>
			</Row>
		</>
	)
}

export default Progress
