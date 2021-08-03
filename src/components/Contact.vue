<template>
  <div class="wrap">
    <header><headerItem></headerItem></header>
    <main>
      <div class="title"><h1>Contact</h1></div>
      <div  class="profBox" id="formarea">
        <!--↓入力フォームエリア(NAME)↓-->
        <div v-bind:class="{ delatearea: inputdata }">
          <input
            type="text"
            name="namedata"
            placeholder="NAME"
            class="inputText namearea"
            v-model="namearea"
          />
        </div>
        <!--↓入力内容の確認エリア(NAME)↓-->
        <div v-bind:class="{ delatearea: makesure }">{{ namearea }}</div>
        <p class="errorbox">{{ namemiss }}</p>

        <!--↓入力フォームエリア(EMAIL)↓-->
        <div v-bind:class="{ delatearea: inputdata }">
          <input
            type="text"
            name="namedata"
            placeholder="E-MAIL"
            class="inputText mailarea"
            v-model="mailarea"
          />
        </div>
        <!--↓入力内容の確認エリア(EMAIL)↓-->
        <div v-bind:class="{ delatearea: makesure }">{{ mailarea }}</div>
        <p class="errorbox">{{ mailmiss }}</p>

        <!--↓入力フォームエリア(MESSAGE)↓-->
        <div v-bind:class="{ delatearea: inputdata }">
          <textarea
            name="textboxdata"
            class="textboxdata textboxarea"
            cols="30"
            rows="10"
            placeholder="MESSAGE"
            v-model="textboxarea"
          ></textarea>
        </div>
        <div v-bind:class="{ delatearea: makesure }">
          {{ textboxarea }}
        </div>

        <div>
          <div v-bind:class="{ delatearea: inputdata }">
            <!--v-on:click="clickbtn"でmethodのclickbtnを起動させます。-->
            <button class="btnStyle1 submitarea" v-on:click="clickbtn">
              確認
            </button>
          </div>
          <div v-bind:class="{ delatearea: makesure }">
            <!--v-on:click="clickbtn_back"でmethodのclickbtn_backを起動させます。-->
            <button
              class="btnStyle1 submitarea mgb10px"
              v-on:click="clickbtn_back"
            >
              戻る
            </button>
            <!--v-on:click="clickbtn_send"でmethodのclickbtn_sendを起動させます。-->
            <button class="btnStyle1 submitarea" v-on:click="clickbtn_send">
              送信
            </button>
          </div>
        </div>
      </div>
    </main>
    <footer><footerItem></footerItem></footer>
  </div>
</template>
<script>
var mailerrorbox = true
var nameerrorbox = true
export default {
  
  data() {
    return {
      namearea: "",
      mailarea: "",
      textboxarea: "",
      inputdata: false,
      makesure: true,
    };
  },
  computed: {
    mailmiss: function() {
      let maildata = this.mailarea
      mailerrorbox = "true";
      if(!maildata) {
        return "メールアドレスを入力してください。";
        
      }else if(maildata.match(/.+@.+\..+/) == null){
        return "メールの形式が間違っています。"
      }else{
        mailerrorbox = "false";
      };
    },
    namemiss: function() {
      let namedata = this.namearea
      nameerrorbox = "true";
      if(!namedata) {
        return "名前が入力されていません。"
      }else{
        nameerrorbox = "false";
      }
    }
  },
  methods: {
    clickbtn: function() {
      this.inputdata = true
      this.makesure = false
    },
    clickbtn_back: function() {
      this.inputdata = false
      this.makesure = true
    },
    clickbtn_send: function() {
      if(mailerrorbox == "false" && nameerrorbox == "false") {
        let params = new URLSearchParams();
        params.append('namearea', this.nameareea);
        params.append('mailarea', this.mailarea);
        params.append('textboxarea', this.namearea);
        axios.post('./functions/mail.php', params)
        .then(function (response) {
          alert(responce.data)
          document.location = "/";
        })
        .catch(function (error) {
          console.log("error");
        })
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.delatearea {
  position: absolute;
  left: -9999px;
}
</style>