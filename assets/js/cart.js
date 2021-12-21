var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'優質短袖白T',
            imgUrl:'https://succuland.com.tw/wp-content/uploads/2021/12/2021-%E5%A4%9A%E8%82%89%E6%A1%8C%E8%8A%B1_%E5%89%B5%E6%84%8F%E7%9B%86%E6%A0%BD_%E6%A4%8D%E7%89%A9%E6%A1%8C%E8%8A%B11-1140x760.jpg',
            price:'500',
            count:'2'
          },
          {
            id:'2',
            itemName:'骷髏手短黑T',
            imgUrl:'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            price:'790',
            count:'3'
          },
          {
            id:'3',
            itemName:'超時尚牛仔庫',
            imgUrl:'https://images.unsplash.com/photo-1529391409740-59f2cea08bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1124&q=80',
            price:'1200',
            count:'1'
          },
          {
            id:'4',
            itemName:'質感褐色系大衣服',
            imgUrl:'https://images.unsplash.com/photo-1491998664548-0063bef7856c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
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