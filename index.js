let dataBarang = [
    'Buku',
    'Pensil',
    'Tas'
]
let barang = document.querySelector("input[name='barang']")

function add(){
    dataBarang.push(barang.value)
    showData()
    barang.value = null
}

function showData(){
    document.getElementById('show-data').innerHTML = dataBarang
}
showData()