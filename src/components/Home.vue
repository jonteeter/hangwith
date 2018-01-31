<template>
  <div class="home">
    <form action="#" class="join"> 
    
      <h1>Start Chatting.</h1>

      <label for="room" class="label">Room ID</label>
      <input for="test" class="input" name="room" placeholder="e.g. abc">

      <label for="name" class="label">Your Name</label>
      <input for="test" class="input" name="name" >

      <button type="submit" class="button button--primary">
        Join
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .join {
    width: 100%;
    max-width: 400px;
  }
</style>