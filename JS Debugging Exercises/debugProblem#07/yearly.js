/*
   New Perspectives on JavaScript, 2nd Edition
   debugProblem#07

   
*/

function yearly(calDate) 
{
   if (calDate == null) calendarDay=new Date();
   else calendarDay = new Date(calDate);

   var currentTime = calendarDay.getTime();
   var thisYear = calendarDay.getFullYear();
   document.write("<table id='yearly_table'>");
   document.write("<tr><th id='yearly_title' colspan='4'>"+thisYear+"</th></tr>");
   
   var monthNum = -1;
   for (var i=1; i<=3; i++) {
      document.write("<tr>");
      for (var j=1; j<=4; j++) {
         monthNum++;
         calendarDay.setDate(1);
         calendarDay.setMonth(monthNum);
         writeMonthCell(calendarDay, currentTime);
      }
      document.write("</tr>");
   }
   document.write("</table>");   
}

function writeMonthCell(calendarDay, currentTime) 
{
   document.write("<td class='yearly_months'>");
   writeMonth(calendarDay, currentTime);
   document.write("</td>");
}

function writeMonth(calendarDay, currentTime) {
   document.write("<table class='monthly_table'>");
   writeMonthTitle(calendarDay);
   writeDayNames()
   writeMonthDays(calendarDay, currentTime);
   document.write("</table>");
}

function writeMonthTitle(calendarDay) 
{
   var monthName = new Array("January", "February", "March", "April", "May", 
   "June", "July", "August", "September", "October", "November", "December");

   var thisMonth=calendarDay.getMonth();

   document.write("<tr>");
   document.write("<th class='monthly_title' colspan='7'>");
   document.write(monthName[thisMonth]);
   document.write("</th>");
   document.write("</tr>");
}

function writeDayNames() {
   var dayName = new Array("S", "M", "T", "W", "R", "F", "S");  
   document.write("<tr>");
   for (var i=0;i<dayName.length;i++) {
      document.write("<th class='monthly_weekdays'>"+dayName[i]+"</th>");
   }
   document.write("</tr>");
}

function daysInMonth(calendarDay) 
{
   var thisYear = calendarDay.getFullYear();
   var thisMonth = calendarDay.getMonth();
   var dayCount = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
   if ((thisYear % 4 == 0)&&((thisYear % 100 !=0) || (thisYear % 400 == 0))) {
         dayCount[1] = 29;
   }
   return dayCount[thisMonth];
}

function writeMonthDays(calendarDay, currentTime) 
{
   var weekDay = calendarDay.getDay();

   document.write("<tr>");
   for (var i=0; i < weekDay; i++) {
      document.write("<td></td>");
   }

   var totalDays = daysInMonth(calendarDay);
   for (var dayCount=1; dayCount<=totalDays; dayCount++) {

      calendarDay.setDate(dayCount);
      weekDay = calendarDay.getDay();
      writeDay(weekDay, dayCount, calendarDay, currentTime);
   }
   
   document.write("</tr>");
}

function writeDay(weekDay, dayCount, calendarDay, currentTime) 
{
   if (weekDay == 0) document.write("<tr>");
   if (calendarDay.getTime() == currentTime) {
      document.write("<td class='monthly_dates' id='today'>"+dayCount+"</td>");
   } else {
      document.write("<td class='monthly_dates'>"+dayCount+"</td>");
   }
   if (weekDay == 6) document.write("</tr>");
}





