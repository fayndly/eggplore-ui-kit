import type { ErrorObject } from '@vuelidate/core'
import type { Ref } from 'vue'

export interface IInputDefault {
  error?: Array<ErrorObject>
  value?: Ref<string> | string
  name: string
  type?: string
  placeholder: string
  label: string
  width?: string
}
