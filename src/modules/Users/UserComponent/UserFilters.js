import StyleInput from "../../../components/Button/Input";
import StyleSelect from "../../../components/Button/AutoComplete";

function UserFilters(props) {

  const handleFilterChange = (property, value) => {
    const newValue = value ? (value._id ? value._id : value) : "";
    props.setFilters((prevState) => ({
      ...prevState,
      [property]: newValue,
    }));
    // Update URL here
    props.updateUrlWithFilters({
      ...props.currentFilters,
      [property]: newValue,
    });
  };

  return (
    <div className="user-filter">

    
    <StyleSelect
    title={"Group"}
    class="filterComponent"
    direction={props.lang.dir}
    options={['سهندگاز', 'مهرگاز']}
    action={(e) => handleFilterChange("group", e)}
    />
    
    <StyleSelect
    title={"Active"}
    class="filterComponent"
    direction={props.lang.dir}
    options={["false","true"]}
    action={(e) => handleFilterChange("active", e)}
    />

    <StyleSelect
    title={"Credit"}
    class="filterComponent"
    direction={props.lang.dir}
    options={["true", "false"]}
    action={(e) => handleFilterChange("credit", e)}

    />
    
    <StyleSelect
    title={"profile"}
    class="filterComponent"
    direction={props.lang.dir}
    options={props.profiles || []}
    label="profileName"
    action={(e) => handleFilterChange("profile", e)}

    />
    
    <StyleSelect
    title={"class"}
    class="filterComponent"
    direction={props.lang.dir}
    options={props.classes || []}
    label="className"
    action={(e) => handleFilterChange("class", e)}

    />
    <div className="serach-input">
    <StyleInput
    title={"Customer"}
    direction={props.lang.dir}
    action={(e) => handleFilterChange("customer", e)}
    />
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
  );
}
export default UserFilters;
