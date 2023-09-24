<script setup lang="ts">
import { ref, computed } from 'vue'
import TableBase from '@/ui/tables/TableBase.vue'
import TableRow from '@/ui/tables/TableRow.vue'
import TableColumn from '@/ui/tables/TableColumn.vue'
import ButtonDefault from '@/ui/buttons/ButtonDefault.vue'

const tableHeads = ['Id', 'Author', 'Title', 'Cover', '']
const tableSizeColumns = '50px 1fr 2fr 150px 140px'

const sortField = ref<keyof IBook>('id')
const typeSort = ref('asc')

interface IBook {
  id: number
  author: string
  title: string
  image: string
  bg: string
}
const books = ref<IBook[]>([
  {
    id: 1,
    author: 'Dmitry Glukhovsky',
    title: 'Metro 2033',
    image:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81pNKLAG-cL._AC_UY436_FMwebp_QL65_.jpg',
    bg: '#FFA26B'
  },
  {
    id: 2,
    author: 'James Clear',
    title: 'Atomic Habits: An Easy',
    image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
    bg: '#00C48C'
  },
  {
    id: 3,
    author: 'J. K. Rowling',
    title: 'Harry Potter and the Order of the Phoenix',
    image:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    bg: '#00C48C'
  }
])

const booksSorting = computed<IBook[]>(() => {
  return books.value.sort((a: IBook, b: IBook) => {
    let modifier = 1
    if (typeSort.value === 'desc') modifier = -1
    if (a[sortField.value] < b[sortField.value]) return -1 * modifier
    if (a[sortField.value] > b[sortField.value]) return 1 * modifier
    return 0
  })
})

const setSort = (name: keyof IBook) => {
  if (sortField.value === name) {
    if (typeSort.value === 'asc') {
      typeSort.value = 'desc'
    } else {
      typeSort.value = 'asc'
    }
  } else {
    sortField.value = name
  }
}
</script>

<template>
  <h1 class="heading-1">Table</h1>
  <span>Sort Field: {{ sortField }}</span
  ><br />
  <span>Type Sort: {{ typeSort }}</span
  ><br />
  <TableBase :head="tableHeads" :columnTemplates="tableSizeColumns" @sorting="setSort">
    <TableRow
      v-for="book in booksSorting"
      :key="book.id"
      :columnTemplates="tableSizeColumns"
      :bgRow="book.bg"
    >
      <TableColumn :columnTitle="tableHeads[0]">
        {{ book.id }}
      </TableColumn>
      <TableColumn :columnTitle="tableHeads[1]">
        {{ book.author }}
      </TableColumn>
      <TableColumn :columnTitle="tableHeads[2]">
        {{ book.title }}
      </TableColumn>
      <TableColumn :image="true" :srcImage="book.image" />
      <TableColumn>
        <ButtonDefault lavel="Read Online" />
      </TableColumn>
    </TableRow>
  </TableBase>
</template>
