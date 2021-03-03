//可选链
const user = {
    address : {
        street:'xx街道',
        getNum(){
            return '80号'
        }
    }
}
const street = user?.address?.street
console.log(street)//xx街道
const num = user?.address?.getNum?.()
console.log(num)//80号