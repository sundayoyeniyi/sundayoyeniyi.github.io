export module DateUtility {
    interface IDateObject {
        getCurrentDate(): Date;
        formatCurrentDate(now: Date): string;
    }
    export class DateUtilities implements IDateObject {
        public getCurrentDate(): Date {
            return new Date();
        }
        public formatCurrentDate(now: Date): string {
            return `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;
        }
    }
 }
