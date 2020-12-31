import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ScrollView from 'rax-scrollview';
import Picture from 'rax-picture';
import styles from './index.module.css';

const DetailForm = () => {
  return (
    <ScrollView className={styles.page}>
      <View className={styles.sectionTitle}>基本信息</View>
      <View className={styles.sectionContainer}>
        <View className={styles.sectionItem} style={{ height: '107.5rpx' }}>
          <View className={styles.sectionItemLeft}>
            <Text className={styles.sectionItemLeftText}>实人认证</Text>
          </View>
          <View className={styles.sectionItemRight}>
            <Text className={styles.sectionItemRightText} numberOfLines={1}>
              已认证成功
            </Text>
          </View>
        </View>
        <View className={styles.sectionItem} style={{ height: '107.5rpx' }}>
          <View className={styles.sectionItemLeft}>
            <Text className={styles.sectionItemLeftText}>身份类型</Text>
          </View>
          <View className={styles.sectionItemRight}>
            <Text className={styles.sectionItemRightText} numberOfLines={1}>
              美妆主播
            </Text>
          </View>
        </View>
        <View className={styles.sectionItem} style={{ height: '107.5rpx' }}>
          <View className={styles.sectionItemLeft}>
            <Text className={styles.sectionItemLeftText}>细分类型</Text>
          </View>
          <View className={styles.sectionItemRight}>
            <Text className={styles.sectionItemRightText} numberOfLines={1}>
              视频教程类美妆
            </Text>
          </View>
        </View>
        <View className={styles.sectionItem} style={{ height: '107.5rpx' }}>
          <View className={styles.sectionItemLeft}>
            <Text className={styles.sectionItemLeftText}>认证说明</Text>
          </View>
          <View className={styles.sectionItemRight}>
            <Text className={styles.sectionItemRightText} numberOfLines={1}>
              知名美妆主播
            </Text>
          </View>
        </View>
        <View className={styles.sectionItem}>
          <View className={styles.sectionItemLeft}>
            <Text className={styles.sectionItemLeftText}>职业证明材料</Text>
          </View>
          <View className={styles.section}>
            <Picture className={styles.pic} source={{ uri: 'https://img.alicdn.com/imgextra/i3/O1CN019K6xhr1Dy78A13l40_!!6000000000284-2-tps-152-152.png' }} />
            <Picture className={styles.pic} source={{ uri: 'https://img.alicdn.com/imgextra/i3/O1CN010MIGML1ZCrou55eqO_!!6000000003159-2-tps-152-152.png' }} />
          </View>
        </View>
      </View>
      <View className={styles.sectionTitle}>运营平台信息</View>
      <View className={styles.sectionContainer}>
        <View className={styles.sectionItem} style={{ height: '107.5rpx' }}>
          <View className={styles.sectionItemLeft}>
            <Text className={styles.sectionItemLeftText}>运营平台名称</Text>
          </View>
          <View className={styles.sectionItemRight}>
            <Text className={styles.sectionItemRightText} numberOfLines={1}>
              哔哩哔哩
            </Text>
          </View>
        </View>
        <View className={styles.sectionItem} style={{ height: '107.5rpx' }}>
          <View className={styles.sectionItemLeft}>
            <Text className={styles.sectionItemLeftText}>平台主页链接</Text>
          </View>
          <View className={styles.sectionItemRight}>
            <Text className={styles.sectionItemRightText} numberOfLines={1}>
              https://m.taobao.com
            </Text>
          </View>
        </View>
        <View className={styles.sectionItem} style={{ height: '107.5rpx' }}>
          <View className={styles.sectionItemLeft}>
            <Text className={styles.sectionItemLeftText}>擅长内容方向</Text>
          </View>
          <View className={styles.sectionItemRight}>
            <Text className={styles.sectionItemRightText} numberOfLines={1}>
              海鲜类美食分享
            </Text>
          </View>
        </View>
        <View className={styles.sectionItem} style={{ height: '107.5rpx' }}>
          <View className={styles.sectionItemLeft}>
            <Text className={styles.sectionItemLeftText}>平台粉丝数量</Text>
          </View>
          <View className={styles.sectionItemRight}>
            <Text className={styles.sectionItemRightText} numberOfLines={1}>
              23,468,693
            </Text>
          </View>
        </View>
        <View className={styles.sectionItem} style={{ height: '107.5rpx' }}>
          <View className={styles.sectionItemLeft}>
            <Text className={styles.sectionItemLeftText}>平台作品数量</Text>
          </View>
          <View className={styles.sectionItemRight}>
            <Text className={styles.sectionItemRightText} numberOfLines={1}>
              456
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailForm;
