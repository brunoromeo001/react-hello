import React from 'react'

export default function DateInput({
	labelDescription = 'Descrição do label:',
	inputValue = '2024-04-30',
	onInputChange = null,
  id = 'id-input-date',
  autoFocus = false,
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
				type='date'
				className="border"
				value={inputValue}
				onChange={handleInputChange}
			/>
    </div>
  )
}
