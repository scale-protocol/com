import Vue from 'vue'
// import Element from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'

/**
 * 按需引入 element-ui 组件
 */
import {
  // Pagination,
  Dialog,
  // Autocomplete,
  // Dropdown,
  // DropdownMenu,
  // DropdownItem,
  // Menu,
  // Submenu,
  // MenuItem,
  // MenuItemGroup,
  Input,
  // InputNumber,
  // Radio,
  // RadioGroup,
  // RadioButton,
  // Checkbox,
  // CheckboxButton,
  // CheckboxGroup,
  // Switch,
  // Select,
  // Option,
  // OptionGroup,
  Button,
  // ButtonGroup,
  Table,
  TableColumn,
  // DatePicker,
  // TimeSelect,
  // TimePicker,
  // Popover,
  // Tooltip,
  // Breadcrumb,
  // BreadcrumbItem,
  // Form,
  // FormItem,
  // Scrollbar,
  // Tabs,
  // TabPane,
  // Tag,
  // Tree,
  // Alert,
  // Slider,
  // Icon,
  // Row,
  // Col,
  // Upload,
  // Progress,
  // Badge,
  // Card,
  // Rate,
  // Steps,
  // Step,
  // Carousel,
  // CarouselItem,
  // Collapse,
  // CollapseItem,
  // Cascader,
  // ColorPicker,
  // Transfer,
  // Container,
  // Header,
  // Aside,
  // Main,
  // Footer,
  // Loading,
  // MessageBox,
  Message
  // Notification
} from 'element-ui'

// 组装成 mui 套件
const mui = {
  // 'm-radio': Radio,
  // 'm-radio-group': RadioGroup,
  // 'm-badge': Badge,
  'm-dialog': Dialog,
  // 'm-menu': Menu,
  // 'm-submenu': Submenu,
  // 'm-menu-item': MenuItem,
  // 'm-checkbox': Checkbox,
  // 'm-checkbox-group': CheckboxGroup,
  'm-input': Input,
  // 'm-input-number': InputNumber,
  'm-button': Button,
  // 'm-switch': Switch,
  // 'm-form': Form,
  // 'm-form-item': FormItem,
  // 'm-select': Select,
  // 'm-cascader': Cascader,
  // 'm-option': Option,
  // 'm-tabs': Tabs,
  // 'm-tab-pane': TabPane,
  // 'm-upload': Upload,
  // 'el-scrollbar': Scrollbar,
  // 'm-row': Row,
  // 'm-col': Col,
  'm-table': Table,
  'm-table-column': TableColumn
  // 'm-date-picker': DatePicker,
  // 'm-tree': Tree,
  // 'm-modal': Modal,
  // 'm-alert': Alert,
  // 'm-collapse': Collapse,
  // 'm-collapse-item': CollapseItem,
  // 'm-popover': Popover
  // 'm-pagination': Pagination
}
// Object.defineProperty(Vue.prototype, '$message', { value: Message })
Vue.prototype.$message = Message

export default () => {
  // Vue.use(Element, { locale })

  // element-ui 的 loading 指令，用于在组件中使用“v-loading”来实现菊花加载
  // Vue.use(Loading.directive)

  Object.keys(mui).forEach((key) => {
    Vue.component(key, mui[key])
  })
}
// import Element from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'

// Vue.use(Element, { locale })
