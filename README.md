# nuxt3與Echart練習

[Nuxt 3 官方文件](https://nuxt.com/docs/getting-started/introduction)
[Echart 官方文件](https://echarts.apache.org/examples/zh/index.html)

## 初始創建，所需套件

安裝下列

```bash
# nuxt 創建專案
npx nuxi@latest init nuxtchart
# nuxt 的 vant套件 (https://vant-ui.github.io/vant/#/zh-CN)
npm i @vant/nuxt
# sass安裝
npm i sass
# axios >>> nuxt3 有內置連線模塊
https://clairechang.tw/2023/07/19/nuxt3/nuxt-v3-data-fetching/
useFetch() = useAsyncData() + $fetch()
# Echart安裝
npm install echarts
# pinia
npm install pinia @pinia/nuxt
```

## 設置上述安裝包，在nuxt.config.ts設置

```bash
# vant
'@vant/nuxt','@pinia/nuxt'
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
