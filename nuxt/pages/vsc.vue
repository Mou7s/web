<template>
  <div>
    <h1>如何配置Windows下的Visual Studio Code 中的 C/C++环境</h1>
    <h2>1.安装C/C++插件</h2>
    <img
      src="https://code.visualstudio.com/assets/docs/cpp/cpp/cpp-extension.png"
      alt="cpp-extension"
    />

    <h2>2.通过MSYS2安装MinGW-w64工具链</h2>
    <img
      src="https://code.visualstudio.com/assets/docs/cpp/cpp/cpp-install-MSYS2-toolchain.png"
      alt="cpp-install-MSYS2-toolchain"
    />
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
    <p>
      访问<a href="https://www.msys2.org/">MSYS2官网</a
      >，下载安装程序、安装完成后将会自动打开MSYS2终端
    </p>

    <p>在终端中输入</p>
    <code>pacman -S --needed base-devel mingw-w64-x86_64-toolchain</code>
    <details>
      <summary>这段代码是什么意思?</summary>

      <p>
        该命令是在MSYS2环境下使用pacman包管理器来安装开发工具和工具链的命令。让我们逐个解释：
      </p>
      <p>
        pacman是MSYS2中用于安装、更新和管理软件包的命令行工具，类似于其他Linux发行版中的apt或yum。
      </p>
      <p>-S: 这是pacman的一个选项，它告诉pacman要安装新的软件包。</p>
      <p>
        --needed:
        这也是pacman的一个选项，它告诉pacman仅安装那些在系统中尚未安装的软件包，即跳过已经安装的软件包。
      </p>
      <p>
        base-devel:
        这是一个软件包组，它包含了一组基本的开发工具，例如编译器、链接器、调试器和其他与软件开发相关的工具。通过安装base-devel，你可以获得进行一般性软件开发所需的基本工具。
      </p>
      <p>
        mingw-w64-x86_64-toolchain:
        这是另一个软件包组，它包含了用于在Windows平台上进行开发的工具链。mingw-w64-x86_64-toolchain包含了GCC编译器、binutils、Windows
        API头文件等，它是用于构建和运行MinGW-w64应用程序的关键工具。
      </p>

      <p>
        综上所述，该命令的含义是在MSYS2环境下，安装一组基本的开发工具base-devel以及用于在Windows平台上进行开发的工具链mingw-w64-x86_64-toolchain。而且，只会安装系统中尚未安装的软件包，跳过已经安装的部分，以确保开发环境的完整性和正确性。
      </p>
    </details>

    <h2>3.添加MinGW-w64到Windows环境变量</h2>

    <p>默认路径是:</p>
    <code>C:\msys64\mingw64\bin</code>
    <h2>检查你的MinGW是否安装成功</h2>

    <p>打开Windows终端，输入</p>
    <code
      >gcc --version <br />
      g++ --version <br />
      gdb --version
    </code>

    <p>安装成功的话会输出版本号</p>
    <h2>4.运行C/C++文件</h2>
    <img
      src="https://code.visualstudio.com/assets/docs/cpp/playbutton/run-play-button.png"
      alt="run-play-button"
    />

    <p>在VSC右上角找到运行按钮</p>
    <img
      src="https://code.visualstudio.com/assets/docs/cpp/playbutton/select-gcc-compiler.png"
      alt="select-gcc-compiler"
    />
    <p>并在接下来的窗口选择g++</p>
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

img {
  width: 75%;
  margin: 0 auto;
}
</style>
