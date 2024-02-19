<<<<<<< HEAD
const user =require("../../model/user");
const userInfo =require("../../model/userInfo");
var Kavenegar = require('kavenegar');
var api = Kavenegar.KavenegarApi({
    apikey: process.env.SMS_API
});
 
async function sendSmsUser(userId,template,message,token2,token3){
  
    const userData= await user.findOne({_id:userId});
    const userInfoData= await userInfo.findOne({userId: userId });
    //console.log(userInfoData)
    var phoneNumber=""
    if(userInfoData&&userInfoData.mobile){
      phoneNumber= userInfoData.mobile
    } 
    else{
      if(isMobile(userData.phone))phoneNumber=userData.phone;
    }
    //console.log(phoneNumber,userData)
    //console.log(userId,template,message,token2,token3,phoneNumber)
    if(phoneNumber){
      api.VerifyLookup({
        token: message,//message,
        token2:token2,
        token3:token3,
        template: template,//"mgmVerify",
        receptor: phoneNumber
      },function(response,status) {
        //console.log(response);
        console.log(status);
        }) 
    }
  }
  const isMobile=(phone)=>{
    if(!phone) return 0
    if(!/^\d+$/.test(phone))return 0
    var leng = phone.length
    if(leng<10) return 0
    if(phone.charAt(0)==="0"&&phone.charAt(1)==="9")
      return 1
    if(phone.charAt(0)==="9")return 1
  }
=======
const user =require("../../model/user");
const userInfo =require("../../model/userInfo");
var Kavenegar = require('kavenegar');
var api = Kavenegar.KavenegarApi({
    apikey: process.env.SMS_API
});
 
async function sendSmsUser(userId,template,message,token2,token3){
	console.log(message,token2,token3)
    const userData= await user.findOne({_id:userId});
    const userInfoData= await userInfo.findOne({userId: userId });
    //console.log(userInfoData)
    var phoneNumber=""
    if(userInfoData&&userInfoData.mobile){
      phoneNumber= userInfoData.mobile
    } 
    else{
      if(isMobile(userData.phone))phoneNumber=userData.phone;
    }
    
    if(phoneNumber){
      api.VerifyLookup({
        token: message,//message,
        token2:token2,
        token3:token3,
        template: template,//"mgmVerify",
        receptor: phoneNumber
      },function(response,status) {
        console.log(response);
        console.log(status);
        }) 
    }
  }
  const isMobile=(phone)=>{
    if(!phone) return 0
    if(!/^\d+$/.test(phone))return 0
    var leng = phone.length
    if(leng<10) return 0
    if(phone.charAt(0)==="0"&&phone.charAt(1)==="9")
      return 1
    if(phone.charAt(0)==="9")return 1
  }
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
  module.exports = sendSmsUser