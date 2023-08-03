```js
// 设置 noRedirect 的时候该路由在面包屑导航中不可被点击
redirect: 'noRedirect'

// 动态路由：必须设定路由的名字，一定要填写不然重置路由可能会出问题
// 如果要在 tags-view 中展示，也必须填 name
name: 'router-name'

meta: {
// 设置该路由在侧边栏和面包屑中展示的名字
title: 'title'

// 设置该路由的图标，记得将 svg 导入 @/icons/svg
svgIcon: 'svg name'

// 设置该路由的图标，直接使用 Element Plus 的 Icon（与 svgIcon 同时设置时，svgIcon 将优先生效）
elIcon: 'element-plus icon name'

// 默认 false，设置 true 的时候该路由不会在侧边栏出现
hidden: true

// 设置该路由进入的权限，支持多个权限叠加（动态路由才需要设置）
roles: ['admin', 'editor']

// 默认 true，如果设置为 false，则不会在面包屑中显示
breadcrumb: false

// 默认 false，如果设置为 true，它则会固定在 tags-view 中
affix: true

// 当一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式
// 只有一个时，会将那个子路由当做根路由显示在侧边栏
// 若想不管路由下面的 children 声明的个数都显示你的根路由
// 可以设置 alwaysShow: true，这样就会忽略之前定义的规则，一直显示根路由
alwaysShow: true

// 示例: activeMenu: "/xxx/xxx"
// 当设置了该属性进入路由时，则会高亮 activeMenu 属性对应的侧边栏
// 该属性适合使用在有 hidden: true 属性的路由上
activeMenu: '/dashboard'


// 是否缓存该路由页面
// 默认为 false，为 true 时代表需要缓存，此时该路由和该页面都需要设置一致的 Name
keepAlive: false
}
```