import moment from "moment"

const daysInMonth = (year, month) => {
    return new Date(year,month,0).getDate()
}

export const listOfDaysInMonth = (year, month) => {
    let days = []
    for( let x = 1; x <= daysInMonth(year,month); x++){
        days.push(x)
    }
    return days
}

export const totalEachDayOfMonth = (year,month,records, type) => {
    let days = listOfDaysInMonth(year,month)

    let income = days.map( day => {

        let currentDayRecords = records.filter( record => {
            // console.log(moment(record.date).format('M'),day)
            // console.log(day, moment(record.date).format('M'), moment(new Date).format('M') )
            console.log(day, moment(record.date).format('D'))
           return  moment(record.date).format('M') == moment(new Date).format('M') && record.type == type && moment(record.date).format('D') == day
        })
        return currentDayRecords.reduce((x,y) =>x+y.amount,0)
    })

    return income
}

export const todaySummary = (records, type) => {
    return records.filter( record => moment(record.date).format('DD-MM-YYYY') === moment(new Date()).format('DD-MM-YYYY') && record.type === type).reduce( (x,y) => x + y.amount , 0)
}