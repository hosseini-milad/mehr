const menutrans ={
title:{
    english:"MehrGaz",
    persian:"مهرگاز",
    icon:"fa-eercast",
    href:"https://mehrgaz.com"
    
},
menu:[
    {
        english: "OverView",
        persian: "OverView",
        index:0,
        icon:"fa-dashboard",
        href:"#",
        children:[
        {
            english: "Dashboard",
            persian: "داشبورد",
            index:0,
            icon:"fa-dashboard",
            href:"/",
            url:""
        },
        {
            english: "Tasks",
            persian: "وظایف و پیگیری",
            index:1,
            icon:"fa-bar-chart",
            href:"/crm",
            url:"crm"
        },
        {
            english: "CRM-ORDERS",
            persian: "مدیریت سفارشات",
            index:1,
            icon:"fa-check",
            href:"/crm-orders",
            url:"crm-orders"
        },
        {
            english: "Sale Analyze",
            persian: "آنالیز فروش",
            index:1,
            icon:"fa-bar-chart",
            href:"/saleAnalyze",
            url:"saleAnalyze"
        },
        ]
    },
    {
        english: "Customers",
        persian: "مشتریان",
        index:1,
        icon:"fa-users",
        href:"#",
        children:[
            {
                english: "Customers",
                persian: "مدیریت مشتریان",
                index:0,
                icon:"fa-users",
                href:"/users",
                url:"users"
            },
            {
                english: "Sale Policy",
                persian: "سیاست های فروش",
                index:0,
                icon:"fa-percent",
                href:"/policy",
                url:"policy"
            },
            ]
    },
    {
        english: "Orders",
        persian: "سفارشات",
        index:2,
        icon:"fa-tasks",
        href:"#",
        children:[
            {
                english: "Orders",
                persian: "سفارشات",
                index:0,
                icon:"fa-tasks",
                href:"/orders",
                url:"orders"
            },
            {
                english: "Transactions",
                persian: "تراکنش ها",
                index:0,
                icon:"fa-tasks",
                href:"/transactions",
                url:"transactions"
            },
            ]
    },
    {
        english: "Products",
        persian: "محصولات و خدمات",
        index:3,
        icon:"fa-bar-chart",
        href:"#",
        children:[
            {
                english: "Products",
                persian: "محصولات",
                index:0,
                icon:"fa-dashboard",
                href:"/products",
                url:"products"
            },
            {
                english: "Services",
                persian: "خدمات",
                index:1,
                icon:"fa-bar-chart",
                href:"/services",
                url:"services"
            },
            {
                english: "Brands",
                persian: "برندها",
                index:1,
                icon:"fa-bar-chart",
                href:"/brands",
                url:"brands"
            },
            {
                english: "Category",
                persian: "دسته بندی ها",
                index:1,
                icon:"fa-bar-chart",
                href:"/category",
                url:"category"
            },
            ]
    }
],

setting:[
    {
        english: "Access",
        persian: "دسترسی ها",
        index:0,
        icon:"fa-key",
        href:"/access",
        url:"access"
    },
    {
        english: "Filters",
        persian: "فیلترها",
        index:1,
        icon:"fa-key",
        href:"/filter",
        url:"filter"
    },
    {
        english: "Learn",
        persian: "آموزش",
        index:1,
        icon:"fa-learn",
        href:"/learn",
        url:"learn"
    },
    {
        english: "Notif",
        persian: "اعلانات",
        index:1,
        icon:"fa-bull-horn",
        href:"/notification",
        url:"notification"
    },
    {
        english: "Advertisement",
        persian: "تبلیغات",
        index:1,
        icon:"fa-bull-horn",
        href:"/adv",
        url:"adv"
    }
]
}
export default menutrans