const orders = require("../model/Order/orders");
const user = require("../model/user");
const Policy = require("../model/user/Policy");
var ObjectID = require('mongodb').ObjectID;

const calcDiscount=async(orders,userId)=>{
    if(!userId)return(0)
    var tempOrders = orders;
    const userData = await user.findOne({_id:ObjectID(userId)})
    const discountClass = await Policy.find({})
    var discountList=[]
        
    for(var c=0;c<(userData.class&&userData.class.length);c++){
        var classId=userData.class[c]
        for(var i=0;i<discountClass.length;i++){
        //console.log(discountClass)
            if(classId._id===(discountClass[i].class&&
                discountClass[i].class._id))
                discountList.push(discountClass[i])
        }
    }
    for(var i=0;i<discountClass.length;i++){
            if(userData._id==discountClass[i].userId)
                discountList.push(discountClass[i])
        }
    //console.log(discountList)
    var discountOrder=[]
    for(var i=0;i<orders.length;i++){
        var orderItem = orders[i]
        var orderOffSet={discount:0}
        for(var d=0;d<discountList.length;d++){
            console.log("-------------------------")
            console.log(discountList[d])
            if(!discountList[d].filters||!discountList[d].filters==[]) {
                if(discountList[d].discount>orderOffSet.discount){
                    orderOffSet=discountList[d]
                    orders[i].discount = discountList[d]
                    break;
                }
            }
            var filterDiscount = discountList[d].filters.volume?
            discountList[d].filters.volume.replace(/\D/g,''):0
            console.log("--------++++++++++---------")
            console.log("Discount: ",filterDiscount)
            if( filterDiscount== (orderItem.weight )){
                    if(discountList[d].discount>orderOffSet.discount){
                        orderOffSet=discountList[d]
                        orders[i].discount = discountList[d]
                        break;  
                    }
                }
        }
        discountOrder.push(orderOffSet)
        //console.log(orders[i])
    }
    
    //console.log(discountList)
    
    //console.log(oldCredit)
    return(orders)
}
module.exports = calcDiscount;