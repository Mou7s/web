<script setup lang="ts"></script>

<template>
  <div class="place-content-center bg-blue-100">
    <div class="grid h-16">
      <var-breadcrumbs>
        <NuxtLink to="/"><var-breadcrumb></var-breadcrumb></NuxtLink>
        <NuxtLink to="/about"><var-breadcrumb>about</var-breadcrumb></NuxtLink>
      </var-breadcrumbs>
    </div>

    <div class="rounded-3xl w-5/6 my-0 mx-auto xl:p-16 bg-white grid">
      <div>
        <h1 class="text-7xl font-bold !text-black">刘楚歌</h1>
        <p>前端开发工程师</p>
      </div>

      <div>
        <p>
          <a
            href="mailto:liuchuge7777777@gmail.com"
            class="text-blue-300 hover:underline"
            ><i>liuchuge7777777@gmail.com</i>
          </a>
        </p>

        <p>
          <a
            href="https://www.mou7s.github.io/"
            class="text-blue-300 hover:underline"
            ><i>mou7s.github.io</i></a
          >
        </p>
      </div>

      <div>
        <h1>教育经历</h1>
        <p>广东培正学院，广东广州—<i>本科</i></p>
        <p class="text-xs text-gray-400">2020年9月—2024年6月</p>
      </div>

      <div>
        <h1>证书</h1>
        <p><b>CET—6 大学英语六级</b></p>
        <p>
          <b>NCRE—2 WEB程序设计</b>
        </p>
      </div>

      <div>
        <h1>作品</h1>
        <p class="my-4">
          <b>个人网站— </b>
          <a
            href="https://www.mou7s.github.io"
            class="text-blue-300 hover:underline"
            ><i>mou7s.github.io</i></a
          >
        </p>

        <p>
          使用基于Vue的Nuxt框架开发的个人网站，网站内容由个人博客、项目和在线简历组成。
        </p>
        <p>使用Material Design 3作为设计参考并结合varlet组件库进行设计</p>
        <p>使用原子化CSS控制样式和进行移动端适配</p>
        <p>使用github pages进行网站静态部署</p>
        <p class="my-4">
          技术栈：Vue\Nuxt\Typescript\TailwindCSS\Varlet\Material-Web\Github
          Pages\PNPM
        </p>
      </div>

      <div>
        <h1>技能</h1>
        <div class="grid gap-4">
          <p>掌握HTML：语义化标签、多媒体支持、本地存储等</p>
          <p>掌握CSS：各种选择器、flex、grid等响应式布局等</p>
          <p>掌握Javascript：面向对象、异步、模块化、事件循环等</p>
          <p>掌握Vue和Nuxt框架开发</p>
          <p>熟悉前端开发框架：Vue、React、Angular等</p>
          <p>熟悉nodejs、typescript、Vite</p>
          <p>熟练使用git版本控制系统和npm、pnpm包管理工具</p>
          <p>熟悉静态、动态的网站部署流程操作</p>
          <p>熟悉数据结构与基础算法</p>
          <p>熟悉Windows、Debian、Chrome OS、原生Android等主流系统的操作使用</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin: 1rem auto;
  --tw-text-opacity: 1;
  color: rgb(147 197 253 / var(--tw-text-opacity));
  font-weight: 700;
}
</style>
