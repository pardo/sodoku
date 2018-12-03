import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

function blockIndexes (i) {
  return [
    0 + i, 1 + i, 2 + i,
    9 + i, 10 + i, 11 + i,
    18 + i, 19 + i, 20 + i
  ]
}

function colIndexes (colI) {
  return [
    0 + colI, 1 + colI, 2 + colI, 3 + colI, 4 + colI, 5 + colI, 6 + colI, 7 + colI, 8 + colI
  ]
}

function rowIndexes (rowI) {
  return [
    (0 * 9) + rowI, (1 * 9) + rowI, (2 * 9) + rowI, (3 * 9) + rowI, (4 * 9) + rowI, (5 * 9) + rowI, (6 * 9) + rowI, (7 * 9) + rowI, (8 * 9) + rowI
  ]
}

new Vue({
  router,
  data: {
    loading: true,
    board: [],
    boardState: [],
    boardSolved: [],

    block0: blockIndexes(0),
    block1: blockIndexes(3),
    block2: blockIndexes(6),
    block3: blockIndexes(27),
    block4: blockIndexes(30),
    block5: blockIndexes(33),
    block6: blockIndexes(54),
    block7: blockIndexes(57),
    block8: blockIndexes(60),

    col0: colIndexes(0),
    col1: colIndexes(9 * 1),
    col2: colIndexes(9 * 2),
    col3: colIndexes(9 * 3),
    col4: colIndexes(9 * 4),
    col5: colIndexes(9 * 5),
    col6: colIndexes(9 * 6),
    col7: colIndexes(9 * 7),
    col8: colIndexes(9 * 8),

    row0: rowIndexes(0),
    row1: rowIndexes(1),
    row2: rowIndexes(2),
    row3: rowIndexes(3),
    row4: rowIndexes(4),
    row5: rowIndexes(5),
    row6: rowIndexes(6),
    row7: rowIndexes(7),
    row8: rowIndexes(8)
  },
  methods: {
    getCol (index) {
      return [
        this.col0,
        this.col1,
        this.col2,
        this.col3,
        this.col4,
        this.col5,
        this.col6,
        this.col7,
        this.col8
      ].find(col => col.includes(index))
    },
    getRow (index) {
      return [
        this.row0,
        this.row1,
        this.row2,
        this.row3,
        this.row4,
        this.row5,
        this.row6,
        this.row7,
        this.row8
      ].find(row => row.includes(index))
    },
    getBlock (index) {
      return [
        this.block0,
        this.block1,
        this.block2,
        this.block3,
        this.block4,
        this.block5,
        this.block6,
        this.block7,
        this.block8
      ].find(block => block.includes(index))
    },
    getValues (indexes) {
      return indexes.map(index => this.board[index])
    },
    hasError (index) {
      var number = this.board[index]
      if (number === null) { return false }
      if (this.getValues(this.getCol(index)).filter(v => v === number).length > 1) {
        return true
      }
      if (this.getValues(this.getRow(index)).filter(v => v === number).length > 1) {
        return true
      }
      if (this.getValues(this.getBlock(index)).filter(v => v === number).length > 1) {
        return true
      }
      return false
    }
  },
  created () {
    axios.get('https://cors-anywhere.herokuapp.com/https://www.sudoku-online.org/getsudoku.php').then(response => {
      this.loading = false
      this.board = response.data.sudoku.split('').map(v => { return parseInt(v) || null })
      this.boardState = this.board.map(v => {
        return {
          editable: v === null
        }
      })
      this.boardSolved = response.data.solucion.split('').map(v => { return parseInt(v) || null })
    })
    /*
    this.loading = false
    this.board = [null, 3, null, null, 2, 8, null, null, 5, 6, null, null, 9, 4, 5, 3, 2, null, null, null, 2, null, null, null, 4, null, null, 5, null, null, 4, 6, null, null, 7, null, null, null, 7, 2, null, null, null, null, 4, null, 4, null, 8, 7, null, null, 6, null, 4, 9, 6, 3, null, null, 7, 5, null, 2, null, null, null, null, null, null, null, 3, null, null, 3, 5, null, 6, null, 4, 8]
    this.boardState = this.board.map(v => {
      return {
        editable: v === null
      }
    })
    this.boardSolved = [7, 3, 4, 6, 2, 8, 9, 1, 5, 6, 1, 8, 9, 4, 5, 3, 2, 7, 9, 5, 2, 1, 3, 7, 4, 8, 6, 5, 2, 1, 4, 6, 3, 8, 7, 9, 8, 6, 7, 2, 5, 9, 1, 3, 4, 3, 4, 9, 8, 7, 1, 5, 6, 2, 4, 9, 6, 3, 8, 2, 7, 5, 1, 2, 8, 5, 7, 1, 4, 6, 9, 3, 1, 7, 3, 5, 9, 6, 2, 4, 8]
    */
  },
  render: h => h(App)
}).$mount('#app')
