import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import {
	Box,
	Button,
	Container,
	Rating,
	TextField,
	Typography,
} from '@mui/material'
import React, { ReactElement } from 'react'
import { useAppState } from '../../../business/overmind'

type Inputs = {
	author: string
	bookTitle: string
	review: string
	rating: number | null
}

const Review: React.FC = (): ReactElement => {
	const { isLoggedIn } = useAppState()
	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = async data => {
		console.log(data)
	}

	return (
		<Container>
			<Box sx={{ mt: 3 }}>
				<Typography variant="h2">Review</Typography>
			</Box>
			{!isLoggedIn ? (
				<Box>
					<Typography variant="h3" sx={{ textAlign: 'center' }}>
						you are not logged in
					</Typography>
				</Box>
			) : (
				<Box>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								overflow: 'hidden',
								margin: 'auto',
							}}
						>
							<Box sx={{ marginTop: 3, width: 400 }}>
								<Controller
									name="author"
									control={control}
									rules={{ required: true }}
									defaultValue=""
									render={({ field }) => (
										<TextField
											// eslint-disable-next-line react/jsx-props-no-spreading
											{...field}
											id="authorInput"
											label="author"
											type="text"
											fullWidth
										/>
									)}
								/>
								<Typography color="red" sx={{ mt: 1, textAlign: 'center' }}>
									{errors.author && 'This field is required!'}
								</Typography>
							</Box>
							<Box sx={{ marginTop: 3, width: 400 }}>
								<Controller
									name="bookTitle"
									control={control}
									rules={{ required: true }}
									defaultValue=""
									render={({ field }) => (
										<TextField
											// eslint-disable-next-line react/jsx-props-no-spreading
											{...field}
											id="bookTitleInput"
											label="book title"
											type="text"
											fullWidth
										/>
									)}
								/>
								<Typography color="red" sx={{ mt: 1, textAlign: 'center' }}>
									{errors.bookTitle && 'This field is required!'}
								</Typography>
							</Box>
							<Box sx={{ marginTop: 3, width: 400 }}>
								<Controller
									name="review"
									control={control}
									defaultValue=""
									render={({ field }) => (
										<TextField
											// eslint-disable-next-line react/jsx-props-no-spreading
											{...field}
											id="reviewInput"
											label="review"
											type="text"
											fullWidth
											multiline
											rows={4}
										/>
									)}
								/>
							</Box>
							<Box sx={{ marginTop: 3, width: 400 }}>
								<Controller
									name="rating"
									control={control}
									defaultValue={null}
									render={({ field }) => (
										<>
											<Typography component="legend">Rating</Typography>
											<Rating
												// eslint-disable-next-line react/jsx-props-no-spreading
												{...field}
												id="ratingInput"
												name="rating"
											/>
										</>
									)}
								/>
							</Box>
							<Box sx={{ marginTop: 3 }}>
								<Button type="submit" variant="contained">
									ADD REVIEW
								</Button>
							</Box>
						</Box>
					</form>
				</Box>
			)}
		</Container>
	)
}

export default Review
