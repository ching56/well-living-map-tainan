var map=L.map("well-living-map").setView([23.1,120.3],11),mapLayer=L.tileLayer("http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map),sensitiveArea,liquefactionArea,waterArea,sStyle={color:"#ff0000",fillOpacity:.6,weight:1},lStyle={color:"#00ff00",weight:1},wStyle={color:"#0000ff",fillOpacity:.6,weight:1};$.getJSON("src/sensitive.json",function(e){sensitiveArea=e,L.geoJSON(sensitiveArea,{style:sStyle}).addTo(map)}),$.getJSON("src/liquefaction.json",function(e){liquefactionArea=e,L.geoJSON(liquefactionArea,{style:function(e){switch(e.properties["分級"]){case"低潛勢":lStyle.fillOpacity=.2;break;case"中潛勢":lStyle.fillOpacity=.4;break;case"高潛勢":lStyle.fillOpacity=.6;break;default:console.log("undefined error")}return lStyle}}).addTo(map)}),$.getJSON("src/water.json",function(e){waterArea=e,L.geoJSON(waterArea,{style:wStyle}).addTo(map)});