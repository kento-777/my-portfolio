<template>
  <div>
    <header><headerItem></headerItem></header>
    <main>
      <div class="wrap">
        <div class="title"><h1>About</h1></div>
        <div class="profile">
          <div class="profile__img"><img src="" alt="" /></div>
          <div class="profile__explain">
            <p>
              土田健斗　Kento Tsuchida(21) <br /><br />
              フロントエンドエンジニア<br /><br />
              新潟生まれ新潟育ち。<br />
              実家は長岡市で、現在は新潟市在住。<br />
              趣味はスノーボード、曲のMix、ゲーム、ニャンちゅう
            </p>
          </div>
        </div>
        <div class="story-wrap">
          <div class="title"><h2>My Story</h2></div>
          <dl>
            <dt>1999</dt>
            <dd>
              <h3>新潟県長岡市に生まれる。</h3>
              <p>
                長岡花火が良く見える最高の地に生まれる。<br />将来の夢は消防士。
              </p>
            </dd>
            <dt>2015</dt>
            <dd>
              <h3>新潟県立長岡高等学校に入学。</h3>
              <p>
                部活は硬式テニス部。
                練習のキツさに挫折しそうになりながらも高校3年間やり遂げる。
              </p>
            </dd>
            <dt>2020</dt>
            <dd>
              <h3>新潟大学理学部に入学。</h3>
              <p>
                世間がコロナ禍の中、入学。
                コロナ禍の中自宅作業が増え、何か新しいことを模索し始める。
              </p>
            </dd>
            <dt>2020.7</dt>
            <dd>
              <h3><b>プログラミングと初対面、そして…</b></h3>
              <p>
                高校時代の友達と再会し、それをきっかけとして
                再度、本格的にプログラミングと向き合う。
              </p>
            </dd>
            <dt>2021.4</dt>
            <dd>
              <h3><b>本格的にプログラミングと向き合う。</b></h3>
              <p>
                高校時代の友達と再会し、それをきっかけとして
                再度、本格的にプログラミングと向き合う。
              </p>
            </dd>
            <dt>2021.6</dt>
            <dd>
              <h3><b>初案件を受注。</b></h3>
              <p>初案件は、友達のポートフォリオサイト。</p>
            </dd>
            <dt></dt>
            <dd><h3>Study more...</h3></dd>
          </dl>
        </div>
      </div>
    </main>
    <footer><footerItem></footerItem></footer>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
h3 {
  font-weight: normal;
  margin-bottom: 0;
}

dl {
  display: flex;
  flex-wrap: wrap;
 
  dt {
    text-align: right;
    width: 5%;
    padding: 0.5em 1em 0.5em 0.5em;
    position: relative;
    &::after {
      content: "●";
      position: absolute;
      right: -2.35em;
      top: 5px;
      font-size: 22px;
      color: black;
    }
  }
  dd {
    width: 80%;
    padding: 0.5em 2em 3em;
    border-left: 2px solid #ccc;
    
    h3 {
      font-size: 22px;
      margin: 0 0 5px;
    }
  }
}
</style>
