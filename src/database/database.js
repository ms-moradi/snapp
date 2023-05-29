import greenHome from "../assets/svg/greenHome.svg";
import club from "../assets/svg/club.svg";
import greenVoucher from "../assets/svg/greenVoucher.svg";
import box from "../assets/image/icon/Box.png";
import cab from "../assets/image/icon/cab.png";
import corporate from "../assets/image/icon/Corporate.png";
import doctor from "../assets/image/icon/Doctor.png";
import driver from "../assets/image/icon/Driver.png";
import food from "../assets/image/icon/Food.png";
import hotel from "../assets/image/icon/Hotel.png";
import insurance from "../assets/image/icon/Insurance.png";
import line from "../assets/image/icon/Line.png";
import market from "../assets/image/icon/Market.png";
import moving from "../assets/image/icon/Moving.png";
import oldCredit from "../assets/image/icon/OldCredit.png";
import pharmacy from "../assets/image/icon/Pharmacy.png";
import shop from "../assets/image/icon/Shop.png";
import trip from "../assets/image/icon/Trip.png";
import App from "../assets/image/logo/App.png";
import cardGift from "../assets/image/logo/cardGift.png";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export const MenuHome = [
    {id: 1, title: 'خانه', src:greenHome, link:'/' },
    {id: 2, title: '۰امتیاز', src: club, link:'/club'},
    {id: 3, title: 'تخفیف ها ', src: greenVoucher, link:'/discount'},
]

export const Service = [
    {id: 1, title: 'بلیت سفر',          icon: trip ,badge:''},
    {id: 2, title: 'داروخانه',          icon: pharmacy ,badge:''},
    {id: 3, title: 'فروشگاه',           icon: shop ,badge:''},
    {id: 4, title: 'وانت و کامیون',     icon: moving ,badge:''},
    {id: 5, title: 'هتل',                icon: hotel ,badge:''},
    {id: 6, title: 'پزشک و مشاور',      icon: doctor ,badge:''},
    {id: 7, title: 'اسنپ لاین',           icon: line ,badge:''},
    {id: 8, title: 'ثبت نام رانندگان',  icon: driver ,badge:''},
    {id: 9, title: 'سرویس اعتباری',     icon: oldCredit ,badge:''}, 
    {id: 10, title: 'بیمه',              icon: insurance ,badge:''},
    {id: 11, title: 'پنل سازمانی',       icon: corporate ,badge:''},
]

export const ServiceMenuHome = [
    {id: 1, title: 'اسنپ',        icon: cab, link:'/snapp'},
    {id: 2, title: 'غذا',         icon: food},
    {id: 3, title: 'سوپر مارکت',  icon: market},
    {id: 4, title: 'اسنپ باکس',    icon: box},
]

export const payment=[
    {id: 1, title:'کیف پول', src: App, element:<RadioButtonCheckedIcon style={{fontSize:16, color:'blue'}}/>, status:true},
    {id: 2, title:'اسنپ کارت', src: cardGift, element:<ArrowBackIosIcon style={{fontSize:14, color:'#757575'}}/>, link:'/payment/snappCard'},
]