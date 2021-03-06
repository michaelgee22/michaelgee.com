import { Box, Icon, Tooltip, useColorModeValue } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

interface Props {
	icon: IconType
	name: string
	gutter?: number
	size?: string
	color?: string
	disabled?: boolean
}

const HoverIcon = (props: Props) => {
	const themeColor = useColorModeValue('primary.light', 'primary.dark')
	const color = props.color ? props.color : themeColor
	const size = props.size ? props.size : '1.6em'
	const gutter = props.gutter ? props.gutter : 8

	return (
		<Tooltip
			label={props.name}
			placement="bottom"
			gutter={gutter}
			closeOnClick={false}
			isDisabled={props.disabled ? true : undefined}
			aria-label={props.name}
		>
			<Box as="span">
				<Icon as={props.icon} color={color} fontSize={size} />
			</Box>
		</Tooltip>
	)
}

export { HoverIcon }
