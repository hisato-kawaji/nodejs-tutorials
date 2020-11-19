// function宣言では関数の上書きができる

function regular() {
    console.log(1)
}
function regular() {
    console.log(2)
}
regular()

// アロー関数の場合はlet, constなどで定義することになり、let, constによってエラーとなる
