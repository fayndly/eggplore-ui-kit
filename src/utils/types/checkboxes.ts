export interface ICheckbox {
  name?: string
  id?: string
  value?: string
  label?: string
  checked?: boolean
  disabled?: boolean
  group?: boolean
  type?: string
}

export interface IOptionsCheckboxGroup {
  value: Array<string>
  name: string
  options: Array<ICheckbox>
}

export interface IUpdateCheckboxGroup {
  optionId: string
  checked: boolean
}
