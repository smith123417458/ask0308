<template>
  <div>
    <div class="field">
      <div class="control">
        <label for="name" class="label">名字</label>
        <input class="input" :value="value.name" @input="updateValue('name', $event.target.value)">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <label for="date" class="label">日期</label>
        <input
          class="input"
          type="date"
          :value="value.date"
          @input="updateValue('date', $event.target.value)"
        >
      </div>
    </div>
    <div class="field">
      <div class="control">
        <label for="textarea" class="label">備註</label>
        <textarea
          class="textarea"
          :value="value.description"
          @input="updateValue('description', $event.target.value)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "child",
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateValue(key, value) {
      this.$emit("input", { ...this.value, [key]: value });
    }
  }
};
</script>

<style scoped>
</style>
