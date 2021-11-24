<template>
  <div class="hello">
     <a-button type="primary" @click="visible1=true">
      打开Modal1
    </a-button>

    <a-button type="primary" @click="visible2=true">
      打开Modal2
    </a-button>

    <a-button type="primary" @click="visible3=true">
      打开Modal3
    </a-button>

    <a-button type="primary" @click="showModal4">
      打开Modal4
    </a-button>

    <!-- <a-button type="primary" @click="showModal5">
      打开Modal5
    </a-button>

    <a-button type="primary" @click="showModal6">
      打开Modal6
    </a-button> -->

    <a-modal v-model="visible1" @ok="visible1=false">
      <ModalContent />
    </a-modal>

    <TestModal2 :show="visible2" @ok="visible2=false"/>
    
    <TestModal3 :visible="visible3"  @ok="visible3=false"/>

    <TestModal4 ref="testModal4" @ok="onOk4"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
    };
  },
  methods: {
    showModal4() {
      console.log(this.$refs)
      this.$refs.testModal4.show({name: '李四'});
    },
    onOk4(data){
      console.log(data);
      this.$refs.testModal4.close();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
