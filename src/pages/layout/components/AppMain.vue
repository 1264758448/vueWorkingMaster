<template>

<div>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </section>

</div>

</template>

<script>
export default {
  name: 'AppMain',
      data() {
      return {

        sizeForm: {
          name: ''
        },
        // 控制操作页显示或者隐藏
        flag:true,

      // 下拉
        options:[
          {value: '选项1',
          label: '可用'},
           {value: '选项2',
          label: '禁用'},
        ],
        value: ''

      };
    },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  },
  methods: {
     onSubmit() {
        console.log('submit!');
      },

  },
}
</script>

<style scoped>
*{
  list-style: none;
}
.app-main {
  /*84 = navbar + tags-view = 50 +34 */
  min-height: calc(100vh - 84px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.query{
  margin:auto;
  width:80%;
}
.query li{
    width:100%;
}
.query .chose {
  margin-bottom:10px;
  padding-left:10px;
}
.query .chose span{
    width:20%;

}
.query .chose div{
    width:80%;
    margin-left:10px;
}
.query .chose input{
    width:100%;
    height:28px;
}
</style>
