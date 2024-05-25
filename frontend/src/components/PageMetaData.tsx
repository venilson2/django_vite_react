import { Helmet } from 'react-helmet'

const PageMetaData = ({ title }: { title: string }) => {
	return (
		<Helmet>
			<title>{title} | Fully Sense</title>
		</Helmet>
	)
}

export default PageMetaData
