<template>
  <div class="card">
    <h2>1. Vant Button 按钮</h2>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button plain>朴素按钮</van-button>
    <van-button round>圆角按钮</van-button>
    <van-button disabled>禁用按钮</van-button>
  </div>

  <div class="card">
    <h2>2. Vant Form 表单</h2>
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="username" label="用户名" placeholder="请输入用户名" clearable />
      <van-field v-model="password" name="password" label="密码" type="password" placeholder="请输入密码" show-password />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'VantDemo',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit(values) {
      console.log('表单数据：', values)
      alert('提交成功，查看控制台')
    }
  }
}
</script>
