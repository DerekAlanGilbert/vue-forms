<template>
  <div id="app">
    <Form>
       <Input/>
       <Input/>
       <Input/>
       <Checkbox/>
       <Button>
         Submit
       </Button>
    </Form>
  </div>
</template>

<script>
import { Form, Input, Checkbox, Button } from 'Forms'
export default {
  components: { Input, Checkbox, Form, Button },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
