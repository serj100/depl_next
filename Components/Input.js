export const Input = props => {
	return (
		<input
			className={
				props.status === 'wrong'
					? 'input_container__wrong'
					: 'input_container__default'
			}
			onChange={props.onChange}
			value={props.value}
			type={props.type}
			placeholder={props.placeholder}
			name={props.name}
			onBlur={props.onBlur}
		/>
	)
}
