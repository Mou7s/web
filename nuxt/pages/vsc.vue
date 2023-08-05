<template>
  <div>
    <h1>如何配置Windows下的Visual Studio Code 中的 C/C++环境</h1>
    <h2>1.安装C/C++插件</h2>
    <img
      src="https://code.visualstudio.com/assets/docs/cpp/cpp/cpp-extension.png"
      alt="cpp-extension"
    />

    <h2>2.通过MSYS2安装MinGW-w64工具链</h2>
    <details>
      <summary>什么是MSYS2?</summary>
      <p>
        MSYS2是一个用于Windows操作系统的软件包管理器和开发环境。它是MinGW-w64（Minimalist
        GNU for Windows
        64-bit）项目的一个分支，旨在为Windows用户提供类似于Linux上的开发环境。
      </p>
      <p>
        MSYS2提供了一个类似于Linux中常见的Bash
        shell，并且可以使用pacman软件包管理器来安装、更新和卸载软件包，这使得在Windows系统上进行开发和编译C/C++项目变得更加容易。
      </p>
      <p>
        此外，MSYS2还提供了一组常用的开发工具，如GCC编译器、GNU
        Make、GDB调试器等，这些工具可以帮助开发人员在Windows环境中进行编程和调试。
      </p>
    </details>

    <details>
      <summary>什么是MinGW-w64工具链?</summary>
      <p>
        MinGW-w64是一个用于Windows操作系统的开发工具链，它提供了一套用于构建和运行C、C++和其他语言程序的工具和库。
      </p>
      <p>
        MinGW-w64的目标是为Windows平台提供一个轻量级、高效和免费的开发环境，使开发者能够在Windows上编译和运行开源和自由软件项目，以及进行Windows平台特定的开发。
      </p>
    </details>
    <p>访问<a href="https://www.msys2.org/">MSYS2官网</a>，下载安装程序</p>
    <h2>3.运行你的C/C++文件</h2>
  </div>
</template>
<style scoped>
h1 {
  font-weight: 700;
  --tw-border-opacity: 1;
  color: rgb(219 234 254 / var(--tw-border-opacity));
}
h2 {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  margin: 1rem auto;
}

h1 {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 2rem auto;
}

details {
  border-radius: 0.25rem /* 4px */;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgb(219 234 254 / var(--tw-border-opacity));
  margin: 1rem auto;
}

summary {
  --tw-bg-opacity: 1;
  background-color: rgb(219 234 254 / var(--tw-bg-opacity));
  cursor: pointer;
}

details p {
  margin-top: 0.5rem;
}

a {
  --tw-bg-opacity: 1;
  color: rgb(219 234 254 / var(--tw-bg-opacity));
}
</style>
