# My-portfolioSite
<img width="947" alt="スクリーンショット 2021-08-09 165229" src="https://user-images.githubusercontent.com/84276667/128674833-6e1feb17-a984-42b0-b0ae-fc24209cf9b4.png">
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
