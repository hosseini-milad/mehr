import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import UserTable from "../modules/Users/UserTable";
import StatusBar from "../modules/Components/StatusBar";
import Paging from "../modules/Components/Paging";
import errortrans from "../translate/error";
import UserFilters from "../modules/Users/UserComponent/UserFilters";
import env from "../env";
import tabletrans from "../translate/tables";
import SMS from "../components/Button/SMS";
import ResetCredit from "../components/Button/ResetCredit";

const cookies = new Cookies();

function Users(props) {
  const direction = props.lang ? props.lang.dir : errortrans.defaultDir;
  const lang = props.lang ? props.lang.lang : errortrans.defaultLang;
  const [content, setContent] = useState("");
  const [filters, setFilters] = useState(getFiltersFromUrl());
  const [loading, setLoading] = useState(0);
  const [showSms, setShowSMS] = useState(0);
  const [update, setUpdate] = useState(0);
  const [total, setTotal] = useState("");
  const [errorHandling, setErrorHandling] = useState(0);
  const [collect, setCollect] = useState(0);
  const [showPop, setShowPop] = useState(0);
  const [showCredit, setShowCredit] = useState(0);


  const token = cookies.get(env.cookieName);
  useEffect(() => {
    setLoading(1);
    const body = {
      offset: filters.offset || "0",
      pageSize: filters.pageSize || "10",
      customer: filters.customer,
      orderNo: filters.orderNo,
      profile: filters.profile,
      class: filters.class,
      credit: filters.credit,
      status: filters.status,
      brand: filters.brand,
      dateFrom: filters.date && filters.date.dateFrom,
      dateTo: filters.date && filters.date.dateTo,
      access: filters.access,
      group: filters.group,
      active: filters.active,
      FOB: filters.FOB,
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
    fetch(env.siteApi + "/panel/user/list", postOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(0);
          setContent("");
          setTimeout(() => setContent(result), 200);
          setTotal(result.size)
        },
        (error) => {
          setLoading(0);
          console.log(error);
        }
      );
  }, [filters]);
  // collect for excel
  const collectData = () => {
    const body = {
      offset: filters.offset || "0",
      pageSize: filters.pageSize || "10",
      customer: filters.customer,
      orderNo: filters.orderNo,
      profile: filters.profile,
      class: filters.class,
      credit: filters.credit,
      status: filters.status,
      brand: filters.brand,
      dateFrom: filters.date && filters.date.dateFrom,
      dateTo: filters.date && filters.date.dateTo,
      access: filters.access,
      group: filters.group,
      active: filters.active,
      FOB: filters.FOB,
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
    fetch(env.siteApi + "/panel/user/export-user", postOptions)
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

  useEffect(() => {
    if (update === 0) return;
    const body = {
      url: update,
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
    fetch(env.siteApi + "/panel/user/parse-list", postOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          setErrorHandling(result.matchError);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [update]);

  // Function to get filters from URL
  function getFiltersFromUrl() {
    const searchParams = new URLSearchParams(window.location.search);
    const filters = {};
    for (const [key, value] of searchParams.entries()) {
      filters[key] = value;
    }
    return filters;
  }
  const sendCredit=()=>{
    const postOptions={
        method:'post',
        headers: {'Content-Type': 'application/json',
        "x-access-token":token&&token.token,"userId":token&&token.userId}
    }
  fetch(env.siteApi + "/panel/user/send-credit",postOptions)
  .then(res => res.json())
  .then(
    (result) => {
      },
    (error) => {
      console.log(error);
    }
  )
  }
  // // Function to update URL with filters
  // function updateUrlWithFilters(newFilters) {
  //   const searchParams = new URLSearchParams();
  //   for (const key in newFilters) {
  //     if (newFilters[key]) {
  //       searchParams.set(key, newFilters[key]);
  //     }
  //   }
  //   window.history.replaceState({}, '', `${window.location.pathname}?${searchParams}`);
  // }
  // Function to update URL with filters
  function updateUrlWithFilters(newFilters) {
    const searchParams = new URLSearchParams(window.location.search);
    for (const key in newFilters) {
      if (newFilters[key]) {
        searchParams.set(key, newFilters[key]);
      } else {
        searchParams.delete(key); // Remove the parameter if the value is falsy
      }
    }
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }

  // Function to handle filter changes
  function handleFilterChange(newFilters) {
    setFilters(newFilters);
    updateUrlWithFilters(newFilters);
  }

  const resizeFile = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  const updateCustomers = async (event) => {
    const uploadFile = event.target.files[0];
    const tempfile = await resizeFile(uploadFile);
    const token = props.token;
    const postOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token && token.token,
        userId: token && token.userId,
      },
      body: JSON.stringify({
        base64image: tempfile,
        folderName: "excel",
        imgName: uploadFile.name.split(".")[0],
      }),
    };
    fetch(env.siteApi + "/panel/user/upload", postOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          //console.log(result)
          if (result.error) {
          } else {
            setUpdate(result.url);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <div className="user" style={{ direction: direction }}>
      <div className="od-header">
        <div className="od-header-info">
          <div className="od-header-name">
            <p>{tabletrans.customers[lang]}</p>
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


        <div className="od-header-btn">
          <label className="edit-btn" onClick={()=>sendCredit()}>
            <i className="fa-solid fa-envelope-o"></i>
            انتقال اعتبار
          </label>
          <label className="edit-btn" onClick={() => setShowCredit(1)}>
          <i className="fa-solid fa-bell"></i>
            پاک کردن اعتبارات
          </label>
          <label className="edit-btn" onClick={() => setShowSMS(1)}>
            <i className="fa-solid fa-envelope-o"></i>
            {tabletrans.sendSms[lang]}
          </label>
          <label
            className="edit-btn"
            onClick={() => (window.location.href = "/newusers")}
          >
            <i className="fa-solid fa-user"></i>
            {tabletrans.newCu[lang]}
          </label>
          <label
            className="edit-btn"
            onClick={() => (window.location.href = "/class")}
          >
            <i className="fa-solid fa-plus"></i>
            {tabletrans.classes[lang]}
          </label>
          <label htmlFor="upFiles" className="edit-btn">
            <i className="fa-solid fa-refresh"></i>
            {tabletrans.update[lang]}
          </label>
          <input
            id="upFiles"
            type="file"
            accept=".*"
            className="hidden"
            onChange={updateCustomers}
          />
        </div>
      </div>
      <div className="list-container">
        <StatusBar />
        <UserFilters
          lang={props.lang}
          // setFilters={setFilters}
          setFilters={handleFilterChange}
          options={content.access}
          profiles={content.profiles}
          classes={content.classes}
          currentFilters={filters}
          total={total}
          updateUrlWithFilters={updateUrlWithFilters} // Pass the function as a prop
        />
        <ul>
          {errorHandling &&
            errorHandling.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
        <div className="user-list">
          <UserTable userList={content} lang={props.lang} />
        </div>
        <Paging
          content={content}
          setFilters={setFilters}
          filters={filters}
          lang={props.lang}
          updateUrlWithFilters={updateUrlWithFilters} // Pass the function as a prop
        />
      </div>
      {showSms ? (
        <SMS
          title="ارسال پیامک"
          close={setShowSMS}
          text={`ارسال پیامک برای ${
            content.filter && content.filter.length
          } مشترک`}
          lang={props.lang}
          userList={content.filter}
        />
      ) : (
        <></>
      )}
      {showPop ? (
        <SMS
          title="پاپ آپ"
          close={setShowPop}
          text={`ارسال پاپ آپ برای ${
            content.filter && content.filter.length
          } مشترک`}
          lang={props.lang}
          userList={content.filter}
        />
      ) : (
        <></>
      )}
      {showCredit ? (
        <ResetCredit
          close={setShowCredit}
          lang={props.lang}
          userList={content.filter}
          token={token}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
export default Users;
