<template>
  <tr>
    <td>
      Day of the Year
    </td>
    <td>
    </td>
    <td>
      {{ julianDate }}
    </td>
  </tr>
</template>

<script>
export default {
  name: "JulianComponent",
  data() {
    return {date: new Date()}
  },
mounted() {
    self.setInterval(() => {this.date = new Date()}, 1000*60)

  },
  props: {
    msg: String,
  },
  computed: {
    julianDate() {
      //  list of abriviations for months
      var now = new Date();
      var start = new Date(now.getFullYear(), 0, 0);
      var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
      var oneDay = 1000 * 60 * 60 * 24;
      var day = Math.floor(diff / oneDay);
      return `${day}`;
    },
  },
};
</script>
