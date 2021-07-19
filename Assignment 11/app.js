var a = document.getElementById('NuM')

function Calc(num){
    a.value += num
}

function result(){
    var val = a.value
    var final = eval(val)
    a.value = final
}

function clear(){
    var b = document.getElementById('NuM')
    b.value = ''
}