import { IMG } from "./images"
import { NAV } from "./nav"

export const Tabjson = [
    {
        name: "Home",
        icon: 'home',
        icontype: 'entypo',
        nav: NAV.HOME_NAV

    },
    {
        name: "Portfolio",
        icon: 'line-graph',
        icontype: 'entypo',
        nav: NAV.PORTFOLIO_NAV

    },
    {
        name: "Group",
        icon: 'groups',
        icontype: 'material',
        nav: NAV.GROUP_NAV

    },
    {
        name: "Profile",
        icon: 'user-alt',
        icontype: 'font-awesome-5',
        nav: NAV.PROFILE_NAV

    },
]
export const potfoliotab = [
    {
        title: "Installment History"
    },
    {
        title: "Active Loan"
    },
    {
        title: 'Penalty'
    }

]


export const installationhistory = [
    {
        id: 1,
        month: "May",
        date: "11/05/2024",
        ins: [
            {
                payid: "SM1",
                report_person: "Minal",
                desc: "HAnd over to ",
                payment_type: "Cash",
                status: "Done",
                title: "Regular INS",
                price: 300,
                pay_data: "11/05/2024"
            },
            {
                payid: "SM2",
                report_person: "Minal",
                desc: "HAnd over to ",
                payment_type: "Cash",
                status: "In progress",
                title: "Loan INS",
                price: 2000,
                pay_data: "11/05/2024"
            },

        ]

    },
    {
        id: 2,
        month: "April",
        date: "11/05/2024",
        ins: [
            {
                payid: "SM3",
                report_person: "Minal",
                desc: "HAnd over to ",
                payment_type: "Cash",
                status: "Done",
                title: "Regular INS",
                price: 300,
                pay_data: "11/04/2024"
            }
        ]

    },
    {
        id: 3,
        month: "March",
        date: "11/05/2024",
        ins: [
            {
                payid: "SM3",
                report_person: "Minal",
                desc: "HAnd over to ",
                payment_type: "Cash",
                status: "Rejected",
                title: "Regular INS",
                price: 300,
                pay_data: "11/04/2024"
            },
            {
                payid: "SM4",
                report_person: "Minal",
                desc: "HAnd over to ",
                payment_type: "Cash",
                status: "Done",
                title: "Regular INS",
                price: 2000,
                pay_data: "11/04/2024"
            },
            {
                payid: "SM5",
                report_person: "Minal",
                desc: "HAnd over to ",
                payment_type: "Cash",
                status: "Done",
                title: "Regular INS",
                price: 300,
                pay_data: "11/04/2024"
            },
        ]

    },
    {
        id: 2,
        month: "March",
        date: "11/03/2024",
        ins: [
            {
                payid: "SM6",
                report_person: "Minal",
                desc: "HAnd over to ",
                payment_type: "Cash",
                status: "Done",
                title: "Regular INS",
                price: 300,
                pay_data: "11/03/2024"
            }
        ]

    },



]

export const activeloan = [
    {
        id: 1,
        title: "Account Loan",
        principal_amt: 20000,
        intrest_rate: "2%",
        intrest_amt: 2000,
        Total_amt: 22000,
        active_date: "10/04/2024",
        ending_date: "10/02/2025",
        installment_month: 10,
        bounce_month: 0,
        pending_months: 8

    },
    {
        id: 1,
        title: "Account Loan",
        principal_amt: 20000,
        intrest_rate: "2%",
        intrest_amt: 2000,
        Total_amt: 22000,
        active_date: "10/04/2024",
        ending_date: "10/02/2025",
        installment_month: 10,
        bounce_month: 0,
        pending_months: 8

    }
]
export const loanjson = [
    {
        id: 1,
        title: "Account Loan",
        active: true,
        principlevalue: 50000,
        totalvalue: 55000,
        paidvalue: 25000,
        members: [
            {
                userId: 1,
                name: "member 1",
                amount: 30000,
                loanvalue: 33000,
                lastdate: "13/05/2024",
                nextdate: "13/06/2024",
                payamount: 20000,
                pendingins: 6,
                pendingamt: 13000,
                img: IMG.USER

            },
            {
                userId: 2,
                name: "member 2",
                amount: 20000,
                loanvalue: 26000,
                lastdate: "13/05/2024",
                nextdate: "13/06/2024",
                payamount: 19000,
                pendingins: 6,
                pendingamt: 7000,
                img: IMG.USER

            }
        ]

    },
    {
        id: 2,
        title: "Account Loan",
        active: false,
        principlevalue: 50000,
        totalvalue: 55000,
        paidvalue: 25000,
        members: [
            {
                userId: 1,
                name: "member 1",
                amount: 30000,
                loanvalue: 33000,
                lastdate: "13/05/2024",
                nextdate: "13/06/2024",
                payamount: 25000,
                pendingins: 6,
                pendingamt: 8000,
                img: IMG.USER

            },
            {
                userId: 2,
                name: "member 2",
                amount: 20000,
                loanvalue: 22000,
                lastdate: "13/05/2024",
                nextdate: "13/06/2024",
                payamount: 25000,
                pendingins: 6,
                pendingamt: 8000,
                img: IMG.USER

            }
        ]

    },
    {
        id: 3,
        title: "Account Loan",
        active: true,
        principlevalue: 50000,
        totalvalue: 55000,
        paidvalue: 25000,
        members: [
            {
                userId: 1,
                name: "member 1",
                amount: 30000,
                loanvalue: 33000,
                lastdate: "13/05/2024",
                nextdate: "13/06/2024",
                payamount: 25000,
                pendingins: 6,
                pendingamt: 8000,
                img: IMG.USER

            },
            {
                userId: 2,
                name: "member 2",
                amount: 20000,
                loanvalue: 22000,
                lastdate: "13/05/2024",
                nextdate: "13/06/2024",
                payamount: 25000,
                pendingins: 6,
                pendingamt: 8000,
                img: IMG.USER

            }
        ]

    },
    {
        id: 4,
        title: "Account Loan",
        active: false,
        principlevalue: 50000,
        totalvalue: 55000,
        paidvalue: 25000,
        members: [
            {
                userId: 1,
                name: "member 1",
                amount: 30000,
                loanvalue: 33000,
                lastdate: "13/05/2024",
                nextdate: "13/06/2024",
                payamount: 25000,
                pendingins: 6,
                pendingamt: 8000,
                img: IMG.USER

            },
            {
                userId: 2,
                name: "member 2",
                amount: 20000,
                loanvalue: 22000,
                lastdate: "13/05/2024",
                nextdate: "13/06/2024",
                payamount: 25000,
                pendingins: 6,
                pendingamt: 8000,
                img: IMG.USER

            }
        ]

    },
    {
        id: 5,
        title: "Account Loan",
        active: true,
        principlevalue: 50000,
        totalvalue: 55000,
        paidvalue: 25000,

        members: [
            {
                userId: 1,
                name: "member 1",
                amount: 30000,
                loanvalue: 33000,
                lastdate: "13/05/2024",
                nextdate: "13/06/2024",
                payamount: 25000,
                pendingins: 6,
                pendingamt: 8000,
                img: IMG.USER

            },
            {
                userId: 2,
                name: "member 2",
                amount: 20000,
                loanvalue: 22000,
                lastdate: "13/05/2024",
                nextdate: "13/06/2024",
                payamount: 25000,
                pendingins: 6,
                pendingamt: 8000,
                img: IMG.USER

            }
        ]

    }

]

export const installmenttype = [
    {
        id: 1,
        title: "Regular"
    },
    {
        id: 2,
        title: "Acocunt"
    },

]

export const assignmembers = [
    {
        id: 1,
        type: "Prime",
        title: "Member 1",
        img: IMG.USER
    },
    {
        id: 2,
        type: "Minister",
        title: "Member 2",
        img: IMG.USER
    },
    {
        id: 3,
        type: "Treasurer",
        title: "Member 3",
        img: IMG.USER
    },

]

export const paymentmethos = [
    {
        id: 1,
        title: "Cash"
    },
    {
        id: 2,
        title: "Google Pay"
    },


]

export const homelist = [
    {
        id: 1,
        title: "loans",
        nav: NAV.ADD_INSTALLMENT,
        image: IMG.LOAN_LIST
    },
    {
        id: 2,
        title: "Group detail",
        nav: NAV.GROUP_NAV,
        image: IMG.GROUP_LIST
    },
    {
        id: 3,
        title: "News",
        nav: NAV.ADD_INSTALLMENT,
        image: IMG.NEWS_LIST
    },
    {
        id: 2,
        title: "Group Account",
        nav: NAV.ADD_INSTALLMENT,
        image: IMG.ACCOUNT_LIST
    },

]

export const groupdetail = [
    {
        id: 1,
        img: IMG.USER,
        name: "member 1",
        type: "Prime",
        address: "User address",
        number: "1234567890"
    },
    {
        id: 2,
        img: IMG.USER,
        name: "member 2",
        type: "Minister",
        address: "User address",
        number: "1234567890"
    },
    {
        id: 3,
        img: IMG.USER,
        name: "member 3",
        type: "Treasurer",
        address: "User address",
        number: "1234567890"
    },
    {
        id: 4,
        img: IMG.USER,
        name: "member 4",
        type: "user",
        address: "User address",
        number: "1234567890",
        designation: "HouseWife",
        activeloan: 0

    },
    {
        id: 5,
        img: IMG.USER,
        name: "member 5",
        type: "User",
        address: "User address",
        number: "1234567890"
    },
    {
        id: 6,
        img: IMG.USER,
        name: "member 6",
        type: "User",
        address: "User address",
        number: "1234567890"
    },
    {
        id: 7,
        img: IMG.USER,
        name: "member 7",
        type: "User",
        address: "User address",
        number: "1234567890"
    },
    {
        id: 8,
        img: IMG.USER,
        name: "member 8",
        type: "User",
        address: "User address",
        number: "1234567890"
    },
    {
        id: 9,
        img: IMG.USER,
        name: "member 9",
        type: "User",
        address: "User address",
        number: "1234567890"
    },

    {
        id: 10,
        img: IMG.USER,
        name: "member 10",
        type: "User",
        address: "User address",
        number: "1234567890"
    },
    {
        id: 11,
        img: IMG.USER,
        name: "member 11",
        type: "User",
        address: "User address",
        number: "1234567890"
    },
]

export const userinfo = {
    name: "User Name",
    number: 1234567890,
    desc: "Add detail ",
    active_loan: 2,
    paid_installment: 5,
    totalloan: 5,
    pending_loan: 0,
    pending_request: 0,
    active_request: 0,
    group_name: "Group Name",
    penalty: 0,
    designation: "HouseWife",
}

export const pendingaprrove_ins = [
    {
        id: 1,
        name: "User 1",
        paymenttype: "Regular",
        status: "pending",
        price: 300

    },
    {
        id: 2,
        name: "User 1",
        paymenttype: "Regular",
        status: "pending",
        price: 300

    },
    {
        id: 3,
        name: "User 1",
        paymenttype: "Regular",
        status: "pending",
        price: 300

    },
    {
        id: 4,
        name: "User 1",
        paymenttype: "Regular",
        status: "pending",
        price: 300

    },
    {
        id: 5,
        name: "User 1",
        paymenttype: "Regular",
        status: "pending",
        price: 300

    },
    {
        id: 6,
        name: "User 1",
        paymenttype: "Regular",
        status: "pending",
        price: 300

    },
    {
        id: 1,
        name: "User 1",
        paymenttype: "Regular",
        status: "pending",
        price: 300

    },
    {
        id: 1,
        name: "User 1",
        paymenttype: "Regular",
        status: "pending",
        price: 300

    },

]

export const adminmenu = [
    {
        id: 1,
        title: "Group detail",
        img: IMG.A_GROUP,
        iname: "group",
        type: "font-awesome",
        nav: NAV.A_GROUPLIST

    },
    {
        id: 2,
        title: "Account detail",
        img: IMG.A_GROUP,
        iname: "group",
        type: "font-awesome",
        nav: NAV.A_LOAN
    },
    {
        id: 3,
        title: "News",
        img: IMG.A_GROUP,
        iname: "group",
        type: "font-awesome"

    },
    {
        id: 4,
        title: "Bankdetail",
        img: IMG.A_GROUP,
        iname: "group",
        type: "font-awesome"

    },
    {
        id: 5,
        title: "Loan",
        img: IMG.A_GROUP,
        iname: "group",
        type: "font-awesome",
        nav: NAV.A_LOAN

    },
    {
        id: 6,
        title: "Add User",
        img: IMG.A_GROUP,
        iname: "group",
        type: "font-awesome",
        nav: NAV.A_ADDUSER

    },
    {
        id: 7,
        title: "Add Loan",
        img: IMG.A_GROUP,
        iname: "group",
        type: "font-awesome"

    },
    {
        id: 8,
        title: "Add News",
        img: IMG.A_GROUP,
        iname: "group",
        type: "font-awesome"

    },
    {
        id: 9,
        title: "change position",
        img: IMG.A_GROUP,
        iname: "group",
        type: "font-awesome"

    },


]


export const group = [
    {
        id: 1,
        title: "Murlidhar"
    },
    {
        id: 1,
        title: "Prabhar"
    }
]
// export const installationhistory = [
//     {
//         id: 1,
//         title: "Regular INS",
//         price: 300,
//         date: "11/05/2024",
//         report_person: "Minal Patel",
//         desc: "HAnd over to ",
//         payment_type: "Cash",
//         status: "asccepted "
//     },
//     {
//         id: 2,
//         title: "Regular INS",
//         price: 300,
//         date: "11/05/2024",
//         report_person: "Minal Patel",
//         desc: "HAnd over to ",
//         payment_type: "Cash",
//         status: "asccepted "
//     },
//     {
//         id: 3,
//         title: "Account loan",
//         price: 300,
//         date: "11/04/2024",
//         report_person: "Minal Patel",
//         desc: "HAnd over to ",
//         payment_type: "Cash",
//         status: "asccepted "
//     },
//     {
//         id: 4,
//         title: "Account loan",
//         price: 300,
//         date: "11/03/2024",
//         report_person: "Minal Patel",
//         desc: "HAnd over to ",
//         payment_type: "Cash",
//         status: "asccepted "
//     },
//     {
//         id: 5,
//         title: "Account loan",
//         price: 300,
//         date: "11/03/2024",
//         report_person: "Minal Patel",
//         desc: "HAnd over to ",
//         payment_type: "Cash",
//         status: "asccepted "
//     },
//     {
//         id: 6,
//         title: "Account loan",
//         price: 300,
//         date: "11/03/2024",
//         report_person: "Minal Patel",
//         desc: "HAnd over to ",
//         payment_type: "Cash",
//         status: "asccepted "
//     },
//     {
//         id: 7,
//         title: "Account loan",
//         price: 300,
//         date: "11/02/2024",
//         report_person: "Minal Patel",
//         desc: "HAnd over to ",
//         payment_type: "Cash",
//         status: "asccepted "
//     },
//     {
//         id: 8,
//         title: "Account loan",
//         price: 300,
//         date: "11/02/2024",
//         report_person: "Minal Patel",
//         desc: "HAnd over to ",
//         payment_type: "Cash",
//         status: "asccepted "
//     }
// ]