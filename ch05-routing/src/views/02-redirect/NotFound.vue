<template>
  <div class="page">
    <h2>😵 404｜页面不存在</h2>
    <p>你访问的地址是：<code>{{ $route.fullPath }}</code></p>
    <p class="muted">路由表里从上往下找不到能匹配的规则，最后落到我这条通配符路由上。</p>
    <router-link to="/home">回首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
