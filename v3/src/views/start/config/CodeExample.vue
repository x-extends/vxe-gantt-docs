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
              gantt: {
                // size: null,
                // zoomConfig: {
                //   escRestore: true
                // },
                formConfig: {
                  enabled: true
                },
                pagerConfig: {
                  enabled: true
                  // perfect: false
                },
                toolbarConfig: {
                  enabled: true
                  // perfect: false
                },
                proxyConfig: {
                  enabled: true,
                  autoLoad: true,
                  showLoading: true,
                  showResponseMsg: true,
                  showActionMsg: true,
                  response: {
                    list: null,
                    result: 'result',
                    total: 'page.total',
                    message: 'message'
                  }
                  // beforeItem: null,
                  // beforeColumn: null,
                  // beforeQuery: null,
                  // afterQuery: null,
                  // beforeDelete: null,
                  // afterDelete: null,
                  // beforeSave: null,
                  // afterSave: null
                },
                taskBarTooltipConfig: {
                  enterable: true
                },
                taskLinkConfig: {
                  enabled: true,
                  isHover: true,
                  showArrow: true
                },
                taskViewScaleConfig: {
                  year: {
                    valueFormat: 'yyyy-MM-dd'
                  },
                  quarter: {
                    valueFormat: 'yyyy-MM-dd'
                  },
                  month: {
                    valueFormat: 'yyyy-MM-dd'
                  },
                  week: {
                    startDay: 1,
                    valueFormat: 'yyyy-MM-dd'
                  },
                  day: {
                    valueFormat: 'yyyy-MM-dd'
                  },
                  date: {
                    valueFormat: 'yyyy-MM-dd'
                  },
                  hour: {
                    valueFormat: 'yyyy-MM-dd HH:mm:ss'
                  },
                  minute: {
                    valueFormat: 'yyyy-MM-dd HH:mm:ss'
                  },
                  second: {
                    valueFormat: 'yyyy-MM-dd HH:mm:ss'
                  }
                },
                taskViewConfig: {
                  showNowLine: true,
                  gridding: {
                    leftSpacing: 1,
                    rightSpacing: 1
                  }
                },
                taskSplitConfig: {
                  enabled: true,
                  resize: true,
                  showCollapseTableButton: true,
                  showCollapseTaskButton: true
                },
                taskBarSubviewConfig: {
                  // showOverview: false
                }
              }
            })
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
