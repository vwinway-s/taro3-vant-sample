# taro3-vant-sample
第三方原生组件试用


``` jsx
// 当前写法
<van-uploader fileList={files} onAfterRead={onAfterRead} />

// 生成结果
<van-uploader bindafterread="onAfterRead" />

// 期望生成
<van-uploader bind:after-read="onAfterRead" />
```
