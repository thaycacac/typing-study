<template lang="html">
  <div class="loading-page" v-if="loading">
    <div class="loading">
    <span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span></span></span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  }
};
</script>

<style scoped lang = 'sass'>
.loading-page
  position: fixed
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.5)
  text-align: center
  font-size: 30px
  font-family: sans-serif
  z-index: 999
.loading
  color: white
  height: 160px
  width: 160px
  margin: 0 auto
  margin-top: 10%
  border-radius: 50%
  text-align: center
.loading span
  display: block
  height: 89%
  width: 89%
  border: 1px solid transparent
  border-top: 1px solid rgba(255, 255, 255, 0.5)
  border-radius: 50%
@for $i from 1 through 16
  .loading span:nth-child(#{$i})
    -webkit-animation: spin #{1 + ($i * 0.89)}s infinite linear
@-webkit-keyframes spin
  0%
    -webkit-transform: rotate(0deg)
  100%
    -webkit-transform: rotate(360deg)
</style>
