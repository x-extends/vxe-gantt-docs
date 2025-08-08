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
              // form-design
              FORM_DESIGN_STYLE_SETTING: vxe-icon-layout',
              FORM_DESIGN_PROPS_PC: vxe-icon-pc',
              FORM_DESIGN_PROPS_MOBILE: vxe-icon-mobile',
              FORM_DESIGN_PROPS_ADD: vxe-icon-add',
              FORM_DESIGN_PROPS_EDIT: vxe-icon-edit',
              FORM_DESIGN_WIDGET_ADD: vxe-icon-square-plus-fill',
              FORM_DESIGN_WIDGET_COPY: vxe-icon-copy',
              FORM_DESIGN_WIDGET_DELETE: vxe-icon-delete',
              FORM_DESIGN_WIDGET_SWAP_LR: vxe-icon-swap',
              FORM_DESIGN_WIDGET_OPTION_DELETE: vxe-icon-delete',
              FORM_DESIGN_WIDGET_OPTION_EXPAND_OPEN: vxe-icon-square-plus',
              FORM_DESIGN_WIDGET_OPTION_EXPAND_CLOSE: vxe-icon-square-minus',

              // list-design
              LIST_DESIGN_FIELD_SETTING: vxe-icon-custom-column',
              LIST_DESIGN_LIST_SETTING: vxe-icon-menu',
              LIST_DESIGN_LIST_SETTING_SEARCH_DELETE: vxe-icon-delete',
              LIST_DESIGN_LIST_SETTING_ACTIVE_DELETE: vxe-icon-delete'
            })
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
