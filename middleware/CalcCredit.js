const orders = require("../model/Order/orders");
const user = require("../model/user");
var ObjectID = require('mongodb').ObjectID;

const calcCredit=async(userId)=>{
    if(!userId)return(0)
    var credit = 0;
    var fob = 0;
    var oldCredit = 0
    const userData = await user.findOne({_id:ObjectID(userId)})
    if(!userData)return(0)
    credit =creditSum(userData.credit1,userData.credit2)
    var today = new Date().toLocaleDateString('fa')
    var month = today.split('/')[1]
    const newOrders = await orders.find({userId:userId})
    for(var i=0;i<newOrders.length;i++){
        var tempDate = new Date(newOrders[i].loadDate).toLocaleDateString('fa')
        var tempMonth = tempDate.split('/')[1]
        if(month === tempMonth)
        if(newOrders[i]&&newOrders[i].status&&newOrders[i].status.includes("cancel"))
            continue
        else{
            fob += parseInt(newOrders[i].freeCredit?newOrders[i].freeCredit:0)
            oldCredit += parseInt(newOrders[i].credit?newOrders[i].credit:0)
        }
    }
    //console.log(oldCredit)
    return({credit:credit-oldCredit,fob:fob})
}
const creditSum=(credit1Raw,credit2Raw)=>{
  
    var credit1 = credit1Raw?parseInt(credit1Raw.toString().replace(/\D/g,'')):0
    var credit2 = credit2Raw?parseInt(credit2Raw.toString().replace(/\D/g,'')):0
    //console.log(rawPrice,rawSum)
    return(
        credit1+credit2
    )
  }
module.exports = calcCredit;