<template>
    <div class="auth">
      <div class="title-info">
        <div class="logo">
          <img src="../../../../../images/logo.png" alt="">
        </div>
        <h1 class="title">
            毕业论文管理系统
        </h1>
      </div>
      <div class="content">
        <div class="from">
          <a-tabs>
            <a-tab-pane key="1" tab="登陆">
              <div class="item">
                <a-input size="large" placeholder="学号/教师号">
                  <template #prefix>
                    <UserOutlined />
                  </template>
                </a-input>
              </div>
              <div class="item">
                <!-- <a-input-password  placeholder="密码" /> -->
                <a-input size="large" placeholder="密码">
                  <template #prefix>
                    <LockOutlined />
                  </template></a-input>
              </div>
              <div class="item">
                <a href="">忘记密码</a>
              </div>
              <div class="item">
                <a-button type="primary">
                  登陆
                </a-button>
              </div>
              <!-- Content of Tab Pane Login -->
            </a-tab-pane>
            <a-tab-pane key="2" tab="注册">
              <div class="item">
                <a-input
                size="large"
                placeholder="请输入您的学号/教师号"
                v-model:value="regForm.account"
                >
                  <template #prefix>
                    <UserOutlined />
                  </template>
                </a-input>
              </div>
              <div class="item">
                <!-- <a-input-password placeholder="设置您的密码" /> -->
                <a-input
                size="large"
                placeholder="设置您的密码"
                v-model:value="regForm.password"
                >
                  <template #prefix>
                    <LockOutlined />
                  </template></a-input>
              </div>
              <div class="item">
                <!-- <a-input-password placeholder="再次输入您的密码" /> -->
                <a-input size="large" placeholder="设置您的密码">
                  <template #prefix>
                    <LockOutlined />
                  </template></a-input>
              </div>
              <div class="item">
                <a-input size="large" placeholder="邀请码注册">
                  <template #prefix>
                    <ShareAltOutlined />
                  </template></a-input>
              </div>
              <div class="item">
                <a-button
                @click="register"
                type="primary"
                >
                  注册
                </a-button>
              </div>
                <!-- Content of Tab Pane Register -->
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
      <div>
        公告栏
      </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scpoed>
    @import './index.scss';
</style>
