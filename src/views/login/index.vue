<template>
  <div class="login-wrap">
    <div class="login-left"></div>
    <div class="login-right">
      <div class="container">
        <h1 class="title">Welcome back</h1>
        <p class="desc">Enter the information you entered while registering</p>
        <el-form
          class="form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
          label-position="top"
          size="large"
        >
          <el-form-item prop="username" label="用户名">
            <el-input
              v-model="loginForm.username"
              placeholder="username"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input
              type="password"
              placeholder="password"
              v-model="loginForm.password"
              :prefix-icon="Lock"
              @keyup.enter="submitForm()"
            ></el-input>
          </el-form-item>
          <el-form-item prop="verifyCode">
            <el-input
              :prefix-icon="Warning"
              show-password
              v-model="loginForm.verifyCode"
              placeholder="VerifyCode"
              size="large"
              maxlength="4"
            >
              <template #append>
                <Identify :identifyCode="identifyCode" @click="refreshCode" />
              </template>
            </el-input>
          </el-form-item>
          <div class="remember">
            <el-checkbox>记住我</el-checkbox>
            <el-link>忘记密码？</el-link>
          </div>
          <div class="login">
            <el-button class="loginBtn" type="primary" @click="submitForm()">
              登录
            </el-button>
          </div>
          <div class="mt-4 text-sm text-gray-300">Tips : 用户名和密码任意</div>

          <!-- <div class="relative mt-4 text-center">
            <span class="relative z-10 px-2 text-sm text-gray-500 bg-white">or</span>
            <div class="absolute z-0 w-full border-b top-3"></div>
          </div> -->
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, Lock, Warning } from '@element-plus/icons-vue'
import { Ref, computed, reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
import useUserStore from '@/store/modules/user'
import Identify from '@/components/VerifyCode/index.vue'
// VerifyCode import

let $router = useRouter()
let $route = useRoute()
let loading = ref(false)

const identifyCode = ref('1234')
const identifyCodes = ref('1234567890abcdefjhijklinopqrsduvwxyz')

// 重置验证码
const refreshCode = () => {
  identifyCode.value = ''
  makeCode(identifyCode, 4)
}

const makeCode = (o: Ref<any>, l: number) => {
  for (let i = 0; i < l; i++) {
    identifyCode.value +=
      identifyCodes.value[randomNum(0, identifyCodes.value.length)]
  }
}

const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

let useStore = useUserStore()
let loginForms = ref()

const loginForm = reactive({
  username: 'admin',
  password: 'atguigu123',
  verifyCode: '1234',
})

const validatorUsername = (rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('请输入账号'))
  } else {
    callback()
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('请输入密码'))
  } else if (value.length < 6 || value.length > 16) {
    callback(new Error('密码应为6~16位的任意组合'))
  } else {
    callback()
  }
}

const validatorVerifyCode = (rule: any, value: any, callback: any) => {
  console.log(value, identifyCode.value)

  if (value.length === 0) {
    callback(new Error('请输入验证码'))
  } else if (value.length < 4) {
    callback(new Error('请输入正确的验证码'))
  } else if (identifyCode.value !== value) {
    callback(new Error('请输入正确的验证码'))
  } else if (identifyCode.value === value) {
    callback()
  }
}

const submitForm = async () => {
  await loginForms.value.validate()
  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    let redirect: string = $route.query.redirect as string
    $router.push({ path: redirect || '/' })
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登陆成功',
      title: `Hi, ${getTime()}好`,
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

const rules = {
  username: [
    {
      trigger: 'change',
      validator: validatorUsername,
    },
  ],
  password: [
    {
      trigger: 'change',
      validator: validatorPassword,
    },
  ],
  verifyCode: [
    {
      trigger: 'blur',
      validator: validatorVerifyCode,
    },
  ],
}

// ../../assets/images/0050.png
</script>

<style lang="scss" scoped>
.login-wrap {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.login-left {
  position: absolute;
  width: 50%;
  height: 100vh;
  background-image: url(@/assets/images/login.png);
  background-size: contain;
  background-position: 60% center;
  background-repeat: no-repeat;
}

.login-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: calc(50% + 100px);
  width: 460px;

  height: 100%;

  .container {
    padding: 12px;
    padding-top: 20px;
    padding-bottom: 20px;
    transition: all;

    .title {
      font-size: 20px;
    }
    .desc {
      font-size: 15px;
      margin: 20px;
    }
    .form {
      margin-top: 8px;
    }
    .remember {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
    }
    .login {
      display: flex;
      justify-content: center;
      .loginBtn {
        //   top: 0;
        //   left: 0;
        //   bottom: 0;
        //   right: 0;
        margin: 0 auto;
        width: 80%;

        margin-bottom: 10px;
      }
    }
  }
  &:hover {
    // background-color: rgb(177, 153, 194);
  }
}
</style>
