<template>
  <a-modal v-model="visible" @click="$emit('ok')">
    <p>{{ form.name || ''}}</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return {
      visible: false,
      form: {
        name: '张三'
      }
    }
  },
  watch: {
    show: {
      immediate: true,
      handler(v){
        this.visible = v;
      }
    }
  }
}
</script>