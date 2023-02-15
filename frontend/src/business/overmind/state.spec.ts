/* eslint-disable no-param-reassign */
import { createOvermindMock } from 'overmind'
import { config } from './index'

describe('State', () => {
	it('should derive authorsForStatistics', async () => {
		const overmind = createOvermindMock(config, state => {
			state.allData.authorsApi.data = [
				{
					id: '1',
					name: 'TEST NAME 1',
					books_written: 1,
				},
				{
					id: '2',
					name: 'TEST NAME 2',
					books_written: 2,
				},
			]
		})

		expect(overmind.state.authorForStatistics).toEqual([
			{
				name: 'TEST NAME 1',
				books_written: 1,
			},
			{
				name: 'TEST NAME 2',
				books_written: 2,
			},
		])
	})
})
