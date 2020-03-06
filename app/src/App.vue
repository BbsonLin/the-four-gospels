<template>
  <b-container id="app" fluid>
    <b-jumbotron>
      <h2 class="text-left font-weight-bold">四福音書</h2>
      <h6 class="text-left">-- Made by Bobson Lin</h6>
    </b-jumbotron>
    <b-card no-body>
      <template v-slot:header>
        <h4 class="mb-0 text-left">四福音書文字頻率</h4>
      </template>
      <b-tabs card>
        <b-tab title="文字雲" active>
          <div class="row">
            <div class="col-sm-6 py-2">
              <h5 class="py-2">馬太福音</h5>
              <b-img
                alt="Matthew WordCloud"
                src="https://raw.githubusercontent.com/BbsonLin/the-four-gospels/master/uploads/cnt/matthew_wc_100.png"
                fluid
              />
            </div>
            <div class="col-sm-6 py-2">
              <h5 class="py-2">馬可福音</h5>
              <b-img
                alt="Mark WordCloud"
                src="https://raw.githubusercontent.com/BbsonLin/the-four-gospels/master/uploads/cnt/mark_wc_100.png"
                fluid
              />
            </div>
            <div class="col-sm-6 py-2">
              <h5 class="py-2">路加福音</h5>
              <b-img
                alt="Luke WordCloud"
                src="https://raw.githubusercontent.com/BbsonLin/the-four-gospels/master/uploads/cnt/luke_wc_100.png"
                fluid
              />
            </div>
            <div class="col-sm-6 py-2">
              <h5 class="py-2">約翰福音</h5>
              <b-img
                alt="John WordCloud"
                src="https://raw.githubusercontent.com/BbsonLin/the-four-gospels/master/uploads/cnt/john_wc_100.png"
                fluid
              />
            </div>
          </div>
        </b-tab>
        <b-tab title="統計表格" lazy>
          <div class="row">
            <div class="col-sm-6 py-2 ">
              <h5 class="py-2">馬太福音</h5>
              <div class="b-table-sticky-header" v-html="matthewHtml"></div>
            </div>
            <div class="col-sm-6 py-2">
              <h5 class="py-2">馬可福音</h5>
              <div class="b-table-sticky-header" v-html="markHtml"></div>
            </div>
            <div class="col-sm-6 py-2">
              <h5 class="py-2">路加福音</h5>
              <div class="b-table-sticky-header" v-html="lukeHtml"></div>
            </div>
            <div class="col-sm-6 py-2">
              <h5 class="py-2">約翰福音</h5>
              <div class="b-table-sticky-header" v-html="johnHtml"></div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  methods: {
    async fetchTable(gospel) {
      let resp = await axios.get(
        `https://raw.githubusercontent.com/BbsonLin/the-four-gospels/master/uploads/cnt/${gospel}_stats.html`
      )
      console.log(resp)
      return resp.data
    }
  },
  data() {
    return {
      matthewHtml: '',
      markHtml: '',
      lukeHtml: '',
      johnHtml: ''
    }
  },
  async mounted() {
    this.matthewHtml = await this.fetchTable('matthew')
    this.markHtml = await this.fetchTable('mark')
    this.lukeHtml = await this.fetchTable('luke')
    this.johnHtml = await this.fetchTable('john')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.table-fixed tbody {
  height: 300px;
  overflow-y: auto;
  width: 100%;
}
</style>
