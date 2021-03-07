<template>
  <div class="modal fade" :class="{ 'is-open': open }">
    <div class="modal-dialog">
      <div class="modal-content" style="width: 50%">
        <div class="modal-header"></div>
        <div class="modal-body">
          <table class="table datatable insurance-green">
            <thead>
              <tr>
                <th colspan="2" style="width: 86%">將打勾數量傳到父元件</th>
                <th style="width: 14%">選取</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="3">各選項</td>
                <td>選項1</td>
                <td><input type="checkbox" value="normal" v-model="checkedNames" /></td>
              </tr>
              <tr>
                <td>選項2</td>
                <td><input type="checkbox" value="accident" v-model="checkedNames" /></td>
              </tr>
              <tr>
                <td>選項3</td>
                <td><input type="checkbox" value="cancer" v-model="checkedNames" /></td>
              </tr>
              <!-- ============================== -->
          
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button class="btn " style = "margin-right:200px" @click="doClose">取消</button>
          <button class="btn " @click="doSubmit">儲存</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "summeryModal",
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checkedNames: [],
      checkNumber: "",
    };
  },
  methods: {
    doSubmit() {
     
      this.checkNumber = this.checkedNames.length;
      this.$emit("sendNnmber", this.checkNumber);
      this.$emit("close");
    },
    doClose() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped>
tr,
td,
th {
  text-align: center !important;
}
</style>
