<template>
  <div class="btn">
    <button @click="hanClick" class="fr">{{btnText}}</button>
  </div>
</template>

<script>
export default {
  props: ['btnText'],
  methods: {
    hanClick() {
      // console.log('按钮子组件被处罚');
      this.$emit('clicked')
  
    }
  }
}
</script>
<style lang="less" scoped>
.btn {
  width: 100vw;
  height: 13.333vw;
  display: flex;
  box-sizing: border-box;
}
.btn button {
  flex: 1;
  width: 317.999px;
  height: 47.999px;
  border-radius: 6.944vw;
  outline: none;
  background-color: #a0c5e8;
  color: white;
  border: 0;
  font-size: 4.444vw;
  cursor: pointer;
  margin: 6.944vw;
  // -webkit-tap-highlight-color: transparent;
}
</style>