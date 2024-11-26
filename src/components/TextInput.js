import React from 'react'

export default function TextInput({
	labelDescription = 'Descrição do label:',
	inputValue = 'Valor padrão do input',
	onInputChange = null,
	id = 'id-input-text',
	autoFocus
}) {

	function handleInputChange({ currentTarget }) {

		if (onInputChange) {
			const newValue = currentTarget.value;
			onInputChange(newValue)
		}

	}
  return (
    <div className="flex flex-col my-4">
			<label
				className="text-sm mb-1"
				htmlFor={id}
			>
				{labelDescription}

			</label>
			<input
				autoFocus={autoFocus}
				id={id}
				type='text'
				className="border"
				value={inputValue}
				onChange={handleInputChange}
			/>
    </div>
  )
}
