menu_list_array=["Chicken Tandoori",
"Veggie Pizza",
"Paneer Tikka",
"Gobi",
"Spiced Up"];
function getmenu()
{
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0; i<menu_list_array.length;i++)
    {
        htmldata=htmldata+ '<li>' +     menu_list_array[1] + '</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_name").innerHTML= htmldata;
}
function additem()
{
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;menu_list_array; i++)
    {
        htmldata=htmldata+"<div class=card>" + "<img src='images/pizzaImg.png'/>" + menu_list_array[1] + "</div>"
    }
    htmldata=htmldata + "</section>"
    document.getElementById  ("display_addmenu").innerHTML= htmldata;
}