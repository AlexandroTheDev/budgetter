export default function numberPriceFormat(num, minDecimalDigits = 2, maxDecimalDigits = 2) {
    return num.toLocaleString(undefined,{
        minimumFractionDigits: minDecimalDigits,
        maximumFractionDigits: maxDecimalDigits
    })
}