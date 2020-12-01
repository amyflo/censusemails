function showResult(){
  var title = $('title').getValue();
  var description = $('description').getValue();
  var ctatext = $('cta-text').getValue();
  var url = $('url').getValue();
  var catDiv = document.createElement("div");
  catDiv.innerHTML = "Test";
  document.body.appendChild(catDiv);
  // var div = document.createElement("div");
  // div.style.width = "100%";
  // div.style.height = "100px";
  // div.style.background = "#EEEEEE"
  // div.style.color = "black";  
  // var reset = document.getElementById("reset");
  // reset.style.display = '';
  // var submit = document.getElementById("submit");
  // submit.style.display = 'none';
  // div.innerHTML = "Hello";

  // div.innerHTML = 
  // "<table width='100%' border='0' cellspacing='0' cellpadding='5' bgcolor='#EEEEEE'>" + 
  // "<tbody>" + "<tr><td>&nbsp;</td></tr>" + 
  // "<tr><td><p style='color: black; font-family: sans-serif; font-size: 24px; margin: 0; font-weight: bold; line-height: 28px;'>" + 
  // title + "</p></td></tr>" + "<tr><td><p style='color: black; font-family: sans-serif; font-size: 16px; margin: 0;'>" + 
  // description + "</p></td></tr>" + "<tr><td align='center'><table border='0' cellspacing='0' cellpadding='0'>" + 
  // "<tbody><tr><td align='center' style='border-radius: 5px;' bgcolor='#e9703e' class='bg-orange'>" + 
  // "<a href='" + url + "' style='font-size: 16px; color: #ffffff; text-decoration: none; text-decoration: none;border-radius: 5px; padding: 12px 18px; border: 2px solid #e9703e; display: inline-block;'>" + 
  // "<font face='sans-serif'>" + ctatext + "</font></a></td></tr></tbody></table></td></tr><tr><td>&nbsp;</td></tr>"
  // + "</tbody></table";
  document.getElementById("main").appendChild(div);
}
