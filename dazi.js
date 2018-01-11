window.onload = function(){
    let code = new Code();
    let kai = $('.kai')[0];
    let over = $('.over')[0];
    kai.onclick = function(){
        code.start();
    }
    over.onclick = function(){
        code.over();
    }
}