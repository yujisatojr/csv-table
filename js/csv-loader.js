class Items {
  constructor (col1, col2, type, col3, col4, col5, col6) {
    this.col1 = col1
    this.col2 = col2
    this.type = type
    this.col3 = col3
    this.col4 = col4
    this.col5 = col5
    this.col6 = col6
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  _setupSearch()
  _setupFilters()
  setup('all')
})

  function searchNames (event) {
    var input, index, table, tr, td, i, txtValue, filter
    input = document.getElementById('myInput')
    index = input.value.toUpperCase()
    table = document.getElementById('myTable')
    tr = table.getElementsByTagName('tr')
    filter = document.getElementById('searchby').selectedIndex
    console.log(filter)
    for (i = 1; i < tr.length; i++) {
      if (filter === 0) {
        td = tr[i].getElementsByTagName('td')[0]
        if (td) {
          txtValue = td.textContent || td.innerText
          if (txtValue.toUpperCase().indexOf(index) > -1) {
            tr[i].style.display = ''
          } else {
            tr[i].style.display = 'none'
          }
        }
      } else if (filter === 1) {
        td = tr[i].getElementsByTagName('td')[1]
        if (td) {
          txtValue = td.textContent || td.innerText
          if (txtValue.toUpperCase().indexOf(index) > -1) {
            tr[i].style.display = ''
          } else {
            tr[i].style.display = 'none'
          }
        }
      } else if (filter === 2) {
        td = tr[i].getElementsByTagName('td')[3]
        if (td) {
          txtValue = td.textContent || td.innerText
          if (txtValue.toUpperCase().indexOf(index) > -1) {
            tr[i].style.display = ''
          } else {
            tr[i].style.display = 'none'
          }
        }
      } else if (filter === 3) {
        td = tr[i].getElementsByTagName('td')[5]
        if (td) {
          txtValue = td.textContent || td.innerText
          if (txtValue.toUpperCase().indexOf(index) > -1) {
            tr[i].style.display = ''
          } else {
            tr[i].style.display = 'none'
          }
        }
      }
    }
  }

  function filterchoice (event) {
    var which = event.target.innerText.toLowerCase()
    var current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace('active', '')
    event.target.className += 'active'
    console.log('filter choice: ' + which)
    document.getElementById('myInput').value = ''
    document.getElementById('myTable').style.display = 'none'
    document.getElementById('loader').style.display = 'block'
    if (which === 'all') {
      var choice = 'all'
      this.setup(choice)
    } else if (which === 'a') {
      choice = 'a'
      this.setup(choice)
    } else if (which === 'b') {
      choice = 'b'
      this.setup(choice)
    } else if (which === 'c') {
      choice = 'c'
      this.setup(choice)
    } else if (which === 'd') {
      choice = 'd'
      this.setup(choice)
    } else if (which === 'e') {
      choice = 'e'
      this.setup(choice)
    } else if (which === 'f') {
      choice = 'f'
      this.setup(choice)
    } else if (which === 'g') {
      choice = 'g'
      this.setup(choice)
    } else if (which === 'h') {
      choice = 'h'
      this.setup(choice)
    } else if (which === 'i') {
      choice = 'i'
      this.setup(choice)
    } else if (which === 'j') {
      choice = 'j'
      this.setup(choice)
    } else if (which === 'k') {
      choice = 'k'
      this.setup(choice)
    } else if (which === 'l') {
      choice = 'l'
      this.setup(choice)
    } else if (which === 'm') {
      choice = 'm'
      this.setup(choice)
    } else if (which === 'n') {
      choice = 'n'
      this.setup(choice)
    } else if (which === 'o') {
      choice = 'o'
      this.setup(choice)
    } else if (which === 'p') {
      choice = 'p'
      this.setup(choice)
    } else if (which === 'q') {
      choice = 'q'
      this.setup(choice)
    } else if (which === 'r') {
      choice = 'r'
      this.setup(choice)
    } else if (which === 's') {
      choice = 's'
      this.setup(choice)
    } else if (which === 't') {
      choice = 't'
      this.setup(choice)
    } else if (which === 'u') {
      choice = 'u'
      this.setup(choice)
    } else if (which === 'v') {
      choice = 'v'
      this.setup(choice)
    } else if (which === 'w') {
      choice = 'w'
      this.setup(choice)
    } else if (which === 'x') {
      choice = 'x'
      this.setup(choice)
    } else if (which === 'y') {
      choice = 'y'
      this.setup(choice)
    } else if (which === 'z') {
      choice = 'z'
      this.setup(choice)
    }
  }

  function setup (choice) {
    // get csv file
    Papa.parse('/assets/coursera.csv', {
      download: true,
      header: true,
      complete: function (results) {
        var majorscsv = results

        var majorscsvArray = prepareSetup(majorscsv, 'AdmissionsMatrix.js', choice)

        setuplist(majorscsvArray)
      }
    })
  }

  function prepareSetup (setupArray, jsfile, choice) {
    var majorcsvArray = []

    for (var i = 0; i < setupArray['data'].length; i++) {
      var type = ''

      if (choice === 'all') {
        if (setupArray['data'][i]['Name'] !== '') {
          if (setupArray['data'][i]['Name'] !== ' ') {
            majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
          }
        }
      } else if (choice === 'a') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith(choice.toUpperCase)) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'b') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('B')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'c') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('C')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'd') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('D')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'e') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('E')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'f') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('F')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'g') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('G')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'h') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('H')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'i') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('I')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'j') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('J')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'k') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('K')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'l') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('L')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'm') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('M')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'n') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('N')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'o') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('O')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'p') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('P')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'q') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('Q')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'r') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('R')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 's') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('S')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 't') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('T')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'u') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('U')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'v') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('V')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'w') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('W')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'x') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('X')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'y') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('Y')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      } else if (choice === 'z') {
        console.log(choice)
        if (setupArray['data'][i]['Name'].startsWith('Z')) {
          majorcsvArray.push(new Items(setupArray['data'][i]['Author'], setupArray['data'][i]['Rating'], type, setupArray['data'][i]['Name'], setupArray['data'][i]['Enrollment'], setupArray['data'][i]['Difficulty'], setupArray['data'][i]['URL']))
        }
      }
    }

    var majorscsvArray = majorcsvArray

    if (jsfile === 'AdmissionsMatrix.js') {
      sortNames(majorscsvArray)
    }

    return majorscsvArray
  }

  function sortNames (array) {
    array.sort(function (a, b) {
      var nameA = a.col3.toLowerCase()
      var nameB = b.col3.toLowerCase()
      // sort string ascending
      if (nameA < nameB) {
        return -1
      } else if (nameA > nameB) {
        return 1
      }
      return 0
    })
  }

  function setuplist (array) {
    var tmp = ''
    var type = ''
    tmp += '<div class="row"><table id="myTable" style="display:none;"><colgroup><col span="1" style="width: 15%;"><col span="1" style="width: 15%;"><col span="1" style="width: 8%;"><col span="1" style="width: 8%;"><col span="1" style="width: 8%;"><col span="1" style="width: 15%;"></colgroup><tbody><tr><th>Course Title</th><th>Author</th><th>Rating</th><th>Enrollment</th><th>Difficulty</th><th>URL</th></tr>'
    array.forEach(function (element, idx, arr) {
      if (type === '') {
        tmp += makeitem(element)
      }
    })
    tmp += '</tbody></table></div>'
    document.getElementById('main-table').innerHTML = tmp
    document.getElementById('loader').style.display = 'none'
    document.getElementById('myTable').style.display = 'block'
    paginator({
      table: document.getElementById('myTable'),
      box: document.getElementById('index'),
      active_class: 'color_page'
    })
  }

  function makeitem (item) {
    var tmp = ''

    tmp += '<tr><td>' + item.col3 + '</td><td>' + item.col1 + '</td><td>' + item.col2 + '</td><td>' + item.col4 + '</td><td>' + item.col5 + '</td><td>' + item.col6 + '</td></tr>'

    return tmp
  }

  function _setupSearch () {
    document.getElementById('myInput').addEventListener('keyup', this.searchNames.bind(this), false)
  }

  function _setupFilters () {
    document.querySelectorAll('#search-links ul li').forEach(item => { item.addEventListener('click', this.filterchoice.bind(this), false) })
  }

  function clearFilter () {
    document.getElementById('myInput').value = ''
    var current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace('active', '')
    document.getElementById('highlight').className += 'active'
    var choice = 'all'
    this.setup(choice)
  }

  function paginator (config) {
    if (typeof config !== 'object') {
      console.log('Paginator was expecting a config object!')
    }
    if (typeof config.getRows !== 'function' && !(config.table instanceof Element)) {
      console.log('Paginator was expecting a table or get_row function!')
    }
    if (typeof config.disable === 'undefined') {
      config.disable = false
    }
    var box
    if (!(config.box instanceof Element)) {
      config.box = document.createElement('div')
    }
    box = config.box
    if (typeof config.getRows !== 'function') {
      config.getRows = function () {
        var table = config.table
        var tbody = table.getElementsByTagName('tbody')[0] || table
        var children = tbody.children
        var trs = []
        for (var i = 0; i < children.length; i++) {
          trs.push(children[i])
        }
        return trs
      }
    }
    var getRows = config.getRows
    var trs = getRows()
    if (typeof config.rowsperpage === 'undefined') {
      var selects = box.getElementsByTagName('select')
      if (typeof selects !== 'undefined' && (selects.length > 0 && typeof selects[0].selectedIndex !== 'undefined')) {
        config.rowsperpage = selects[0].options[selects[0].selectedIndex].value
      } else {
        config.rowsperpage = 20
      }
    }
    var rowsperpage = config.rowsperpage
    if (typeof config.page === 'undefined') {
      config.page = 1
    }
    var page = config.page
    var pages = (rowsperpage > 0) ? Math.ceil(trs.length / rowsperpage) : 1
    if (pages < 1) {
      pages = 1
    }
    if (page > pages) {
      page = pages
    }
    if (page < 1) {
      page = 1
    }
    config.page = page
    for (var i = 0; i < trs.length; i++) {
      if (typeof trs[i]['data-display'] === 'undefined') {
        trs[i]['data-display'] = trs[i].style.display || ''
      }
      if (rowsperpage > 0) {
        if (i < page * rowsperpage && i >= (page - 1) * rowsperpage) {
          trs[0].style.display = trs[0]['data-display']
          trs[i].style.display = trs[i]['data-display']
        } else {
          if (!config.disable) {
            trs[i].style.display = 'none'
          } else {
            trs[i].style.display = trs[i]['data-display']
          }
        }
      } else {
        trs[i].style.display = trs[i]['data-display']
      }
    }
    config.active_class = config.active_class || 'active'
    if (typeof config.box_mode !== 'function' && config.box_mode !== 'list' && config.box_mode !== 'buttons') {
      config.box_mode = 'button'
    }
    if (typeof config.box_mode === 'function') {
      config.box_mode(config)
    } else {
      var makeButton
      if (config.box_mode === 'list') {
        makeButton = function (symbol, index, config, disabled, active) {
          var li = document.createElement('li')
          var a = document.createElement('a')
          a.href = '#'
          a.innerHTML = symbol
          a.addEventListener('click', function (event) {
            event.preventDefault()
            this.parentNode.click()
            return false
          }, false)
          li.appendChild(a)
          var classes = []
          if (disabled) {
            classes.push('disabled')
          }
          if (active) {
            classes.push(config.active_class)
          }
          li.className = classes.join(' ')
          li.addEventListener('click', function () {
            if (this.className.split(' ').indexOf('disabled') === -1) {
              config.page = index
              self.paginator(config)
            }
          }, false)
          return li
        }
      } else {
        makeButton = function (symbol, index, config, disabled, active) {
          var button = document.createElement('button')
          button.innerHTML = symbol
          button.addEventListener('click', function (event) {
            event.preventDefault()
            if (this.disabled !== true) {
              config.page = index
              self.paginator(config)
            }
            return false
          }, false)
          if (disabled) {
            button.disabled = true
            button.style.display = 'none'
          }
          if (active) {
            button.className = config.active_class
          }
          return button
        }
      }
      var clearFilterButton = function (symbol) {
        var clearButton = document.createElement('span')
        clearButton.innerHTML = symbol
        clearButton.addEventListener('click', function (event) {
          self.clearFilter()
        }, false)
        return clearButton
      }
      var pageBox = document.createElement(config.box_mode === 'list' ? 'ul' : 'div')
      if (config.box_mode === 'list') {
        pageBox.className = 'pagination'
      }
      var left = makeButton('<span>&#8249</span> Previous', (page > 1 ? page - 1 : 1), config, (page === 1), false)
      pageBox.appendChild(left)
      var right = makeButton('Next <span>&#8250</span>', (pages > page ? page + 1 : page), config, (page === pages), false)
      pageBox.appendChild(right)
      var clearButton = clearFilterButton('<a href="#" id="clearFilter">Clear Filter</a>')
      pageBox.appendChild(clearButton)
      if (box.childNodes.length) {
        while (box.childNodes.length > 1) {
          box.removeChild(box.childNodes[0])
        }
        box.replaceChild(pageBox, box.childNodes[0])
      } else {
        box.appendChild(pageBox)
      }
    }
    if (!(typeof config.page_options === 'boolean' && !config.page_options)) {
      if (typeof config.page_options === 'undefined') {
        config.page_options = [
        { value: 20, text: '20' },
        { value: 50, text: '50' },
        { value: 100, text: '100' },
        { value: 0, text: 'All' }
        ]
      }
      var options = config.page_options
      var select = document.createElement('select')
      for (var k = 0; k < options.length; k++) {
        var o = document.createElement('option')
        o.value = options[k].value
        o.text = options[k].text
        select.appendChild(o)
      }
      select.value = rowsperpage
      select.addEventListener('change', function () {
        config.rowsperpage = this.value
        self.paginator(config)
      }, false)
      box.appendChild(select)
    }
    var stat = document.createElement('span')
    stat.innerHTML = ' On page ' + page + ' of ' + pages + '. Total ' + trs.length + ' courses found.'
    box.appendChild(stat)
    if (config.disable) {
      if (typeof box['data-display'] === 'undefined') {
        box['data-display'] = box.style.display || ''
      }
      box.style.display = 'none'
    } else {
      if (box.style.display === 'none') {
        box.style.display = box['data-display'] || ''
      }
    }
    if (typeof config.tail_call === 'function') {
      config.tail_call(config)
    }
    return box
  }
