import { useEffect, useState } from "react"
import env, { normalPriceCount } from "../../env"

function TransPrint(props){
    const transId = props.data
    console.log(transId)
    const [data,setData] = useState('')
    const [trans,setTrans] = useState('')
    useEffect(() => {
        const body={
            transId:transId,
        }
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
            //"x-access-token":token&&token.token,"userId":token&&token.userId
        },
            body:JSON.stringify(body)
          }
          console.log(postOptions)
      fetch(env.siteApi + "/panel/user/transactions",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
            setData('')
            setTimeout(()=> setData(result),200)
            if(result.filter[0])
            setTrans(result.filter[0])
        },
        (error) => {
          console.log(error);
        }
        
    )},[])
    console.log(data)
    if(trans)
    return(
        <div className="printSmall">
            <div className="printRow">
                <div className="fieldPrint p6">
                    <div className="titlePrint">
                        شماره پیگیری:
                    </div>
                    <span> {trans.saleReferenceId} </span>
                </div>
                <div className="fieldPrint p6">
                    <div className="titlePrint">
                        مبلغ:
                    </div>
                    <span> {normalPriceCount(trans.query.FinalAmount,1)} ریال</span>
                </div>
            </div>
            <div className="printRow">
                <div className="fieldPrint p12">
                    <div className="titlePrint">
                        شماره کارت واریزی:
                    </div>
                    <span style={{direction:"ltr"}}> {trans.query.CardHolderPan} </span>
                </div>
                
            </div>
            <div className="printRow">
                <div className="fieldPrint p12">
                    <div className="titlePrint">
                        تاریخ واریزی:
                    </div>
                    <span style={{direction:"ltr"}}> {new Date(trans.payDate).toLocaleDateString('fa')} 
                    <small style={{marginLeft:"5px"}}>({new Date(trans.payDate).toLocaleTimeString('fa')})</small> </span>
                </div>
                
            </div>
            <div className="printRow">
                <div className="fieldPrint p12">
                    <div className="titlePrint">
                        شماره ترمینال:
                    </div>
                    <span> {data.terminalId} </span>
                </div>
                
            </div>
            <div className="printRow">
                <div className="fieldPrint p12">
                    <div className="titlePrint">
                        مشتری:    
                    </div>
                    <span> {trans.orderData[0].userDetail[0].cName} </span>
                </div>
                
            </div>
            <div className="printRow">
                <div className="fieldPrint p12">
                    <div className="titlePrint">
                        شماره سفارش:
                    </div>
                    <span> {trans.stockOrderNo} </span>
                </div>
                
            </div>
        </div>
    )
}
export default TransPrint