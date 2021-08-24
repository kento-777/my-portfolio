# My-portfolioSite
<img width="947" alt="スクリーンショット 2021-08-09 165229" src="https://user-images.githubusercontent.com/84276667/128676594-5ef994e7-b696-4f7b-ae2a-4a68ef319f6e.png">
Vueをメインとしたポートフォリオサイトを作成しました。

ページはすべてSPA化されており、スムーズなページ遷移を可能としています。

レスポンシブ対応済みの為、PC、iPad、スマホからご覧いただけます。

URL:<https://tsuchiken.netlify.app/>
## 各ページ紹介

### Top
TOP画面も含め、サイト全体をシンプルに仕上げました。

各ページに飛べる文字には、hover時に横にずれ、色が変わる機能をjsで再現しました！



### About
<img width="947" alt="About" src="https://user-images.githubusercontent.com/84276667/128677002-6775a308-04ce-41c9-9793-cd2780e4e205.png">
Aboutページは自己紹介ページとなっています。

Vueのv-forディレクティブを用いて、繰り返しとなっている箇所を省略し、
中身のデータを動的なものにしました！

### Works
<img width="947" alt="Works" src="https://user-images.githubusercontent.com/84276667/128677040-1f606dd0-71ed-4ed0-a2cb-d313a71cbb45.png">
これまでの実績をこのページにまとめました。

実績をカード化し、それを追加していく構造となるよう設計しました。


### Skills
<img width="947" alt="Skills" src="https://user-images.githubusercontent.com/84276667/128677050-4ec3b32b-3f56-4680-88c1-376ce98560b6.png">
現段階でできることについて、このページにまとめました。

棒グラフを用いてそれぞれの言語などの修得度を可視化し、コメントでそれを補う形をとることで

％による主観だけでなく、相対的にも分かるような設計を心掛けました。

URL:<https://tsuchiken.netlify.app/skills>

## 使用技術
* HTML/CSS
* Sass 3.7.4
* vue.js 2.6.14
* TypeScript 4.5.0
* Netlify

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
