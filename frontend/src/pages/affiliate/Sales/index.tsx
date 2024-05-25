import { PageBreadcrumb } from '@/components'
import { Card, CardBody, CardHeader, CardTitle, Col, Row} from 'react-bootstrap'
import { customersDetails } from './data'
import { PageSize, Table } from '@/components'
import { CustomersDetailsType } from './types'


const Sales = () => {

	const columns = [
		{
			Header: 'ID',
			accessor: 'id',
			defaultCanSort: true,
		},
		{
			Header: 'Name',
			accessor: 'name',
			defaultCanSort: true,
		},
		{
			Header: 'Ext.',
			accessor: 'ext',
			defaultCanSort: false,
		},
		{
			Header: 'City',
			accessor: 'city',
			defaultCanSort: true,
		},
		{
			Header: 'Start Date',
			accessor: 'startDate',
			defaultCanSort: true,
		},
		{
			Header: 'Completion',
			accessor: 'completion',
			defaultCanSort: true,
		},
	]

	const sizePerPageList: PageSize[] = [
		{
			text: '5',
			value: 5,
		},
		{
			text: '10',
			value: 10,
		},
		{
			text: '25',
			value: 25,
		},
		{
			text: 'All',
			value: customersDetails.length,
		},
	]

	return (
		<>
			<PageBreadcrumb subName="Afiliados" title="Vendas" />
			<Row>
				<Col lg={12}>
					<Card>
						<CardBody>
							<Table<CustomersDetailsType>
								columns={columns}
								data={customersDetails}
								pageSize={5}
								sizePerPageList={sizePerPageList}
								isSortable={true}
								pagination={true}
							/>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Sales
