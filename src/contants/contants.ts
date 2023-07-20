import { RegisterOptions } from 'react-hook-form'

export const PATH = {
  PRODUCT: '/',
  LOGIN: '/login',
  REGISTER: '/register'
}

export const RULES: RulesInterface = {
  EMAIL: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5 - 160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5 - 160 ký tự'
    }
  },
  CONFIRM_PASSWORD: {
    required: {
      value: true,
      message: 'Confirm password là bắt buộc'
    }
  },
  PASSWORD: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    }
  }
}

type RegisterForm = 'EMAIL' | 'PASSWORD' | 'CONFIRM_PASSWORD'

type RulesInterface = {
  [x in RegisterForm]: RegisterOptions
}
