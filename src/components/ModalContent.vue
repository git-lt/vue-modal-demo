<template>
  <div>
    <p>{{ form.name || ''}}</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </div>
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