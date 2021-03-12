/**
 * 下载图片
 * @param url base64地址
 * @param type 保存图片文件的格式 png | svg
 * @param title 保存图片文件的名称
 *
 * @todo: 兼容IE和老Edge
 * @see: https://github1s.com/apache/echarts/blob/HEAD/src/component/toolbox/feature/SaveAsImage.ts
 */
export const saveAsImage = (
  url: string,
  type: 'png' | 'svg',
  title: string,
) => {
  const $a = document.createElement('a');
  $a.download = title + '.' + type;
  $a.target = '_blank';
  $a.href = url;
  const evt = new MouseEvent('click', {
    // some micro front-end framework， window maybe is a Proxy
    view: document.defaultView,
    bubbles: true,
    cancelable: false,
  });
  $a.dispatchEvent(evt);
};
