import React from 'react'

export default function TextInput({
	labelDescription = 'Descrição do label:',
	inputValue = 'Valor padrão do input',
	onInputChang = null,
	id = 'id-input-text',
	autoFocus
}) {

	function handleInputChange({ currentTarget }) {

		if (onInputChang) {
			const newValue = currentTarget.value;
			onInputChang(newValue)
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
