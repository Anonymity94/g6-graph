import { Utils } from '@antv/graphin';
import React from 'react';
import G6Graph from './g6-graph';

const mockNodes = ['1.1.1.1', '2.2.2.2', '3.3.3.3', '4.4.4.4', '5.5.5.5'];

const data = Utils.mock(100).random().graphin();

const Layout = () => {
  return (
    <G6Graph
      // data={{
      //   nodes: mockNodes.map((nodeName) => ({
      //     id: nodeName,
      //     label: nodeName,
      //     style: { label: { value: nodeName } },
      //   })),
      //   edges: [
      //     {
      //       source: '5.5.5.5',
      //       target: '1.1.1.1',
      //     },
      //     {
      //       source: '3.3.3.3',
      //       target: '1.1.1.1',
      //     },
      //     {
      //       source: '2.2.2.2',
      //       target: '1.1.1.1',
      //     },
      //     {
      //       source: '4.4.4.4',
      //       target: '1.1.1.1',
      //     },
      //   ],
      // }}
      themeMode="dark"
      data={data}
    />
  );
};

export default Layout;
