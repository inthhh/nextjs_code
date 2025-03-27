import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // 기본 no-unused-vars 규칙 비활성화
      'no-unused-vars': 'off',
      // TypeScript 전용 규칙 적용
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
]

export default eslintConfig
