<template>
  <div>
    {{ meigen }} <br>
    {{ author}}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      meigen: null,
      author: null,
    };
  },
  mounted() {
    axios
      .get('api/json.php?c=1&e=1')
      .then((response) => {
        this.meigen = response.data[0].meigen;
        this.author = response.data[0].auther;
      });
  },
};
</script>
