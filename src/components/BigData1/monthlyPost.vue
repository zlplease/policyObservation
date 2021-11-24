<template>
  <div>
    你好，这个页面用来统计数据，如果你以神奇的方法进来了，可以看一看monthlyPost.vue中生命函数写的方法来理解这个页面做了什么。
  </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },
  mounted: function () {
    this.axios.get('http://39.103.169.155:8080/policy/getAll', {
      params: {
        province: "福建"
      }
    })
      .then(res => {
        console.log(res)
      })
  },

}

</script>
<style lang='scss' scoped>
</style>