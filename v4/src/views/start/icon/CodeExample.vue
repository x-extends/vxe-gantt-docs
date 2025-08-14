<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="自定义图标">
          通过调用 VxeUI.setIcon({ ... }) 方法可以全局替换组件内置的图标
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { VxeUI } from 'vxe-pc-ui'
            // VxeUI 是 Vxe 库通用全局实例

            VxeUI.setIcon({
              // gantt
              GANTT_VIEW_LEFT_OPEN: 'vxe-icon-arrow-left',
              GANTT_VIEW_LEFT_CLOSE: 'vxe-icon-arrow-right',
              GANTT_VIEW_RIGHT_OPEN: 'vxe-icon-arrow-right',
              GANTT_VIEW_RIGHT_CLOSE: 'vxe-icon-arrow-left'
            })
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
