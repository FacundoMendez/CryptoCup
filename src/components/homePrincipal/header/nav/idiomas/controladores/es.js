const esLanguage = () => {
    fetch('https://api-lang.herokuapp.com/api/V1/lang ')
    .then(response => response.json())
    .then(data=>{
        const dataEng=data[0].ENG
        const textosEng=[]
        for (let contenedor in dataEng){
            for (let item in dataEng[contenedor]) {
                crearVariable(dataEng[contenedor][item])
            }

        }
    })
    let datos=[]
    function crearVariable(dato) {
        datos.push(dato)
    }
    console.log(datos)


}


export default esLanguage
