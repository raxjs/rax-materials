import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Link from 'rax-link';

import './index.css';

const Footer = () => {
  return (
    <View className="footer">
      <View className="links">
        <Link className="link" href="//m.taobao.com">底部链接</Link>
        <Text className="vertical">|</Text>
        <Link className="link" href="//m.taobao.com">底部链接</Link>
      </View>
      <Text className="copyright">© 2004-2020 TaoBao.com. All right reserved.</Text>
    </View>
  );
};

export default Footer;
