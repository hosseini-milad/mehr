import Cookies from "universal-cookie";
import StatusBar from "../modules/Components/StatusBar";
import Paging from "../modules/Components/Paging";
import errortrans from "../translate/error";
import OrderTable from "../modules/Orders/OrderTable";
import OrderFilters from "../modules/Orders/OrderComponent/OrderFilters";
import { useEffect } from "react";
import { useState } from "react";
import env from "../env";
import {
  getFiltersFromUrl,
  updateUrlWithFilters,
  defaultFilterValues,
  handleFilterChange,
} from "../utils/filterUtils"; // Import the utility functions

const cookies = new Cookies();

function Orders(props) {
  const direction = props.lang ? props.lang.dir : errortrans.defaultDir;
  const lang = props.lang ? props.lang.lang : errortrans.defaultLang;
  const [content, setContent] = useState("");
  const [filters, setFilters] = useState(getFiltersFromUrl());
  const [loading, setLoading] = useState(0);
  const [collect, setCollect] = useState(0);
  const token = cookies.get(env.cookieName);
  useEffect(() => {
    setLoading(1);
    const body = {
      offset: filters.offset || "0",
      pageSize: filters.pageSize || "10",
      customer: filters.customer,
      orderNo: filters.orderNo,
      status: filters.status,
      brand: filters.brand,
      dateFrom: filters.date && filters.date.dateFrom,
      dateTo: filters.date && filters.date.dateTo,
      access: "manager",
    };
    const postOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token && token.token,
        userId: token && token.userId,
      },
      body: JSON.stringify(body),
    };
    fetch(env.siteApi + "/panel/order/list", postOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(0);
          setContent("");
          setTimeout(() => setContent(result), 200);
        },
        (error) => {
          setLoading(0);
          console.log(error);
        }
      );
  }, [filters]);
  const collectData = () => {
    const body = {
      orderNo: content.orderNo,
    };
    const postOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token && token.token,
        userId: token && token.userId,
      },
      body: JSON.stringify(body),
    };
    console.log(postOptions);
    fetch(env.siteApi + "/sepidar/order-export", postOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setCollect(result.url);
        },
        (error) => {
          setLoading(0);
          console.log(error);
        }
      );
  };

  function handleFilterChange(newFilters) {
    setFilters(newFilters);
    updateUrlWithFilters(newFilters);
  }
  //window.scrollTo(0, 270);},[pageNumber,filters,perPage,refreshTable])
  return (
    <div className="user" style={{ direction: direction }}>
      <div className="od-header">
        <div className="od-header-info">
          <div className="od-header-name">
            <p>{errortrans.orders[lang]}</p>
          </div>
        </div>
        {!collect ? (
          <div className="od-header-btn">
            <label className="edit-btn" onClick={() => collectData()}>
              <i className="fa-solid fa-envelope-o"></i>
              جمع آوری اطلاعات
            </label>
          </div>
        ) : (
          <div className="od-header-btn">
            <label
              className="accept-btn"
              onClick={() =>
                window.open(env.siteApiUrl + "/" + collect, "_blank")
              }
            >
              <i className="fa-solid fa-envelope-o"></i>
              دریافت اطلاعات
            </label>
          </div>
        )}
      </div>
      <div className="list-container">
        <StatusBar
          lang={lang}
          token={token}
          filters={filters}
          status={content.rxStatus}
          setFilters={setFilters}
        />
        <OrderFilters
          lang={props.lang}
          setFilters={handleFilterChange}
          updateUrlWithFilters={updateUrlWithFilters} // Pass the function as a prop
          currentFilters={filters}
          options={content.brand}
          filters={filters}
        />
        <div className="user-list">
          {loading ? (
            env.loader
          ) : (
            <OrderTable orders={content} lang={lang} direction={direction} />
          )}
        </div>
        <Paging
          content={content}
          setFilters={updateUrlWithFilters}
          filters={filters}
          lang={props.lang}
          updateUrlWithFilters={updateUrlWithFilters} // Pass the function as a prop
        />
      </div>
    </div>
  );
}
export default Orders;
