var app = new Vue({
  el:'#app',
  data:{
      itemList:[
        {
          id:'1',
          itemName:'金柳',
          price:'345',
          count:'2'
        },
        {
          id:'2',
          itemName:'白葉到手香',
          price:'130',
          count:'1'
        },
        {
          id:'3',
          itemName:'日本三河黑松-(4寸)',
          price:'450',
          count:'1'
        },
  ]
  },
  methods:{
      handlePlus: function(item){
          item.count++;
      },
      handleSub: function(item){
          if(item.count>1){
          item.count--;                
          }
      },
      handledelete: function(index){
          console.log(this);
          this.itemList.splice(index,1);
      }
  },
  computed:{

  }
})