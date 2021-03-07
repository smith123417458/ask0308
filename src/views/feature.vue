<template>
  <main class="container-fluid">
   <section class="section">
   
    <div class="container">
      <div v-for="(item, i) in holidays" :key="i">
        <Child v-model="holidays[i]"/>
           <span>子元件打勾數==>{{item.summery}}</span>
            <br>

         <button @click="add(i)">加1</button>
         <button @click="deletelist(i)">減1</button>
        
         <button @click="summeryModalOpen=true">彙總</button>
         <br>
         <br>
      </div>
      
      {{JSON.stringify(holidays)}}
    </div>
  </section>
 
  <summery-modal :open="summeryModalOpen" @submit="submitsummeryQuery"  @sendNnmber="showNnmber"  @close="summeryModalOpen=false" />

  </main>
</template>
<script>

import Child from "../components/child";

 import summeryModal from '../components/summeryModel'
export default {
  components: { Child ,summeryModal ,},
  name: "feature",
  data() {
    return {
      queryModalOpen: false,
      summeryModalOpen: false,
       summery1:0,
   
     holidays: [
        {
          name: "王大明",
          date: null,
          description: "",
          summery:'5',
        },
        {
          name: "陳大仁",
          date: null,
          description: "",
          summery:'',
        },
         {
          name: "李大明",
          date: null,
          description: "",
          summery:'',
        },
      ]


     ,
   
    };
  },
  methods: {
  showWrod(msg){
    this.word=msg
  }
   ,
  showNnmber(number){
   
    this.holidays[0].summery=number
  },
    add(i) {
      this.holidays.splice(i+1,0, { name: "",
          date: null,
          description: ""})
          
    },
     deletelist(i) {
       this.holidays.splice(i, 1);
            },
  

    submitQuery() {
      this.queryModalOpen = false;
    },
    submitsummeryQuery() {
      this.summeryModalOpen = false;
    },
  },
};
</script>
