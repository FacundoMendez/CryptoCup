const enLanguage = () => {
    fetch('https://api-lang.herokuapp.com/api/V1/lang')
    .then(response => response.json())
    .then(data=>{
        const dataEng=data[0].ENG
        const textosEng=[]
        for (let contenedor in dataEng){
          /*   for (let item in dataEng[contenedor]) {
                textosEng.push(dataEng[contenedor][item])
            } */
            textosEng.push(dataEng[contenedor])

        }
        console.log(textosEng)

        
    })
}

export default enLanguage;