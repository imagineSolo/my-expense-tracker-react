import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const ProgressBar = (props) => {


	return (
		<Box position='relative' display='inline-flex'>
			<CircularProgress
				{...props}
				variant='determinate'
				thickness={5}
				value={props.value > 100 ? 100 : props.value}
			/>
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position='absolute'
				display='flex'
				alignItems='center'
				justifyContent='center'
			>
				<Typography
					variant='h6'
					component='div'
					color='textSecondary'
					value={props.value > 100 ? 100 : props.value}
				>
					{Math.round(props.value)}%
				</Typography>
			</Box>
		</Box>
	);
}

export default ProgressBar;
