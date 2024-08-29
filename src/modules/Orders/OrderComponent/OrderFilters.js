import StyleInput from "../../../components/Button/Input";
import StyleSelect from "../../../components/Button/AutoComplete";
import StyleDatePicker from "../../../components/Button/DatePicker";
import tabletrans from "../../../translate/tables";
import { useState } from "react";

function OrderFilters(props) {
  const lang = props.lang;
  const options = props.options;

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
  const createConditionalAction = (property, minLength) => {
    return (e) => {
      if (e.length > minLength || e.length === 0) {
        handleFilterChange(property, e);
      }
    };
  };
  
  return (
    <div className="user-filter">
      <div className="serach-input">
        <StyleInput
          title={"Order No"}
          direction={props.lang.dir}
          action={createConditionalAction("orderNo", 3)} // Remove the parentheses here

        />
        <StyleSelect
        title={"Group"}
        class="filterComponent"
        direction={props.lang.dir}
        options={["سهندگاز", "مهرگاز","چندار"]}
        action={(e) => handleFilterChange("group", e)}
        />
        <StyleSelect
        title={"سفارش دهنده"}
        class="filterComponent"
        direction={props.lang.dir}
        options={["مشتری", "عامل"]}
        action={(e) => handleFilterChange("order", e)}
        />
        <StyleSelect
        title={"عاملین"}
        class="filterComponent"
        direction={props.lang.dir}
        action={(e) => handleFilterChange("agents", e)}
        />
        <StyleInput
          title={"Customer"}
          direction={props.lang.dir}
          action={(e) => handleFilterChange("customer", e)}
        />

        <StyleDatePicker
          title={tabletrans.selectDate[props.lang.lang]}
          class="filterComponent"
          direction={props.lang.dir}
          local={props.lang.dir === "ltr" ? "en" : "fa"}
          action={(e) => handleFilterChange("date", e)}

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
export default OrderFilters;
