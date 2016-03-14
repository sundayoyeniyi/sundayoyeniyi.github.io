import { DateUtility } from './util/DateUtility';
const dateObjs: DateUtility.DateUtilities = new DateUtility.DateUtilities();
window.onload = () => {
    let dateElement: any = document.querySelector('footer div:first-child');
    dateElement.innerText = dateObjs.formatCurrentDate(dateObjs.getCurrentDate());
};
