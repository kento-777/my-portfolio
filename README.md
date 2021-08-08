# My-portfolioSite
Vueをメインとしたポートフォリオサイトを作成しました。

ページはすべてSPA化されており、スムーズなページ遷移を可能としています。

レスポンシブ対応済みの為、PC、iPad、スマホからご覧いただけます。

## 各ページ紹介

### Top
TOP画面も含め、サイト全体をシンプルに仕上げました。

各ページに飛べる文字には、hover時に横にずれ、色が変わる機能をjsで再現しました！

URL:<https://tsuchiken.netlify.app/>

### About
Aboutページは自己紹介ページとなっています。

Vueのv-forディレクティブを用いて、繰り返しとなっている箇所を省略し、
中身のデータを動的なものにしました！

URL:<https://tsuchiken.netlify.app/about>

### Work
これまでの実績をこのページにまとめました。

実績をカード化し、それを追加していく構造となるよう設計しました。

URL:<https://tsuchiken.netlify.app/works>

### Skills
現段階でできることについて、このページにまとめました。

棒グラフを用いてそれぞれの言語などの修得度を可視化し、コメントでそれを補う形をとることで
％による主観だけでなく、相対的にも分かるような設計を心掛けました。
URL:<https://tsuchiken.netlify.app/skills>

## 使用技術
* HTML/CSS
* Sass 3.7.4
* vue/cli 4.5.13
* node 14.17.2
* yarn 1.22.10
### 使用したコンポーネントライブラリ
* mbj36/vue-burger-menu  URL:<https://github.com/mbj36/vue-burger-menu>
* cngu/vue-typer URL:<https://github.com/cngu/vue-typer?ref=kabanoki.net>

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
