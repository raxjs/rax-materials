import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ScrollView from 'rax-scrollview';
import './index.css';

const DetailForm = () => {
  return (
    <ScrollView
      className="page"
    >
      <View className="section-title">
        <Text style={{
          fontSize: '32rpx',
          color: '#111111',
          fontWeight: 'bold',
        }}
        >
          基本信息
        </Text>
      </View>
      <View className="section-container">
        <View className="section-item" style={{ height: '107.5rpx' }}>
          <View className="section-item-left">
            <Text className="section-item-left-text">身份类型</Text>
          </View>
          <View className="section-item-right">
            <Text className="section-item-right-text" numberOfLines={1}>
              111
            </Text>
          </View>
        </View>
        <View className="section-item" style={{ height: '107.5rpx' }}>
          <View className="section-item-left">
            <Text className="section-item-left-text">认证说明</Text>
          </View>
          <View className="section-item-right">
            <Text className="section-item-right-text" numberOfLines={1}>
              111
            </Text>
          </View>
        </View>
        {/* <View className="condition-line" /> */}
      </View>
      <View className="section-title">
        <Text style={{
          fontSize: '32rpx',
          color: '#111111',
          fontWeight: 'bold',
        }}
        >
          联系方式
        </Text>
      </View>
      <View className="section-container">
        <View className="section-item" style={{ height: '107.5rpx' }}>
          <View className="section-item-left">
            <Text className="section-item-left-text">联系人姓名</Text>
          </View>
          <View className="section-item-right">
            <Text className="section-item-right-text" numberOfLines={1}>111</Text>
          </View>
        </View>
        {/* <View className="condition-line" /> */}
        <View className="section-item" style={{ height: '107.5rpx' }}>
          <View className="section-item-left">
            <Text className="section-item-left-text" >联系人电话</Text>
          </View>
          <View className="section-item-right">
            <Text className="section-item-right-text" numberOfLines={1}>11</Text>
          </View>
        </View>
        {/* <View className="condition-line" /> */}
        <View className="section-item" style={{ height: '107.5rpx' }}>
          <View className="section-item-left">
            <Text className="section-item-left-text">联系人微信</Text>
          </View>
          <View className="section-item-right">
            <Text className="section-item-right-text" numberOfLines={1}>111</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailForm;
