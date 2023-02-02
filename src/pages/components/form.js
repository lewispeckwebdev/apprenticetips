const Form = ({ setActivePage }) => {
	return (
		<div className="flex flex-col justify-center ">
			<p className="m-4 font-bold">
				Please enter your details and we&apos;ll be in touch
			</p>
			<form
				className="flex flex-col gap-2"
				action="http://localhost:3000/api/insert"
				method="post"
			>
				<div className="flex gap-2 justify-center">
					<label className="w-32" htmlFor="firstname">
						First name:
					</label>
					<input
						className="w-48 border-solid border border-[#1E73BE]"
						required
						type="text"
						name="firstname"
					/>
				</div>
				<div className="flex gap-2 justify-center">
					<label className="w-32" htmlFor="surname">
						Surname:
					</label>
					<input
						className="w-48 border-solid border border-[#1E73BE]"
						required
						type="text"
						name="surname"
					/>
				</div>
				<div className="flex gap-2 justify-center">
					<label className="w-32" htmlFor="email">
						Email:
					</label>
					<input
						className="w-48 border-solid border border-[#1E73BE]"
						required
						type="email"
						name="email"
					/>
				</div>
				<div className="flex gap-2 justify-center">
					<label className="w-32" htmlFor="phone">
						Contact Number:
					</label>
					<input
						className="w-48 border-solid border border-[#1E73BE]"
						required
						type="number"
						name="phone"
					/>
				</div>
				<div className="flex justify-around">
					<label htmlFor="previous_level">
						Level of previous qualification:
					</label>
					<select required className="w-20" name="previous_level">
						{" "}
						<option value={""}>N/A</option>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
						<option value={4}>4</option>
						<option value={5}>5</option>
						<option value={6}>6</option>
						<option value={7}>7</option>
					</select>
				</div>
				<div className="w-[100%]">
					<p className="font-bold">
						Please select the routes that interest you:
					</p>
					<div className="w-[100%] flex">
						<label className="min-w-[80%] m-auto" htmlFor="agriculture">
							Agriculture, environmental and animal care
						</label>
						<input
							className="min-w-[20%] m-auto"
							type="checkbox"
							name="agriculture"
							value={1}
						/>
					</div>
					<div className="w-[100%] flex">
						<label className="min-w-[80%] m-auto" htmlFor="business">
							Business and administration
						</label>
						<input
							className="min-w-[20%] m-auto"
							type="checkbox"
							name="business"
							value={1}
						/>
					</div>
					<div className="w-[100%] flex">
						<label className="min-w-[80%] m-auto" htmlFor="care">
							Care Services
						</label>

						<input
							className="min-w-[20%] m-auto"
							type="checkbox"
							name="care"
							value={1}
						/>
					</div>
					<div className="w-[100%] flex">
						<label className="min-w-[80%] m-auto" htmlFor="catering">
							Catering and hospitality
						</label>

						<input
							className="min-w-[20%] m-auto"
							type="checkbox"
							name="catering"
							value={1}
						/>
					</div>
					<div className="w-[100%] flex">
						<label className="min-w-[80%] m-auto" htmlFor="construction">
							Construction
						</label>

						<input
							className="min-w-[20%] m-auto"
							type="checkbox"
							name="construction"
							value={1}
						/>
					</div>
					<div className="w-[100%] flex">
						<label className="min-w-[80%] m-auto" htmlFor="creative">
							Creative and design
						</label>

						<input
							className="min-w-[20%] m-auto"
							type="checkbox"
							name="creative"
							value={1}
						/>
					</div>
					<div className="w-[100%] flex">
						<label className="min-w-[80%] m-auto" htmlFor="digital">
							Digital
						</label>

						<input
							className="min-w-[20%] m-auto"
							type="checkbox"
							name="digital"
							value={1}
						/>
					</div>
					<div className="w-[100%] flex">
						<label className="min-w-[80%] m-auto" htmlFor="education">
							Education and childcare
						</label>

						<input
							className="min-w-[20%] m-auto"
							type="checkbox"
							name="education"
							value={1}
						/>
					</div>
					<div className="w-[100%] flex">
						<label className="min-w-[80%] m-auto" htmlFor="engineering">
							Engineering and manufacturing
						</label>

						<input
							className="min-w-[20%] m-auto"
							type="checkbox"
							name="engineering"
							value={1}
						/>
					</div>
					<div className="w-[100%] flex">
						<label className="min-w-[80%] m-auto" htmlFor="hair">
							Hair and beauty
						</label>

						<input
							className="min-w-[20%] m-auto"
							type="checkbox"
							name="hair"
							value={1}
						/>
					</div>
					<div className="w-[100%] flex">
						<label className="min-w-[80%] m-auto" htmlFor="health">
							Health and science
						</label>

						<input
							className="min-w-[20%] m-auto"
							type="checkbox"
							name="health"
							value={1}
						/>
					</div>
					<div className="w-[100%] flex">
						<label className="min-w-[80%] m-auto" htmlFor="legal">
							Legal, finance and accounting
						</label>

						<input
							className="min-w-[20%] m-auto"
							type="checkbox"
							name="legal"
							value={1}
						/>
					</div>
					<div className="w-[100%] flex">
						<label className="min-w-[80%] m-auto" htmlFor="protective">
							Protective services
						</label>

						<input
							className="min-w-[20%] m-auto"
							type="checkbox"
							name="protective"
							value={1}
						/>
					</div>
					<div className="w-[100%] flex">
						<label className="min-w-[80%] m-auto" htmlFor="sales">
							Sales, marketing and procurement
						</label>

						<input
							className="min-w-[20%] m-auto"
							type="checkbox"
							name="sales"
							value={1}
						/>
					</div>
					<div className="w-[100%] flex">
						<label className="min-w-[80%] m-auto" htmlFor="transport">
							Transport and logistics
						</label>

						<input
							className="min-w-[20%] m-auto"
							type="checkbox"
							name="transport"
							value={1}
						/>
					</div>
				</div>
				<textarea
					className="p-2 border-solid border border-[#1E73BE]"
					name="comments"
					maxLength={800}
					placeholder="Please provide any other information that you wish to let our recruiters know..."
				/>
				<input type="hidden" name="assigned_to" value={"Unassigned"} />

				<p className="text-center text-[#1E73BE] font-bold">CAPTCHA</p>
				<button
					className="m-auto mt-2 p-4  bg-[#1E73BE] text-[#ffffff]"
					onSubmit={() => {
						setActivePage("Thank You!");
					}}
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
