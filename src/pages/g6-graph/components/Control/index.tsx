import {
  CompressOutlined,
  FullscreenOutlined,
  LayoutOutlined,
  OneToOneOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { GraphinContext } from '@antv/graphin';
import { ToolBarItemType } from '@antv/graphin-components/lib/Toolbar';
import { Popover, Radio, RadioChangeEvent, Tooltip } from 'antd';
import React from 'react';
import styles from './index.less';
import { graphLayoutConfig } from './LayoutConfig';
import { EGraphLayoutType } from './typings';

const Control: React.FC<{
  layoutType: EGraphLayoutType;
  onLayoutChange: (type: EGraphLayoutType) => void;
}> = ({ layoutType, onLayoutChange }) => {
  const { apis, graph } = React.useContext(GraphinContext);
  const { handleZoomIn, handleZoomOut, handleAutoZoom, handleRealZoom } = apis;

  const handleLayoutChange = (e: RadioChangeEvent) => {
    const nextLayout: EGraphLayoutType = e.target.value;
    onLayoutChange(nextLayout);
  };

  const CustomContent = () => {
    console.log(graph);
    const options: ToolBarItemType[] = [
      {
        key: 'layout',
        name: <LayoutOutlined />,
        description: '可视化设置',
      },
      {
        key: 'fullscreen',
        name: <FullscreenOutlined />,
        description: '全屏',
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
