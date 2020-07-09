<template>
  <div @click="$router.push('/postData/'+postData.id)">
    <!-- 三种文章类型区分方式，数据中 type 如果是1就是普通文章
    按照 cover 属性的长度，如果小于三，就显示一张图片的格式
    -->
    <div  class="singleImg" v-if="postData.type==1 && (postData.cover.length<3&&postData.cover.length>0)">
      <div class="left">
        <div class="title">{{postData.title}}</div>
        <div class="info">{{postData.user.nickname}} 
          {{postData.comment_length}}跟帖</div>
      </div>
      <img :src="postData.cover[0].url | fixImgUrl" alt class="rigth" />
    </div>


    <div class="multiImg" v-if="postData.type==1 && postData.cover.length>=3">
      <div class="title">
        {{postData.title}}
      </div>
      <div class="imgs">
        <img :src="postData.cover[0].url | fixImgUrl" alt="">
        <img :src="postData.cover[1].url | fixImgUrl" alt="">
        <img :src="postData.cover[2].url | fixImgUrl" alt="">
      </div>
      <div class="info">
        {{postData.user.nickname}}  {{postData.comment_length}}跟帖
      </div>
    </div>


    <div class="video" v-if="postData.type==2">
      <div class="title">{{postData.title}}</div>
      <div class="coverWrapper">
        <img :src="postData.cover[0].url | fixImgUrl" alt="">
        <div class="iconfont iconshipin bofang"></div>
      </div>
      <div class="info">
        {{postData.user.nickname}}  {{postData.comment_length}}跟帖
      </div>
    </div>
    
  </div>
  </div>
</template>

<script>
export default {
  props: ['postData'],
  
}
</script>

<style lang="less" scoped>
.singleImg {
  display: flex;
  padding: 4.444vw 2.778vw;
  border-bottom: 1px solid #e4e4e4;
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .title {
      font-size: 3.889vw;
    }
    .info {
      font-size: 3.333vw;
     
    }
  }
  .rigth {
    width: 33.333vw;
    height: 20.556vw;
    object-fit: cover;
  }
}
.multiImg{
  padding: 16px 10px;
  border-bottom: 1px solid #e4e4e4;
  .title{
    font-size: 16px;
  }
  .imgs {
    display: flex;
    justify-content: space-between;
    padding: 4px 0 8px;

    img {
      width: 33%;
      height: 70px;
    }
  }
  .info {
    font-size: 14px;
    color: #888;
  }
}
.video{
  padding: 4.444vw 2.778vw;
  .title {
    font-size: 3.889vw;
  }
  .coverWrapper {
    position: relative;
    img{
      width: 100%;
      object-fit: cover;
    }
    .bofang{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 8.333vw;
      height: 8.333vw;
      font-size: 8.333vw;
      color: white;
      text-align: center;
      background:rgba(255, 255, 255, 0.3);
      border-radius: 8.333vw;
    }
  }
  .info {
    font-size: 3.333vw;
  }
}
</style>