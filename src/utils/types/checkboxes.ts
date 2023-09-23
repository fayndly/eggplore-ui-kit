interface ICheckbox {
  name?: string
  id?: string
  value?: string
  label?: string
  checked?: boolean
  disabled?: boolean
  group?: boolean
  type?: string
}

interface IOptionsCheckboxGroup {
  value: Array<string>
  name: string
  options: Array<ICheckbox>
}

interface IUpdateCheckboxGroup {
  optionId: string
  checked: boolean
}

export type { ICheckbox, IOptionsCheckboxGroup, IUpdateCheckboxGroup }
