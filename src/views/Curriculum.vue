<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute()

let classData = ref(null)

const stuId = ref()

const searchQuery = computed(() => route.query.stuId)


onMounted(() => {
  stuId.value = searchQuery.value || '';
  if (stuId.value) {
    getClassData()
  }
});

let defaultWeek = ref([
  { number: 0, value: '一' },
  { number: 1, value: '二' },
  { number: 2, value: '三' },
  { number: 3, value: '四' },
  { number: 4, value: '五' },
  { number: 5, value: '六' },
  { number: 6, value: '日' },
])

let weeks = ref([
  { number: 0, value: '一' },
  { number: 1, value: '二' },
  { number: 2, value: '三' },
  { number: 3, value: '四' },
  { number: 4, value: '五' },
  { number: 5, value: '六' },
  { number: 6, value: '日' },

])


function getClassData() {
  axios.get(`https://api.ntub-class.arthurc.me/personal/${stuId.value}`)
    .then((res) => {
      classData.value = res.data
      router.push({ query: { stuId: stuId.value } });
    }).catch((error) => {

    })
}




function setDay(day) {
  weeks.value = [day]
}

function setDefault(day) {
  weeks.value = defaultWeek.value
}

</script>

<template>
  <div class="w-full  bg-gray-500 h-[140px] p-5">
    <label class="font-semibold text-gray-300">請輸入學號</label>
    <div class="flex flex-warp">
      <input type="text" v-model="stuId" class="p-3 mt-2 mr-4 rounded w-80" />
      <button @click="getClassData" class="w-40 mt-2 border rounded hover:bg-gray-600">搜尋</button>
    </div>
  </div>
  <div v-if="classData">
    <div class="text-center block md:hidden">
      <button @click="setDefault()" class="bg-slate-700 mr-2 py-2 w-[100px] my-2 rounded">
        全部
      </button>
      <template v-for="day in defaultWeek" :key="day.number">
        <button @click="setDay(day)" class="bg-slate-700 mr-2 py-2 w-[100px]  my-2 rounded">
          星期 {{ day.value }}
        </button>
      </template>
    </div>
    <table class="w-full table-fixed">
      <tbody>
        <tr>
          <td class="text-center py-5 bg-slate-700 hidden md:block">節數 / 星期</td>
          <td v-for="day in weeks" :key="day" class="text-center py-5 bg-slate-700">
            {{ day.value }}
          </td>
        </tr>
        <template v-for=" (item, index) in classData.time" :key="index">
          <tr class="w-full text-center md:h-[100px] border border-slate-700 ">
            <td class="hidden md:inline-block md:w-[120px]">
              {{ item.class_no }}<br>
              {{ item.start_at }} - {{ item.end_at }}
            </td>
            <template v-for="option in weeks" :key="option">
              <td v-if="classData.class[option.number][index]">
                <div class="h-[200px]">
                  <p class="block md:hidden bg-gray-600">
                    {{ item.class_no }}<br>
                    {{ item.start_at }} - {{ item.end_at }}
                  </p>
                  <p class="text-base">{{ classData.class[option.number][index].name }}</p>
                  <p class="text-sm">{{ classData.class[option.number][index].teacher }}</p>
                  <p class="text-sm">{{ classData.class[option.number][index].room }}</p>
                </div>
              </td>
              <td v-else class="h-[200px]">
                <span> - </span>
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
