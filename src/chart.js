const myCanvas = document.getElementById("myChart").getContext("2d");

const michart = new Chart (myCanvas,{
    type: "bar",
    data:{
        labels:["vino","Tequila","Cerveza","Ron"],
        datasets:[
            {
                label: "Mi grafica de bebidas",
                data: [12,39,5,30],
                backgroundColor: "rgb(0,0,0)",
            }
        ]
    }

})