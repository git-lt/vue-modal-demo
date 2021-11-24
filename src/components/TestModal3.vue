<template>
  <a-modal v-bind="$attrs" v-on="$listeners">
    <p>{{ form.name || ''}}</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>
<script>
export default {
  data(){
    return {
      form: {
        name: '张三'
      }
    }
  },
}
</script>