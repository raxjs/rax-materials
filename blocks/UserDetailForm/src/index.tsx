import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ScrollView from 'rax-scrollview';
import Picture from 'rax-picture';

import './index.css';

const DetailForm = () => {
  return (
    <ScrollView
      className="page"
    >
      <View className="section-title">基本信息</View>
      <View className="section-container">
        <View className="section-item" style={{ height: '107.5rpx' }}>
          <View className="section-item-left">
            <Text className="section-item-left-text">实人认证</Text>
          </View>
          <View className="section-item-right">
            <Text className="section-item-right-text" numberOfLines={1}>
              已认证成功
            </Text>
          </View>
        </View>
        <View className="section-item" style={{ height: '107.5rpx' }}>
          <View className="section-item-left">
            <Text className="section-item-left-text">身份类型</Text>
          </View>
          <View className="section-item-right">
            <Text className="section-item-right-text" numberOfLines={1}>
              美妆主播
            </Text>
          </View>
        </View>
        <View className="section-item" style={{ height: '107.5rpx' }}>
          <View className="section-item-left">
            <Text className="section-item-left-text">细分类型</Text>
          </View>
          <View className="section-item-right">
            <Text className="section-item-right-text" numberOfLines={1}>
              视频教程类美妆
            </Text>
          </View>
        </View>
        <View className="section-item" style={{ height: '107.5rpx' }}>
          <View className="section-item-left">
            <Text className="section-item-left-text">认证说明</Text>
          </View>
          <View className="section-item-right">
            <Text className="section-item-right-text" numberOfLines={1}>
              知名美妆主播
            </Text>
          </View>
        </View>
        <View className="section-item">
          <View className="section-item-left">
            <Text className="section-item-left-text">职业证明材料</Text>
          </View>
          <View className="section-item-img-list">
            {/* <Text className="section-item-right-text" numberOfLines={1}>
              知名美妆主播
            </Text> */}
            <Picture className="pic" source={{ uri: 'https://img.alicdn.com/imgextra/i3/O1CN019K6xhr1Dy78A13l40_!!6000000000284-2-tps-152-152.png' }} />
            <Picture className="pic" source={{ uri: 'https://img.alicdn.com/imgextra/i3/O1CN010MIGML1ZCrou55eqO_!!6000000003159-2-tps-152-152.png' }} />
          </View>
        </View>
      </View>
      <View className="section-title">运营平台信息</View>
      <View className="section-container">
        <View className="section-item" style={{ height: '107.5rpx' }}>
          <View className="section-item-left">
            <Text className="section-item-left-text">运营平台名称</Text>
          </View>
          <View className="section-item-right">
            <Text className="section-item-right-text" numberOfLines={1}>哔哩哔哩</Text>
          </View>
        </View>
        <View className="section-item" style={{ height: '107.5rpx' }}>
          <View className="section-item-left">
            <Text className="section-item-left-text" >平台主页链接</Text>
          </View>
          <View className="section-item-right">
            <Text className="section-item-right-text" numberOfLines={1}>https://m.taobao.com</Text>
          </View>
        </View>
        <View className="section-item" style={{ height: '107.5rpx' }}>
          <View className="section-item-left">
            <Text className="section-item-left-text">擅长内容方向</Text>
          </View>
          <View className="section-item-right">
            <Text className="section-item-right-text" numberOfLines={1}>海鲜类美食分享</Text>
          </View>
        </View>
        <View className="section-item" style={{ height: '107.5rpx' }}>
          <View className="section-item-left">
            <Text className="section-item-left-text">平台粉丝数量</Text>
          </View>
          <View className="section-item-right">
            <Text className="section-item-right-text" numberOfLines={1}>23,468,693</Text>
          </View>
        </View>
        <View className="section-item" style={{ height: '107.5rpx' }}>
          <View className="section-item-left">
            <Text className="section-item-left-text">平台作品数量</Text>
          </View>
          <View className="section-item-right">
            <Text className="section-item-right-text" numberOfLines={1}>456</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailForm;
