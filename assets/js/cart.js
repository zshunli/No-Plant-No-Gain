var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'優質短袖白T',
            price:'500',
            count:'2'
          },
          {
            id:'2',
            itemName:'骷髏手短黑T',
            price:'790',
            count:'3'
          },
          {
            id:'3',
            itemName:'超時尚牛仔庫',
            price:'1200',
            count:'1'
          },
          {
            id:'4',
            itemName:'質感褐色系大衣服',
            price:'2300',
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