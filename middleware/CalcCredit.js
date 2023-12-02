const orders = require("../model/Order/orders");
const user = require("../model/user");
var ObjectID = require('mongodb').ObjectID;

const calcCredit=async(userId)=>{
    if(!userId)return(0)
    var credit = 0;
    var oldCredit = 0
    const userData = await user.findOne({_id:ObjectID(userId)})
    if(!userData)return(0)
    credit =userData.credit
    var today = new Date().toLocaleDateString('fa')
    var month = today.split('/')[1]
    const newOrders = await orders.find({userId:userId})
    for(var i=0;i<newOrders.length;i++){
        var tempDate = new Date(newOrders[i].loadDate).toLocaleDateString('fa')
        var tempMonth = tempDate.split('/')[1]
        if(month === tempMonth)
        if(newOrders[i]&&newOrders[i].status&&newOrders[i].status.includes("cancel"))
            continue
        else
            oldCredit += parseInt(newOrders[i].credit?newOrders[i].credit:0)
    }
    //console.log(oldCredit)
    return(credit-oldCredit)
}
module.exports = calcCredit;