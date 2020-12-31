import React, { useCallback, useState } from "react";
import { Button, View } from "@tarojs/components";
import "./index.less";

const Index = () => {
  const [files] = useState([]);

  const onButtonClick = useCallback(() => {
    console.log(123);
  }, []);

  const onAfterRead = useCallback(({ detail: { file } }) => {
    console.log(file);
  }, []);

  return (
    <View className='index'>
      {/* taro组件 */}
      <Button onClick={onButtonClick}>点击</Button>

      {/* 第三方原生组件 */}
      <van-button type='primary' onClick={onButtonClick}>
        点击
      </van-button>
      <View />
      <van-uploader fileList={files} onAfterRead={onAfterRead} />
    </View>
  );
};

export default Index;
