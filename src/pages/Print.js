import TransPrint from "../modules/Prints/TransPrint";

function Print(){
    const printData = window.location.search
    const urlParams = new URLSearchParams(printData);
    const printType = urlParams&&urlParams.get('type')
    console.log(printType)
    if(urlParams.get('data'))
    return(
        <main >
            {printType==="transaction"?
            <TransPrint data ={urlParams.get('data')}/>:<></>}
        </main>
    )
}
export default Print