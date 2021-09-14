import React, { useState } from 'react'

const AdminCreate = () => {
	const [deadline, setDeadline] = useState({
		title: '',
		description: '',
		startDate: '',
		dueDate: '',
		assigneTo: '',
		option: ['low', 'medium', 'high'],
	})

	const handleChange = (event) => {
		setDeadline({ ...deadline, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(this.state.deadline)
	}

	return (
		<div
			className="rounded-2xl w-2/4 h-2/5 relative top-16 left-60 pt-6 shadow-md bg-green-500"
			onSubmit={handleSubmit}
		>
			<h3 className="text-xl text-white px-2 pb-6">Create New Deadline</h3>
			<div className="bg-white pb-12 px-10 mb-6 rounded-b-2xl">
				<div className="py-8">
					<label className="text-base text-gray-700  font-bold py-3 capitalize block">
						title
					</label>
					<input
						type="text"
						className="border-b-2 border-gray-200 outline-none w-full"
						placeholder="E.g Ui Design Submission"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label className="text-base text-gray-700  font-bold py-3 capitalize block">
						description
					</label>
					<input
						type="text"
						className="border-b-2 border-gray-200 outline-none w-full"
						placeholder="Describe the Deadline"
						onChange={handleChange}
					/>
					<div className="flex justify-between">
						<div className="py-8 flex-1">
							<label className="text-base text-gray-700  font-bold py-3  capitalize block">
								start date
							</label>
							<input
								type="text"
								className="border-b-2 border-gray-200 outline-none w-1/2"
								placeholder="DD/MM/YYYY"
							/>
						</div>
						<div className="py-8 flex-1">
							<label className="text-base text-gray-700  font-bold py-3 capitalize block">
								due date
							</label>
							<input
								type="text"
								className="border-b-2 border-gray-200 outline-none w-1/2"
								placeholder="DD/MM/YYYY"
							/>
						</div>
					</div>
				</div>
				<div>
					<label className="text-base text-gray-700  font-bold py-3 capitalize block">
						Assign to
					</label>
					<input
						type="text"
						className="border-b-2 border-gray-200 outline-none w-full"
						placeholder="E.g #channelname"
						onChange={handleChange}
					/>
				</div>
				<div className="py-8">
					<p className="text-base text-gray-700  font-bold py-3">
						Select Priority
					</p>
					<label className="items-center block">
						<input
							type="radio"
							className="mx-4 py-4"
							name="accountType"
							value="low"
							onChange={handleChange}
						/>
						Low
						<span className="h-3 w-3 inline-block bg-yellow-200 mx-4 rounded-full">
							&nbsp;
						</span>
					</label>
					<label className="items-center block">
						<input
							type="radio"
							className="mx-4 py-4"
							name="accountType"
							value="medium"
							onChange={handleChange}
						/>
						Medium
						<span className="h-3 w-3 inline-block bg-yellow-500 mx-4 rounded-full">
							&nbsp;
						</span>
					</label>
					<label className="items-center block">
						<input
							type="radio"
							className="mx-4 py-4"
							name="accountType"
							value="high"
							onChange={handleChange}
						/>
						High
						<span className="h-3 w-3 inline-block bg-red-600 mx-4 rounded-full">
							&nbsp;
						</span>
					</label>
				</div>
				<div className="pb-6">
					<div className="flex justify-end">
						<button className="text-green-500 text-xl font-600">Cancel</button>
						<button className="bg-green-500 text-xl font-600 text-white w-22 p-4 mx-4 rounded">
							Create
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdminCreate
