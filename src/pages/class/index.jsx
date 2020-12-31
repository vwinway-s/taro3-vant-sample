import React, { Component } from "react";
import { View } from "@tarojs/components";

class ClassPage extends Component {
  state = { files: [] };

  onButtonClick() {
    console.log(123);
  }

  onAfterRead({ detail: { file } }) {
    console.log(file);
  }

  render() {
    const { files } = this.state;

    return (
      <View className='class'>
        <van-button type='primary' onClick={this.onButtonClick.bind(this)}>
          点击
        </van-button>
        <View />
        <van-uploader fileList={files} onAfterRead={this.onAfterRead.bind(this)} />
      </View>
    );
  }
}

export default ClassPage;
