<template>
  <a-modal v-model="visible">
    <p>{{ form.name || ''}}</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <a-button type="primary" @click="onOk">确认</a-button>
  </a-modal>
</template>
<script>
export default {
  data(){
    return {
      visible: false,
      form: {
        name: '张三'
      }
    }
  },
  methods: {
    show(initData){
      this.visible = true;
      if(initData) {
        this.form = {...initData }
      }else{
        this.form = { name: '张三' }
      }
      console.log(this.visible)
    },
    close(){
      this.visible = false;
    },
    onOk(){
      this.$emit('ok', this.form);
    }
  }
}
</script>