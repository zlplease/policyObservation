<template>
  <div class="hello">
    <div class="test">
      <chineseMap @province_selected="selectProvince" 
                  @province_hovered="hoverProvince"
                  @coordinate="coordinate"
                  @leave="leave"
                  class="chineseMap">
      </chineseMap>
    </div>
    <div v-if="this.infoShow" class="provinceInfo" :style="{top: infoY + 'px', left: infoX + 'px'}">
      hhh
    </div>
  </div>
</template>

<script>
import chineseMap from '../components/map.vue'
export default {
  name: 'HelloWorld',
  components: {
    chineseMap
  },
  data () {
    return {
      infoShow: false,
      infoX: 0,
      infoY: 0
    }
  },
  methods: {
    selectProvince(data) {
      // console.log(data)
    },
    hoverProvince(data) {
      this.infoShow = true
    },
    coordinate(x, y) {
      this.infoX = x
      this.infoY = y
    },
    leave() {
      this.infoShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.hello {
  .test {
    color: aqua;
  }
  .chineseMap {
    width: 800px;
  }
  .provinceInfo {
    width: 100px;
    height: 40px;
    // background-color: aqua;
    border-radius: 20px;
    position: absolute;
  }
}
</style>
