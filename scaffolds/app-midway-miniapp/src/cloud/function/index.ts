import cloud from 'wx-server-sdk';

export const hello = async (frontend: string, backend: string) => {
  return `Hello ${frontend} & ${backend} at Wechat`;
};

export const getOpenId = async () => {
  const wechatContext = cloud.getWXContext();

  return {
    openId: wechatContext.OPENID,
  };
};
