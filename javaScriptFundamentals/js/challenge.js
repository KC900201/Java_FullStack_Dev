const pay = 30;
const bonus = 10;
const base_hr = 40;
var overtime_hr = 6;
var total_work_hr = base_hr + overtime_hr;
var total_pay = (pay * base_hr) + (overtime_hr * bonus);;

if (total_work_hr > base_hr) {
    console.log("The employee worked overtime and made " + total_pay + " dollars this week" );
} else {
    console.log("The employee made " + total_pay + " dollars this week" );
}