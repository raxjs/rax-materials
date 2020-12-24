import { createElement, useState } from 'rax';
import Modal from 'rax-modal';
import View from 'rax-view';
import Text from 'rax-text';
import Picture from 'rax-picture';

import './index.css';

const ConfirmModal = () => {
  const [visible, setVisible] = useState(true);

  const handleConfirmSwitch = () => {
    console.log('confirm');
  };

  const handleModalClose = () => {
    setVisible(false);
  };
  return (
    <Modal
      visible={visible}
      onMaskClick={handleModalClose}
      contentStyle={{
        position: 'fixed',
        width: '512rpx',
        top: '100rpx',
        height: '704rpx',
        left: '119rpx',
        display: 'flex',
        flexDirection: 'column',
        background: 'none',
        zIndex: 100,
        alignItems: 'center',
      }}
    >
      <View className="modal">
        <View className="content">
          <Picture className="picture" source={{ uri: 'https://img.alicdn.com/tfs/TB182FN37Y2gK0jSZFgXXc5OFXa-268-147.png' }} />
          <Text className="text">邀请你一起参加只逛淘宝不还钱挑战，最终大奖可赢iPhone12</Text>
          <View className="confirm" onClick={handleConfirmSwitch}>确认</View>
          <View className="cancel" onClick={handleModalClose}>取消</View>
        </View>
        <Picture className="close-icon" onClick={handleModalClose} source={{ uri: 'https://gw.alicdn.com/tfs/TB1wL2t11L2gK0jSZFmXXc7iXXa-120-120.png' }} />
      </View>
    </Modal>
  );
};

export default ConfirmModal;
