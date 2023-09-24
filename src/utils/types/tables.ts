export interface ITableBase {
  head?: Array<any>
  columnTemplates?: string
}

export interface ITableColumn {
  image?: boolean
  srcImage?: string
  columnTitle?: string
}

export interface ITableRow {
  columnTemplates?: string
  bgRow?: string
}
