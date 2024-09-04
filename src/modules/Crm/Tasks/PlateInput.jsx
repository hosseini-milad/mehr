import { useEffect, useState } from "react"
import env from "../../../env"
import StyleSelect from "../../../components/Button/AutoComplete"

const PlateInput = (props) => {
  const setChangeData = props.setChangeData
  const Alefba = [...'آبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ'];
  Alefba[0]="الف"
  return (
    <div className="license-plate">
      <div className="blue-column">
      <div class="flag">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="text">
        <div>I.R.</div>
        <div>IRAN</div>
      </div>
      </div>
      <input type="tel" maxLength={2} className="plate-input" placeholder="- -" pattern="[0-9]{2}" 
      onChange={(e)=>setChangeData(prevState => ({
                        ...prevState,
                        twoNum:e?e.target.value:''
                      }))}/>
      <select
        name="" 
        id="" 
        className="plate-input" 
        onChange={(e)=>setChangeData(prevState => ({
          ...prevState,
          alpha:e?e.target.value:''
        }))}
        >
        {Alefba.map((i)=>(
          <option value={i}>{i}</option>
        ))}
      </select>
      <input
        type="tel"
        maxLength={3}
        className="plate-input"
        placeholder="- - -"
        pattern="[0-9]{3}"
        onChange={(e)=>setChangeData(prevState => ({
          ...prevState,
          threeNum:e?e.target.value:''
        }))}
        />
      <div className="ir-num">
      <p>ایران</p>
      <input type="tel" maxLength={2} className="plate-input" placeholder="- -" pattern="[0-9]{2}" 
      onChange={(e)=>setChangeData(prevState => ({
                        ...prevState,
                        irNum:e?e.target.value:''
                      }))}/>
      </div>
    </div>
  )
}

export default PlateInput
