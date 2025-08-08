import XEUtils from 'xe-utils'
import { NavVO, otherUrl } from './nav'
import { ganttNavConfig } from './gantt'

XEUtils.eachTree(ganttNavConfig.children.slice(0, 1), (item, index, items, path, parent, nodes) => {
  if (nodes.length <= 2) {
    item.isExpand = true
  }
})

export const navConfigList: NavVO[] = [
  {
    i18nKey: 'app.aside.menu.guide',
    isExpand: true,
    children: [
      {
        i18nKey: 'app.aside.menu.fullInsrall',
        isExpand: true,
        children: [
          { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartUIInstall' } },
          { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartUIUseGlobal' } },
          { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartUIUseImport' } },
          { i18nKey: 'app.aside.menu.useGlobalCDN', routerLink: { name: 'StartUICDN' } },
          { title: '后台管理系统模板', isTemplate: true, linkUrl: 'https://vxeui.com/admin-template/' }
        ]
      },
      {
        i18nKey: 'app.aside.menu.useTableInsrall',
        children: [
          { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartTableInstall' } },
          { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartTableUseGlobal' } },
          { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartTableUseImport' } },
          { i18nKey: 'app.aside.menu.useGlobalCDN', routerLink: { name: 'StartTableCDN' } },
          { title: '使用第三方 UI 库', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/edit/el-input` }
        ]
      },
      {
        i18nKey: 'app.aside.menu.useDesignInsrall',
        children: [
          { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartDesignInstall' } },
          { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartDesignUseGlobal' } },
          { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartDesignUseImport' } },
          { i18nKey: 'app.aside.menu.useGlobalCDN', routerLink: { name: 'StartDesignCDN' } },
          { title: '使用第三方 UI 库', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form-design/renderView` },
          { title: '可视化设计器模板', isTemplate: true, linkUrl: 'https://vxeui.com/design-template/' }
        ]
      },
      {
        i18nKey: 'app.aside.menu.useGanttInsrall',
        children: [
          { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartGanttInstall' } },
          { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartGanttUseGlobal' } },
          { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartGanttUseImport' } },
          { i18nKey: 'app.aside.menu.useGlobalCDN', routerLink: { name: 'StartGanttCDN' } }
        ]
      },
      { i18nKey: 'app.aside.menu.globalConfig', routerLink: { name: 'StartConfig' } },
      { i18nKey: 'app.aside.menu.globalTheme', routerLink: { name: 'StartTheme' } },
      { i18nKey: 'app.aside.menu.globalIcon', routerLink: { name: 'StartIcons' } },
      { i18nKey: 'app.aside.menu.globalZIndex', routerLink: { name: 'StartUseZIndex' } },
      { i18nKey: 'app.aside.menu.i18n', routerLink: { name: 'StartI18n' } },
      { i18nKey: 'app.aside.menu.globalPermission', routerLink: { name: 'StartPermission' } }
    ]
  },
  {
    i18nKey: 'app.aside.menu.tools',
    children: [
      { i18nKey: 'app.aside.menu.clipboard', routerLink: { name: 'ToolClipboard' } },
      { i18nKey: 'app.aside.menu.functions', linkUrl: 'https://vxeui.com/xe-utils/' }
    ]
  },
  ...ganttNavConfig.children,
  {
    title: 'API',
    isExpand: true,
    children: []
  }
]
