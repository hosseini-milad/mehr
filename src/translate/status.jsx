const statustrans ={
    all:{
        english: "All",
        persian: "همه",
        index:0,
        color: "rgb(255, 255, 255)",
        background: "rgb(33, 43, 54)"
    },
    initial:{
        english: "Initial",
        persian: "در حال ثبت",
        index:2,
        color: "rgb(17, 141, 87)",
        background: "rgba(34, 197, 94, 0.16)"
    },
    inprogress:{
        english: "Inprogress",
        persian: "در حال انجام",
        index:3,
        color: "rgb(183, 110, 0)",
        background: "rgba(255, 171, 0, 0.16)"
    },
    contractor:{
        english: "contractor",
        persian: "در حال انجام",
        index:3,
        color: "rgb(183, 110, 0)",
        background: "rgba(255, 171, 0, 0.16)"
    },
    accept:{
        english: "Accept",
        persian: "تایید شده",
        index:2,
        color: "rgb(17, 141, 87)",
        background: "rgba(34, 197, 94, 0.16)"
    },
    qc:{
        english: "Control",
        persian: "کنترل کارخانه",
        index:2,
        color: "rgb(17, 141, 87)",
        background: "rgba(34, 197, 94, 0.16)"
    },
    inproduction:{
        english: "Inproduction",
        persian: "در حال تولید",
        index:2,
        color: "rgb(17, 141, 87)",
        background: "rgba(34, 197, 94, 0.16)"
    },
    faktor:{
        english: "Faktor",
        persian: "فاکتور شده",
        index:5,
        color: "rgb(17, 141, 87)",
        background: "rgba(34, 197, 94, 0.16)"
    },
    sending:{
        english: "Sending",
        persian: "ارسال از کارخانه",
        index:5,
        color: "rgb(17, 141, 87)",
        background: "rgba(34, 197, 94, 0.16)"
    },
    delivered:{
        english: "Delivered",
        persian: "تحویل به انبار",
        index:5,
        color: "rgb(17, 141, 87)",
        background: "rgba(34, 197, 94, 0.16)"
    },
    suspend:{
        english: "Suspend",
        persian: "معلق",
        index:5,
        color: "rgb(17, 141, 87)",
        background: "rgba(34, 197, 94, 0.16)"
    },
    shop:{
        english: "Shop",
        persian: "فروشگاه",
        index:5,
        color: "rgb(17, 141, 87)",
        background: "rgba(34, 197, 94, 0.16)"
    },
    storeSent:{
        english: "Shop",
        persian: "تحویل به انبار",
        index:5,
        color: "rgb(17, 141, 87)",
        background: "rgba(34, 197, 94, 0.16)"
    },
    hold:{
        english: "Hold",
        persian: "انتظار",
        index:5,
        color: "rgb(17, 141, 87)",
        background: "rgba(34, 197, 94, 0.16)"
    },
    completed:{
        english: "Completed",
        persian: "تمام شده",
        index:8,
        color: "rgb(17, 141, 87)",
        background: "rgba(34, 197, 94, 0.16)"
    },
    cancel:{
        english: "Cancel",
        persian: "ابطال شده",
        index:9,
        color: "rgb(183, 29, 24)",
        background: "rgba(255, 86, 48, 0.16)"
    },
    inVehicle:{
        english: "inVehicle",
        persian: "ورود خودرو",
        index:9,
        color: "rgb(183, 110, 0)",
        background: "rgba(255, 171, 0, 0.16)"
    },
    saleControl:{
        english: "Control",
        persian: "کنترل",
        index:9,
        color: "rgb(183, 110, 0)",
        background: "rgba(255, 171, 0, 0.16)"
    },
    outVehicle:{
        english: "outVehicle",
        persian: "خروج خودرو",
        index:9,
        color: "rgb(183, 29, 24)",
        background: "rgba(255, 86, 48, 0.16)"
    },
    
    active:{
        english: "Active",
        persian: "فعال",
        index:8,
        color: "rgb(17, 141, 87)",
        background: "rgba(34, 197, 94, 0.16)"
    },
    true:{
        english: "Active",
        persian: "فعال",
        index:8,
        color: "rgb(17, 141, 87)",
        background: "rgba(34, 197, 94, 0.16)"
    },
    false:{
        english: "Deactive",
        persian: "غیرفعال",
        index:8,
        color: "rgb(183, 29, 24)",
        background: "rgba(255, 86, 48, 0.16)"
    },
    paid:{
        english: "Paid",
        persian: "موفق",
        index:8,
        color: "rgb(17, 141, 87)",
        background: "rgba(34, 197, 94, 0.16)"
    },
    
    sendToBank:{
        english: "send To Bank",
        persian: "ارسال به بانک",
        index:8,
        color: "rgb(183, 110, 0)",
        background: "rgba(255, 171, 0, 0.16)"
    },
    
    undone:{
        english: "Undone",
        persian: "ناموفق",
        index:8,
        color: "rgb(183, 29, 24)",
        background: "rgba(255, 86, 48, 0.16)"
    },
}
export default statustrans

export const serviceKind=[
    {
        english:'Color',
        persian:"رنگ",
    },
    {
        english:'Mirror',
        persian:"میرور"
    },
    {
        english:'Coating',
        persian:"پوشش"
    },
    {
        english:'Extra',
        persian:"خدمات جانبی"
    },
    {
        english:'Cylinder',
        persian:"خدمات سیلندر"
    }
]
export const priority={
    low:{
        english:'Low',
        persian:"کم",
    },
    mid:{
        english:'Medium',
        persian:"متوسط"
    },
    high:{
        english:'High',
        persian:"زیاد"
    }
}