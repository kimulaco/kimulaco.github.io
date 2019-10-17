<template>
  <div v-if="items.length > 0" class="DetailTable">
    <table class="DetailTable_table">
      <tbody class="DetailTable_body">
        <tr v-for="item in items" :key="item.title" class="DetailTable_tr">
          <th class="DetailTable_title">{{ item.title }}</th>
          <td class="DetailTable_value">{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailTable',
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$margin-top-size: 10px;
$margin-left-size: 20px;

.DetailTable {
  max-width: 400px;
  margin: 0 auto 48px;
  &_table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }
  &_tr {
    border-bottom: 2px solid;
    &:first-child {
      border-top: 2px solid;
    }
  }
  &_title,
  &_value {
    padding: 12px;
    width: 50%;
  }
  &_title {
    width: 35%;
  }
  &_value {
    text-align: left;
  }
}
</style>
