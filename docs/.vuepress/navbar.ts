import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },
  {
    text: '前端',
    items: [
      { text: 'HTML', link: '/前端/HTML/HTML.html' },
      { text: 'CSS', link: '/前端/CSS/CSS.html' },
      { text: 'JavaScript', link: '/前端/JavaScript/JavaScript.html' },
      { text: 'NodeJS', link: '/前端/NodeJS/NodeJS.html' },
      { text: 'Vue2+Vue3', link: '/前端/Vue2+Vue3.html' },
      { text: 'Canvas', link: '/前端/Canvas.html' },
    ]
  },
  {
    text: '后端',
    items: [
      { text: 'C语言', link: '/后端/C语言.html' },
      { text: 'Java基础', link: '/后端/Java基础.html' }
    ]
  },
  {
    text: '移动端',
    items: [
      { text: 'Android', link: '/移动端/Android.html' },
      { text: '鸿蒙入门', link: '/移动端/鸿蒙教程基础篇.html' },
      { text: 'UniApp', link: '/移动端/UniApp.html' }
    ]
  },
  {
    text: '开发工具',
    items: [
      { text: 'git版本管理', link: '/开发工具/git版本管理.html' },
      { text: 'VScode', link: '/开发工具/VScode.html' },
      { text: 'Typora', link: '/开发工具/Typora.html' }
    ]
  },
  {
    text: '数据结构与算法',
    items: [
      { text: '算法教程', link: '/数据结构与算法/数据结构与算法.html' }
    ]
  },
  {
    text: '其它',
    items: [
      { text: 'FISCO-BOCS', link: '/其它/FISCO-BOCS.html' },
      { text: 'Linux', link: '/其它/Linux.html' },
      { text: 'MySQL', link: '/其它/MySQL.html' },
    ]
  }
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
  },
  {
    text: 'Web',
    items: [
      { text: 'HTML', link: '/en/前端/HTML.html' },
      { text: 'CSS', link: '/en/前端/CSS.html' },
      { text: 'JavaScript', link: '/en/前端/JavaScript.html' },
      { text: 'NodeJS', link: '/en/前端/NodeJS.html' },
      { text: 'Vue2+Vue3', link: '/en/前端/Vue2+Vue3.html' },
      { text: 'Canvas', link: '/en/前端/Canvas.html' },
    ]
  },
  {
    text: 'Backend',
    items: [
      { text: 'C', link: '/en/后端/C语言.html' },
      { text: 'Java', link: '/en/后端/Java基础.html' }
    ]
  },
  {
    text: 'Mobile',
    items: [
      { text: 'Android', link: '/en/移动端/Android.html' },
      { text: 'HarmonyOS NEXT', link: '/en/移动端/鸿蒙.html' },
      { text: 'UniApp', link: '/en/移动端/UniApp.html' }
    ]
  },
  {
    text: 'Development Tools',
    items: [
      { text: 'git版本管理', link: '/en/开发工具/git版本管理.html' },
      { text: 'VScode', link: '/en/开发工具/VScode.html' },
      { text: 'Typora', link: '/en/开发工具/Typora.html' }
    ]
  },
  {
    text: 'Structures',
    items: [
      { text: 'tutorial', link: '/en/数据结构与算法/数据结构与算法.html' }
    ]
  },
  {
    text: 'Other',
    items: [
      { text: 'FISCO-BOCS', link: '/en/其它/FISCO-BOCS.html' },
      { text: 'Linux', link: '/en/其它/Linux.html' },
      { text: 'MySQL', link: '/en/其它/MySQL.html' },
    ]
  }
])

