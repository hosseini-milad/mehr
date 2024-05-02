import StyleInput from "../../../components/Button/Input"
import StyleSelect from "../../../components/Button/AutoComplete"

function UserFilters(props){
    return(
        <div className="user-filter">
            <StyleSelect title={"Role"} class="filterComponent" direction={props.lang.dir}
            options={props.options} 
            action={(e)=>props.setFilters(prevState => ({
              ...prevState,
              access:e
            }))}/>
            <StyleSelect title={"Credit"} class="filterComponent" direction={props.lang.dir}
            options={["true","false"]} 
            action={(e)=>props.setFilters(prevState => ({
              ...prevState,
              credit:e
            }))}/>
            
            <StyleSelect title={"profile"} class="filterComponent" direction={props.lang.dir}
            options={props.profiles||[]} label="profileName"
            action={(e)=>props.setFilters(prevState => ({
              ...prevState,
              profile:e?e._id:''
            }))}/>
            
            <StyleSelect title={"class"} class="filterComponent" direction={props.lang.dir}
            options={props.classes||[]} label="className"
            action={(e)=>props.setFilters(prevState => ({
              ...prevState,
              class:e?e._id:''
            }))}/>
          <div className="serach-input">
            <StyleInput title={"Customer"} direction={props.lang.dir} 
            action={(e)=>(e.length>3||e.length===0)&&props.setFilters(prevState => ({
              ...prevState,
              customer:e
            }))}/>
            <i className="tableIcon fas fa-ellipsis-v"></i>
          </div>
          <div className="option-sub">
            <div className="option">
              <i className="fa-solid fa-print fa-sm"></i>
              <p>Print</p>
            </div>
            <div className="option">
              <i className="fa-solid fa-file-import fa-sm"></i>
              <p>Import</p>
            </div>
            <div className="option">
              <i className="fa-solid fa-file-export fa-sm"></i>
              <p>Export</p>
            </div>
          </div>
        </div>
    )
}
export default UserFilters