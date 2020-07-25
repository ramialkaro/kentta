export default function DurationCalculator(start, end){

    var startTime = new Date(start)
    var endTime = new Date(end)

    var difference = (startTime - endTime)
    difference = difference / 1000

    difference = difference / 60
    var minutes = Math.floor(difference % 60)

    difference = difference / 60
    var hours = Math.floor(difference % 24)
    var days = Math.floor(difference / 24)

    const differenceMachine = days + ' days, ' + hours + ' hours, ' + minutes + ' minutes'

    return differenceMachine

}