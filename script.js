const equals=document.getElementById('equals');
let countEl= document.getElementById('count')
let count=0;

equals.addEventListener('click', addThem);

function addThem(){
    const box1= document.getElementById('box-1').value;
    const box2= document.getElementById('box-2').value;
    let total= parseInt(box1) + parseInt(box2);
    count=total+count;
    countEl.innerText=`RUNNING TOTAL: ${count}`;
    box1.value='0';
    box2.value='0';
    return total;
}


