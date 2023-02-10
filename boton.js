var i=0;
function cambio_foto()
{
    /*if(i==0)
    {
       document.getElementById("foto").src="https://i.pinimg.com/originals/4a/2c/da/4a2cdaff7d9b6bc6bcf82a6d1a5b9f44.gif";
        i=1;
    }
    else
    {
        document.getElementById("foto").src="https://www.compucalitv.com/wp-content/themes/Academy/images/banner-compucalitv.jpg";
        i=0;
    }*/
    switch(i) {
        case 0:
            document.getElementById("foto").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0l6q5ftLL456_U5hGHPjI_K9npWf2nZ20OOIaJZbxeKFD_zGVQ6qgOchGrp5kkX4c0Xc&usqp=CAU";
            i=i+1;
            break;
        case 1:
            document.getElementById("foto").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dCyRL-ltBdEe8hknDSBxCN8YlHMAant2JCuCFzWzQbCeX4JwY8SAM_VVn8TZy_k2JTI&usqp=CAU";
            i=i+1;
            break;
        case 2:
            document.getElementById("foto").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8MyFM2NAGxoxxcw8C1OlqosUHOhK3Sa0cg&usqp=CAU";
            i=0;
            break;
      }
} 
btn.addEventListener('click',cambio_foto,true)
let hoy=new Date();
let dia =hoy.getDate();
let mes=hoy.getMonth()+1;
let año=hoy.getFullYear();
let fecha='$(dia)-$(mes)-$(año)';
