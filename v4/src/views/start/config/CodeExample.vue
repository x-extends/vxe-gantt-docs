<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary">
          通过调用 setConfig({ ... }) 方法可以给组件设置全局默认参数
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { VxeUI } from 'vxe-pc-ui'
            // VxeUI 是 Vxe 库通用全局实例

            VxeUI.setConfig({
              formDesign: {
                height: 400,
                showHeader: true,
                showPc: true
              },
              formView: {},
              listDesign: {
                height: 400,
                showPc: true
              },
              listView: {}
            })
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
