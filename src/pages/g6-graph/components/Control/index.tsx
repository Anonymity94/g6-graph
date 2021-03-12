import {
  CompressOutlined,
  FullscreenOutlined,
  LayoutOutlined,
  OneToOneOutlined,
  SaveOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { GraphinContext } from '@antv/graphin';
import { ToolBarItemType } from '@antv/graphin-components/lib/Toolbar';
import { Popover, Radio, RadioChangeEvent, Tooltip } from 'antd';
import React from 'react';
import { GRAPHIN_CONTAINER_DOM_ID } from '../..';
import { saveAsImage } from '../../utils';
import useFullscreen from '../useFullscreen';
import styles from './index.less';
import { graphLayoutConfig } from './LayoutConfig';
import { EGraphLayoutType } from './typings';

const Control: React.FC<{
  layoutType: EGraphLayoutType;
  onLayoutChange: (type: EGraphLayoutType) => void;
}> = ({ layoutType, onLayoutChange }) => {
  const { apis, graph } = React.useContext(GraphinContext);
  const { handleZoomIn, handleZoomOut, handleAutoZoom, handleRealZoom } = apis;

  const graphinContainer = document.getElementById(
    GRAPHIN_CONTAINER_DOM_ID,
  ) as HTMLElement;
  const [fullscreen, toggleFullscreen] = useFullscreen(graphinContainer);

  const handleLayoutChange = (e: RadioChangeEvent) => {
    const nextLayout: EGraphLayoutType = e.target.value;
    onLayoutChange(nextLayout);
  };

  const CustomContent = () => {
    const options: ToolBarItemType[] = [
      {
        key: 'layout',
        name: <LayoutOutlined />,
        description: '可视化设置',
      },
      {
        key: 'fullscreen',
        name: fullscreen ? <FullscreenOutlined /> : <FullscreenOutlined />,
        description: fullscreen ? '还原' : '全屏',
        action: toggleFullscreen,
      },
      {
        key: 'zoomOut',
        name: <ZoomInOutlined />,
        description: '放大',
        action: () => {
          handleZoomOut();
        },
      },
      {
        key: 'zoomIn',
        name: <ZoomOutOutlined />,
        description: '缩小',
        action: () => {
          handleZoomIn();
        },
      },
      {
        key: 'one-to-one',
        name: <OneToOneOutlined />,
        description: '实际尺寸',
        action: () => {
          handleRealZoom();
        },
      },
      {
        key: 'compress',
        name: <CompressOutlined />,
        description: '适应画布',
        action: () => {
          handleAutoZoom();
        },
      },
      {
        key: 'save',
        name: <SaveOutlined />,
        description: '保存成图片',
        action: () => {
          // https://g6.antv.vision/zh/docs/api/graphFunc/download/#graphtofulldataurlcallback-type-imageconfig
          graph.toFullDataURL(
            // 第一个参数为 callback，必须
            (base64Url) => {
              saveAsImage(base64Url, 'png', 'graph');
            },
            // 后两个参数不是必须
            'image/png',
            {
              // 不传值时将导出透明背景的图片
              // backgroundColor: '#fff',
              padding: 10,
            },
          );
        },
      },
    ];
    return (
      <>
        {options.map((item) => {
          // 调整布局
          if (item.key === 'layout') {
            return (
              <Popover
                title="布局方案"
                placement="right"
                key={item.key}
                content={
                  <Radio.Group
                    value={layoutType}
                    className={styles.layoutSetting}
                    onChange={handleLayoutChange}
                  >
                    {graphLayoutConfig.map(({ type, title, icon: Icon }) => (
                      <Radio value={type} key={type}>
                        {<Icon />} {title}
                      </Radio>
                    ))}
                  </Radio.Group>
                }
              >
                <div className={styles.controlItem}>{item.name}</div>
              </Popover>
            );
          }
          return (
            <Tooltip placement="right" title={item.description} key={item.key}>
              <div className={styles.controlItem} onClick={item.action}>
                {item.name}
              </div>
            </Tooltip>
          );
        })}
      </>
    );
  };

  return (
    <div className={styles.controlWrap}>
      <CustomContent />
    </div>
  );
};

export default Control;
