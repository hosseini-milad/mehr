import { useState } from "react";
import Status from "../Components/Status";
import UserClassInTable from "./UserComponent/UserClassInTable";
import { normalPriceSum } from "../../env";

function UserTableRow(props) {
  const [openOption, setOpenOption] = useState(0);
  const [checkState, setCheckState] = useState(false);
  const activeAcc = props.index === props.detail;
  const user = props.user;
  return (
    <tr>
      <td className="checkBoxStyle">
        <input
          type="checkbox"
          name=""
          id=""
          checked={checkState}
          onChange={(e) => setCheckState(checkState ? false : true)}
        />
      </td>
      <td>
        <div className="cu-avatar">
          <img
            src={
              user.group && user.group.includes("مهر")
                ? "/img/mehr.png"
                : "/img/sahand.png"
            }
            className="avatar-sm me-3"
            alt="xd"
          />
          <div className="cu-name">
            <p className="name">{user.cName}</p>
            <p className="email">
              شماره تماس:{" "}
              {user.userDetail && user.userDetail[0]
                ? user.userDetail[0].mobile
                : ""}
            </p>
          </div>
        </div>
      </td>
      <td>
        <div className="cu-company">
          {user.credit1 || user.credit2 ? (
            <h6>{user.remainCredit}</h6>
          ) : (
            <h6>ندارد</h6>
          )}
          {user.credit1 || user.credit2 ? (
            <small>
              all credit: {normalPriceSum(user.credit1, user.credit2)}
            </small>
          ) : (
            <></>
          )}
        </div>
      </td>
      <td>
        <div className="cu-company">
          <h6>{user.remainFob}</h6>
          {user.fob ? <small>all fob:{user.fob}</small> : <></>}
        </div>
      </td>
      <td>
        <div className="cu-name">
          <p className="name">{user.phone}</p>
          <p className="email">کد: {user.meli}</p>
        </div>
      </td>
      <td>
        <div className="cu-company" style={{ width: "150px" }}>
          {user.class ? <UserClassInTable classes={user.class} /> : <></>}
        </div>
      </td>
      <td>
        <div className="pen-status order-status">
          <Status status={"active"} lang={props.lang} />
        </div>
      </td>
      <td>
        <div className="more-btn">
          <i
            className="tableIcon fas fa-edit"
            onClick={() =>
              (window.location.href = "/customers/detail/" + user._id)
            }
          ></i>
          <i
            className="tableIcon fas fa-ellipsis-v"
            onClick={() => setOpenOption(openOption ? 0 : 1)}
          ></i>
        </div>
        {openOption ? (
          <div className="sub-more-menu">
            <div className="sub-option sub-delete">
              <i
                className="tableIcon fas fa-remove"
                style={{ color: "#ff0000" }}
              ></i>
              <p>Delete</p>
            </div>
            <div className="sub-option sub-edit">
              <i className="tableIcon fas fa-edit"></i>
              <p>Edit</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </td>
    </tr>
  );
}
export default UserTableRow;
