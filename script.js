let input_button = document.querySelector('#input-btn');
let clear_button = document.querySelector('#clear-btn');
let grid_container = document.querySelector('#grid-container');

let grids = 16;
let pixel = 0;
pixel = 500/grids;
create_grid();
select_color();

//function for removing all the grids when clicked.
function grid_remove(){
    while (grid_container.hasChildNodes()) {
        grid_container.removeChild(grid_container.firstChild);
      }
}
input_button.addEventListener("click",grid_remove);


//function for getting input from user.
function get_input(){
    grids = prompt("enter the number of grids you want between 1 and 64");
    pixel = 500/grids;
}
//adding onclick to work get_input().
input_button.addEventListener("click",get_input);


//function for creating div grids
function create_grid(){
    for(let i=1;i<=grids*grids;i++){
        var div = document.createElement('div');
        div.style.width = pixel + 'px';
        div.style.height = pixel + 'px';
        div.style.boxSizing = 'border-box';
        div.classList.add('grid-divs');
        grid_container.appendChild(div);
    }
}
//adding create_grid function to onclick
input_button.addEventListener("click",create_grid);


//to give onclick effect on each grid div
function select_color(){
let div_select = document.querySelectorAll('.grid-divs');
div_select.forEach((div)=>{
    div.addEventListener("click",()=>{
        div.classList.add('active');
    })
})
}
input_button.addEventListener("click",select_color);


function clear_all(){
    let div_select = document.querySelectorAll('.grid-divs');
div_select.forEach((div)=>{
        div.classList.remove('active');
})
console.log("hi");
}

clear_button.addEventListener("click",clear_all);