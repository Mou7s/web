<script setup lang="ts">
import Header from './header.vue';
</script>

<template>
  <Header></Header>

  <var-breadcrumbs>
    <NuxtLink to="/"> <var-breadcrumb>Home</var-breadcrumb></NuxtLink>
    <NuxtLink to="/laptop"> <var-breadcrumb>laptop</var-breadcrumb></NuxtLink>
  </var-breadcrumbs>

  <div class="grid place-content-center">
    <var-table>
      <thead>
        <tr>
          <th></th>
          <th>参数</th>
          <th>小新14pro</th>
          <th>战x14</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>network</td>
          <td>techs</td>
          <td>wifi6</td>
          <td>bluetooth5.3 wifi6</td>
        </tr>
        <tr>
          <td>Body</td>
          <td>尺寸（长*宽*高）</td>
          <td>?*?*15.99mm</td>
          <td>?*?*19.20mm</td>
        </tr>

        <tr>
          <td></td>
          <td>重量</td>
          <td>1.46kg</td>
          <td>1.45kg</td>
        </tr>

        <tr>
          <td></td>
          <td>工艺</td>
          <td>喷砂覆盖金属机身</td>
          <td>金属机身</td>
        </tr>

        <tr>
          <td>display</td>
          <td>type</td>
          <td>120hz 400nit</td>
          <td>120hz 500nit</td>
        </tr>

        <tr>
          <td></td>
          <td>size</td>
          <td>14.0''</td>
          <td>14'' 88%</td>
        </tr>

        <tr>
          <td></td>
          <td>resolution</td>
          <td>2880*1800 16:10</td>
          <td>2560*1600 16:10</td>
        </tr>

        <tr>
          <td>platform</td>
          <td>cpu</td>
          <td>7840hs</td>
          <td>pro 7840hs</td>
        </tr>

        <tr>
          <td></td>
          <td>gpu</td>
          <td>780m</td>
          <td>780m</td>
        </tr>

        <tr>
          <td>memory</td>
          <td>ram</td>
          <td>32g lpddr5x 6400</td>
          <td>32g ddr5 5600</td>
        </tr>

        <tr>
          <td></td>
          <td>rom</td>
          <td>1tb pcie4.0</td>
          <td>1tb pcie4.0</td>
        </tr>

        <tr>
          <td>battery</td>
          <td>type</td>
          <td>75whr</td>
          <td>51whr</td>
        </tr>

        <tr>
          <td></td>
          <td>charging</td>
          <td>pd 100w</td>
          <td></td>
        </tr>

        <tr>
          <td>ports</td>
          <td>techs</td>
          <td>usb4*1 usbc*1 usba*2 hdmi2.0*1</td>
          <td>thunderbolt*2 usba*2 hdmi2.1*1</td>
        </tr>
      </tbody>
    </var-table>
  </div>
</template>
