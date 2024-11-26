import React from 'react'

export default function CheckboxInput({
	labelDescription = 'Descrição do checkbox',
	inputValue = 'Valor padrão do input',
	onCheckboxChange = null,
	id = 'id-input-checkbox',
	autoFocus
}) {

	function handleInputChange({ currentTarget }) {

		if (onCheckboxChange) {
			onCheckboxChange()
		}

	}
  return (
    <div className="flex flex-row items-center space-x-2 my-4">

        <input
            autoFocus={autoFocus}
            id={id}
            type='checkbox'
            className="border"
            value={inputValue}
            onChange={handleInputChange}
        />
        <label
            className="text-sm mb-1"
            htmlFor={id}
        >
            {labelDescription}

        </label>
    </div>
  )
}
