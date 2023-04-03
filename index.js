//! Selector Search 
var _text = document.querySelector('.todo-text-input');
var _btn = document.querySelector('.btn');
var _list = document.querySelector('.list');
var _delbtn = document.querySelector('.del-btn');
//! Selector Search

// Todo Add List
_btn.addEventListener('click',()=>{
    var text = `<div class="li">
    <li class="li-li">${_text.value}</li>
    <button class="del-btn"><i class="fa-solid fa-trash"></i></button>
</div>`;
    text = document.createRange().createContextualFragment(text)
    
    if(_text.value == ''){
        console.log('veri yok')
    }
    else{
        if(_list.children.length >= 10){
            console.log('Limit Doldu')
        }else{
            _list.appendChild(text)
        }
    }
    
})
// Todo Add List End

// List Delete Bottom 
_list.addEventListener('click', (e)=>{ 
    if(e.target.className == 'del-btn'){
       e.target.parentElement.remove();
    }
    if(e.target.className == 'fa-solid fa-trash'){
        e.target.parentElement.parentElement.remove();
    }
})

// List Delete Bottom End