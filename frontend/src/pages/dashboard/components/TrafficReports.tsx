import { ComponentContainerCard } from '@/components'
import { Link } from 'react-router-dom'
import { salesReports, trafficReports } from '../data'
import { Badge } from 'react-bootstrap'

const TrafficReports = () => {
	return (
		<ComponentContainerCard title="Últimas Vendas">
			<div className="table-responsive  rounded border">
				<table className="table mb-0 ">
					<thead className="fully-sense-bg-neutral-6 ">
						<tr>
							<th className="">Produto</th>
							<th className="">Localização</th>
							<th className="">Data - Horário </th>
							<th className="">Valor</th>
							<th className="">Status</th>
						</tr>
					</thead>
					<tbody>
						{salesReports.map((sales, idx) => {
							return (
								<tr key={idx}>
									<td>
										{sales.product}
									</td>
									<td>
									{sales.location}
									</td>
									<td>
										{sales.datetime}
									</td>
									<td>
										{sales.value}
									</td>
									<td>
										{sales.status == 'Completed' ? (
											<Badge pill bg='success' className='p-2'>Completo</Badge>
										): (
											<Badge pill bg='danger' className='p-2'>Cancelado</Badge>
										)}
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</ComponentContainerCard>
	)
}

export default TrafficReports
