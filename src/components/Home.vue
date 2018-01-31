<template>
  <div class="home">
    <form action="#" class="join"> 
    </form>
      <h1>Start Chatting.</h1>

      <label for="room" class="label">Room ID</label>
      <input for="test" class="input" name="room" placeholder="e.g. abc">

      <label for="name" class="label">Your Name</label>
      <input for="test" class="input" name="name" >

      <button type="submit" class="button button--primary">
        Join
      </button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      //
    }
  }
}
</script>

