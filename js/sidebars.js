var detailVue = new Vue({
      el: '#detail',
      data: {
        item: null,
        structure: null,
        page: 0,
        id: null
      },
      // computed: {
      //   structure: function () {
      //     return config.detail.structure
      //   }
      // },
      methods: {
        displayPage: function(page){
          list.changePage(this.id, page)
        },
        hasData: function(entry){
          return this.item[entry.source] !== '' && this.item[entry.source] !== undefined
        },
        getContent: function(entry) {
          if(entry.type === 'text') {
            return this.item[entry.source]
          }
          if(entry.type === 'array') {
            return this.item[entry.source].join(', ')
          }
          if(entry.type === 'keywords') {
            return this.item[entry.source].join(', ')
          }
          if(entry.type === 'function') {
            const column = this.item
            const func = entry.source
            try {
              return eval(func)
            } catch (e) {
              return 'Error'
            }
          }
        }
      },
      mounted: function() {
          console.log('vue')
      }
    })
  window.detailVue = detailVue;

  var infoVue = new Vue({
      el: '#infobar',
      data: {
        info: ""
      },
      methods: {
        marked: function(input) {
          return marked(input);
        }
      }
    })
  window.infoVue = infoVue;