menu_list_array = ["Chicken Tandooori Pizza","Veg Margherita Pizza","Deluxe Veggie Pizza","Paneer Tikka Pizza","Veg Extramaganza Pizza","Veg Supreme Pizza"];
function getmenu(){
var htmldata = " ";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){
    var htmldata = " ";
    var imgTags = '<img id = "im1" src = "Pizzza.png">';
    menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgTags + menu_list_array[i] + '<br>'
        }
        document.getElementById("display_addedmenu").innerHTML = htmldata;
    }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
