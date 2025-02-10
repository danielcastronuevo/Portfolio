window.scroll(0,0)


// - - - - - - - - HEADER / NAV - - - - - - - - //

// - - - - - - - - EFECTO HEADER SCROLL - - - - - - - - //

const header = document.querySelector(".header");
const menuMobile = document.querySelector(".menu-responsive");

let mainPosition = window.pageYOffset;

window.onscroll = function(){
    let currentOffSe = window.pageYOffset;
    if(mainPosition >= currentOffSe){
        header.style.transition = "250ms";
        header.style.top = "0";
        menuMobile.style.transition = "250ms";
        menuMobile.style.transform = "translate(0,-290px)";
    }
    else{
        header.style.top = "-60px";
        header.style.transition = "0s";
        menuMobile.style.transition = "0ms";
        menuMobile.style.transform = "translate(0,-350px)";
    }
    mainPosition = currentOffSe;
};


// - - - - - - - - BOTON DE CERTIFICADO - - - - - - - - //

// Seleccionamos el botón y la sección de certificados
const scrollToCertBtn = document.getElementById('scrollToCertBtn');
const certificadosSection = document.getElementById('certificados');
const iconoFlecha = scrollToCertBtn.querySelector('.icon-right');  // Icono de la flecha

// Función para hacer scroll hasta la sección de los certificados
scrollToCertBtn.addEventListener('click', () => {
    certificadosSection.scrollIntoView({ behavior: 'smooth' });
});

// Detectamos cuando el usuario hace scroll para ocultar/mostrar el botón y cambiar la flecha
window.addEventListener('scroll', () => {
    const rect = certificadosSection.getBoundingClientRect();
    
    // Ajustamos el umbral para cambiar la flecha: margen de 100px desde la parte superior
    const threshold = 100;

    if (rect.top <= window.innerHeight - threshold && rect.bottom >= threshold) {
        // Si la sección de certificados está visible en pantalla, ocultamos el botón
        scrollToCertBtn.classList.add('hidden');
    } else {
        // Si estamos por encima o por debajo de la sección de certificados, mostramos el botón
        scrollToCertBtn.classList.remove('hidden');

        // Cambiar la dirección de la flecha
        if (rect.top > window.innerHeight) {
            // Si estamos por encima de los certificados, la flecha apunta hacia abajo
            iconoFlecha.classList.remove('fa-arrow-up');
            iconoFlecha.classList.add('fa-arrow-down');
        } else {
            // Si estamos por debajo de los certificados, la flecha apunta hacia arriba
            iconoFlecha.classList.remove('fa-arrow-down');
            iconoFlecha.classList.add('fa-arrow-up');
        }
    }
});

// Al hacer clic en el botón, quitamos la animación agregando la clase 'no-bounce'
scrollToCertBtn.addEventListener('click', () => {
    scrollToCertBtn.classList.add('no-bounce');
});







// menu responsive
const barsResponsive = document.querySelector(".bars-responsive")
const menuResponsive = document.querySelector(".menu-responsive")
const blurForMenu = document.querySelector(".blur-for-menu")
const linksMenu = document.querySelectorAll(".links-menu")

let menuResponsiveIsOpen = false

barsResponsive.addEventListener("click",()=>{
    menuResponsive.style.transition = 'transform 250ms'
    if(menuResponsiveIsOpen == false){
        openMenuResponsive()
        menuResponsiveIsOpen = true
    }
    else{
        menuResponsiveIsOpen = false
        closeMenuResponsive()
    }
})

blurForMenu.addEventListener("click",()=>{
    menuResponsiveIsOpen = false
    closeMenuResponsive()
})

linksMenu.forEach(link => {
    link.addEventListener("click",()=>{
        menuResponsiveIsOpen = false
        closeMenuResponsive()
    })
});

window.addEventListener("scroll",()=>{
    menuResponsiveIsOpen = false
    closeMenuResponsive()
})


const openMenuResponsive = () => {
    menuResponsive.style.transform = 'translate(0)'
    barsResponsive.style.color = 'rgb(142, 249, 252)'
    barsResponsive.style.textShadow = '0 0 10px rgb(142, 249, 252)'
    barsResponsive.style.rotate = '90deg'
    blurForMenu.style.display = 'flex'
}

const closeMenuResponsive = () => {
    menuResponsive.style.transform = 'translate(0,-350px)'
    barsResponsive.style.color = 'rgb(92,225,230)'
    barsResponsive.style.textShadow = 'none'
    barsResponsive.style.rotate = '0deg'
    blurForMenu.style.display = 'none'
}







const textUpperOnce = document.querySelector(".write-upper-once");
const stick = document.querySelector(".stick");
const textForEdit = document.querySelector(".text-for-edit");
const textContainer = document.querySelector(".text-contaiener")

const textForWriteOnce  = {
    textUpper : 'Hola! soy Daniel',
    textLower : 'Especialista de Ciberseguridad'
}

let iTextForWriteOnceUPPER = 0
let iTextForWriteOnceLOWER = 0
let waitTime = true
let writeUpper = true

writeUpperLetters = () => {
    stick.style.cssText = `animation-name:none;`
    let writingUpperLetters = setInterval(() => {
        if(writeUpper == true){
            if(textForWriteOnce.textUpper[iTextForWriteOnceUPPER]){
                if(textForWriteOnce.textUpper[iTextForWriteOnceUPPER] == ' ' && waitTime == true){
                    appearFigures()
                    stick.style.cssText = `animation-name: turnOnOffStick;`
                    waitTime = false
                    clearInterval(writingUpperLetters)
                    setTimeout(() => {
                        writeUpperLetters()
                    }, 900);
                }
                textUpperOnce.innerHTML = textUpperOnce.innerHTML + textForWriteOnce.textUpper[iTextForWriteOnceUPPER]
                iTextForWriteOnceUPPER ++
            }
            else{
                writeUpper = false
                stick.style.cssText = `animation-name: turnOnOffStick;`
                clearInterval(writingUpperLetters)
                setTimeout(() => {
                    writeUpperLetters()
                    writePresentationLetter()
                }, 900);
                
            }
        }

        // else{
        //     textUpperOnce.style.width = '466px'
        //     if(textForWriteOnce.textLower[iTextForWriteOnceLOWER]){
        //         if(textForWriteOnce.textLower[iTextForWriteOnceLOWER] == 'f'){
        //             textContainer.style.width = `448px`
        //         }
        //         textForEdit.innerHTML = textForEdit.innerHTML + textForWriteOnce.textLower[iTextForWriteOnceLOWER]
        //         iTextForWriteOnceLOWER ++
        //     }
        //     else{
        //         stick.style.cssText = `animation-name: turnOnOffStick;`
        //         clearInterval(writingUpperLetters)
        //         setTimeout(() => {
        //             deleteLetters()
        //         }, 2000);
                
        //     }
        // }
    }, 60)
    
}


writePresentationLetter = () => {
    textUpperOnce.style.width = '466px'
    const text = "Especialista en Ciberseguridad";
    const stopText = "Especialista ";
    const newText = "Desarrollador";
    const additionalText = " full-stack";
    const finalText = " en Ciberseguridad";
    const textForEdit = document.querySelector(".text-for-edit");
    const randomChars = "!@#$%1&?/0";
    let index = 0;
    let initialDelete = true;

    function typeWriter() {
        if (index < text.length) {
            textForEdit.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 60); // Ajusta el tiempo aquí para cambiar la velocidad de escritura
        } else {
            stick.style.cssText = `animation-name: turnOnOffStick;`
            setTimeout(deleteText, 2000); // Espera 2 segundos antes de empezar a borrar el texto
        }
    }

    function deleteText() {
        stick.style.cssText = `animation-name: none;`
        if (index > stopText.length) {
            textForEdit.innerHTML = text.substring(0, index - 1);
            index--;
            if (initialDelete) {
                initialDelete = false;
                setTimeout(deleteText, 500); // Espera 0.5 segundos antes de borrar el resto
            } else {
                setTimeout(deleteText, 30); // Ajusta el tiempo aquí para cambiar la velocidad de borrado
            }
        } else {
            stick.style.cssText = `animation-name: turnOnOffStick;`
            initialDelete = true; // Resetea para el próximo ciclo
            setTimeout(transformText, 500); // Espera 0.5 segundos antes de empezar la transformación
        }
    }

    function getRandomChar() {
        return randomChars[Math.floor(Math.random() * randomChars.length)];
    }

    function transformText() {
        let scrambleCount = 0;
        const interval = setInterval(() => {
            let scrambled = '';
            for (let i = 0; i < stopText.length; i++) {
                if (scrambleCount < 5 || Math.random() > 0.5) {
                    scrambled += getRandomChar();
                } else {
                    scrambled += newText[i];
                }
            }
            textForEdit.innerHTML = scrambled;
            scrambleCount++;
            if (scrambleCount >= 10) {
                clearInterval(interval);
                textForEdit.innerHTML = newText;
                setTimeout(() => {
                    typeAdditionalText();
                }, 1000); // Espera 1 segundo antes de empezar a escribir "full-stack"
            }
        }, 100);
    }

    function typeAdditionalText() {
        stick.style.cssText = `animation-name: none;`
        let additionalIndex = 0;
        function typeFullStack() {
            if (additionalIndex < additionalText.length) {
                textForEdit.innerHTML += additionalText.charAt(additionalIndex);
                additionalIndex++;
                setTimeout(typeFullStack, 60); // Ajusta el tiempo aquí para cambiar la velocidad de escritura
            } else {
                stick.style.cssText = `animation-name: turnOnOffStick;`
                setTimeout(deleteFullStack, 2000); // Espera 1 segundo antes de empezar a borrar "full-stack"
            }
        }
        typeFullStack();
    }

    function deleteFullStack() {
        stick.style.cssText = `animation-name: none;`
        let fullStackIndex = additionalText.length;
        textForEdit.innerHTML = newText + additionalText.substring(0, fullStackIndex - 1);
        fullStackIndex--;
        setTimeout(() => {
            const interval = setInterval(() => {
                textForEdit.innerHTML = newText + additionalText.substring(0, fullStackIndex - 1);
                fullStackIndex--;
                if (fullStackIndex <= 0) {
                    clearInterval(interval);
                    stick.style.cssText = `animation-name: turnOnOffStick;`
                    setTimeout(() => {
                        transformToSpecialista();
                    }, 500); // Espera 0.5 segundos antes de empezar la transición a "Especialista"
                }
            }, 30); // Ajusta el tiempo aquí para cambiar la velocidad de borrado 
        }, 500);

    }

    function transformToSpecialista() {
        let scrambleCount = 0;
        const interval = setInterval(() => {
            let scrambled = '';
            for (let i = 0; i < stopText.length; i++) {
                if (scrambleCount < 5 || Math.random() > 0.5) {
                    scrambled += getRandomChar();
                } else {
                    scrambled += stopText[i];
                }
            }
            textForEdit.innerHTML = scrambled;
            scrambleCount++;
            if (scrambleCount >= 10) {
                clearInterval(interval);
                textForEdit.innerHTML = stopText;
                setTimeout(() => {
                    typeFinalText();
                }, 1000); // Espera 1 segundo antes de empezar a escribir "full-stack"
            }
        }, 100);
    }




    function typeFinalText() {
        stick.style.cssText = `animation-name: none;`
        let finalIndex = 0;
        function typeSecurityText() {
            if (finalIndex < finalText.length) {
                textForEdit.innerHTML = stopText + finalText.substring(0, finalIndex + 1);
                finalIndex++;
                setTimeout(typeSecurityText, 60); // Ajusta el tiempo aquí para cambiar la velocidad de escritura
            } else {
                stick.style.cssText = `animation-name: turnOnOffStick;`
                setTimeout(deleteFinalText, 2000); // Espera 1 segundo antes de empezar a borrar "en Ciberseguridad"
            }
        }
        typeSecurityText();
    }

    function deleteFinalText() {
        stick.style.cssText = `animation-name: none;`
        let finalTextIndex = finalText.length;
        textForEdit.innerHTML = stopText + finalText.substring(0, finalTextIndex - 1);
        finalTextIndex--;
        setTimeout(() => {
            const interval = setInterval(() => {
                textForEdit.innerHTML = stopText + finalText.substring(0, finalTextIndex - 1);
                finalTextIndex--;
                if (finalTextIndex <= 0) {
                    clearInterval(interval);
                    stick.style.cssText = `animation-name: turnOnOffStick;`
                    setTimeout(() => {
                        transformText();
                    }, 500); // Espera 0.5 segundos antes de empezar de nuevo
                }
            }, 30); // Ajusta el tiempo aquí para cambiar la velocidad de borrado
        }, 500)
    }

    // Inicia el proceso
    typeWriter();
}











































// let str
// let deleteLettersInterval

// deleteLetters = () => {
//     str = textForEdit.innerHTML 
//     stick.style.cssText = `animation-name:none;`
//     str = str.slice(0, str.length - 1);
//     textForEdit.innerHTML = str
//     setTimeout(() => {
//         deleteLettersInterval = setInterval(() => {
//             str = str.slice(0, str.length - 1);
//             textForEdit.innerHTML = str
//             stopDeleteLetters()
//         }, 50);
//     }, 250);
//     if(str.length == 0){
//         clearInterval(deleteLettersInterval)
//         stopDeleteLetters()
//     }
// }

// stopDeleteLetters = () =>{
//     str = textForEdit.innerHTML 
//     if(str.split('')[str.length - 1] == ' '){
//         stick.style.cssText = `animation-name: turnOnOffStick;`
//         clearInterval(deleteLettersInterval)
//         str = str.slice(0, str.length - 1)
//         textForEdit.innerHTML = str
//         textForEdit.innerHTML = textForEdit.innerHTML + " "
    
//         setTimeout(() => {
//             startWriteLetters()
//             stick.style.cssText = `animation-name:none;`
//         }, 500);
        
//     }
    
//     else if(str.length == 0){
//         stick.style.cssText = `animation-name: turnOnOffStick;`
//             clearInterval(deleteLettersInterval)
//             str = str.slice(0, str.length - 1)
//             textForEdit.innerHTML = str
//             textForEdit.innerHTML = textForEdit.innerHTML + " "
//     }
//     else{
//     }
// }

// const textForChange = [{
//     text:"Desarrollador front-end",
//     letterAmount: 9
// },{
//     text:"back-end",
//     letterAmount: 8
// },{
//     text:"full-stack",
//     letterAmount:8 
// },{
//     text:"Especialista en Ciberseguridad",
//     letterAmount: 11
// }]
    
// let iTextForChange = 0
// let iText

// startWriteLetters = () =>{
//     let iText = 0
//     str = str + ' '
//     let writingLetters = setInterval(() => {
//         if(typeof(textForChange[iTextForChange].text[iText]) == 'string'){
//             textForEdit.innerHTML = textForEdit.innerHTML + textForChange[iTextForChange].text[iText]
//             str = str + textForChange[iTextForChange].text[iText]
//             iText++
            
//         }
//         else{
//             stick.style.cssText = `animation-name: turnOnOffStick;`
//             clearInterval(writingLetters)
//             setTimeout(() => {
//                 deleteLetters()
//             }, 2000);
//             if(iTextForChange == 0){
//                 iTextForChange++
//             }
//             else if(iTextForChange == 1){
//                 iTextForChange++
//             }
//             else if(iTextForChange == 2){
//                 iTextForChange++
//             }
//             else{
//                 iTextForChange = 0
//             }
//         }
//     }, 100)
// }



const figure3 = document.querySelector(".figure3");
const figure4 = document.querySelector(".figure4");
const figure5 = document.querySelector(".figure5");
const figure6 = document.querySelector(".figure6");
const figure7 = document.querySelector(".figure7");

const tagsContainer = document.querySelector(".tags-container");

const tag1 = document.querySelector(".tag1");
const tag2 = document.querySelector(".tag2");
const tag3 = document.querySelector(".tag3");
const tag4 = document.querySelector(".tag4");
const tag5 = document.querySelector(".tag5");
const tag6 = document.querySelector(".tag6");
const tag7 = document.querySelector(".tag7");
const tag8 = document.querySelector(".tag8");
const tag9 = document.querySelector(".tag9");
const tag10 = document.querySelector(".tag10");
const tag11 = document.querySelector(".tag11");

const appearFigures = () => {
    setTimeout(() => {
        figure3.style.opacity = 1
        setTimeout(() => {
            figure4.style.opacity = 1
            setTimeout(() => {
                figure5.style.opacity = 1
                setTimeout(() => {
                    figure6.style.opacity = 1
                    setTimeout(() => {
                        figure7.style.opacity = 1
                        setTimeout(() => {
                            tag1.style.opacity = 1
                            tag5.style.opacity = 1
                            setTimeout(() => {
                                tag7.style.opacity = 1
                                tag3.style.opacity = 1
                                tag11.style.opacity = 1
                                setTimeout(() => {
                                    tag2.style.opacity = 1
                                    tag4.style.opacity = 1
                                    tag9.style.opacity = 1
                                    setTimeout(() => {
                                        tag8.style.opacity = 1
                                        tag6.style.opacity = 1
                                        tag10.style.opacity = 1
                                    }, 500);
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 1500);
                }, 300);
            }, 300);
        }, 300);
    }, 500);
}


setTimeout(() => {
    writeUpperLetters()
}, 1000);



















// ROTAR IMAGENES DE LOS PROYECTOS - - - - - - - - - - - - - - - - - - - - - - - 
// TARJETA 1 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const proyectCard1Imgs1 = document.querySelector(".proyect-card1-img1");
const proyectCard1Imgs2 = document.querySelector(".proyect-card1-img2");
const proyectCard1Imgs3 = document.querySelector(".proyect-card1-img3");
const proyectCard1Imgs4 = document.querySelector(".proyect-card1-img4");

let imgCard1On = 1

const changeImgCard1 = () => {
    if(imgCard1On == 1){
        proyectCard1Imgs1.style.display = 'none'
        proyectCard1Imgs2.style.display = 'flex'
        proyectCard1Imgs3.style.display = 'none'
        proyectCard1Imgs4.style.display = 'flex'
        imgCard1On = 2
    }
    else{
        proyectCard1Imgs1.style.display = 'flex'
        proyectCard1Imgs2.style.display = 'none'
        proyectCard1Imgs3.style.display = 'flex'
        proyectCard1Imgs4.style.display = 'none'
        imgCard1On = 1
    }
}

// TARJETA 2 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const proyectCard2Imgs1 = document.querySelector(".proyect-card2-img1");
const proyectCard2Imgs2 = document.querySelector(".proyect-card2-img2");
const proyectCard2Imgs3 = document.querySelector(".proyect-card2-img3");
const proyectCard2Imgs4 = document.querySelector(".proyect-card2-img4");

let imgCard2On = 1

const changeImgCard2 = () => {
    if(imgCard2On == 1){
        proyectCard2Imgs1.style.display = 'none'
        proyectCard2Imgs2.style.display = 'flex'
        proyectCard2Imgs3.style.display = 'none'
        proyectCard2Imgs4.style.display = 'flex'
        imgCard2On = 2
    }
    else{
        proyectCard2Imgs1.style.display = 'flex'
        proyectCard2Imgs2.style.display = 'none'
        proyectCard2Imgs3.style.display = 'flex'
        proyectCard2Imgs4.style.display = 'none'
        imgCard2On = 1
    }
}

// TARJETA 3 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const proyectCard3Imgs1 = document.querySelector(".proyect-card3-img1");
const proyectCard3Imgs2 = document.querySelector(".proyect-card3-img2");
const proyectCard3Imgs3 = document.querySelector(".proyect-card3-img3");
const proyectCard3Imgs4 = document.querySelector(".proyect-card3-img4");

let imgCard3On = 1

const changeImgCard3 = () => {
    if(imgCard3On == 1){
        proyectCard3Imgs1.style.display = 'none'
        proyectCard3Imgs2.style.display = 'flex'
        proyectCard3Imgs3.style.display = 'none'
        proyectCard3Imgs4.style.display = 'none'
        imgCard3On = 2
    }
    else if(imgCard3On == 2){
        proyectCard3Imgs1.style.display = 'none'
        proyectCard3Imgs2.style.display = 'none'
        proyectCard3Imgs3.style.display = 'flex'
        proyectCard3Imgs4.style.display = 'none'
        imgCard3On = 3
    }
    else if(imgCard3On == 3){
        proyectCard3Imgs1.style.display = 'none'
        proyectCard3Imgs2.style.display = 'none'
        proyectCard3Imgs3.style.display = 'none'
        proyectCard3Imgs4.style.display = 'flex'
        imgCard3On = 4
    }
    else{
        proyectCard3Imgs1.style.display = 'flex'
        proyectCard3Imgs2.style.display = 'none'
        proyectCard3Imgs3.style.display = 'none'
        proyectCard3Imgs4.style.display = 'none'
        imgCard3On = 1
    }
}

// TARJETA 4 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const proyectCard4Imgs1 = document.querySelector(".proyect-card4-img1");
const proyectCard4Imgs2 = document.querySelector(".proyect-card4-img2");
const proyectCard4Imgs3 = document.querySelector(".proyect-card4-img3");
const proyectCard4Imgs4 = document.querySelector(".proyect-card4-img4");

let imgCard4On = 1

const changeImgCard4 = () => {
    if(imgCard4On == 1){
        proyectCard4Imgs1.style.display = 'none'
        proyectCard4Imgs2.style.display = 'flex'
        proyectCard4Imgs3.style.display = 'none'
        proyectCard4Imgs4.style.display = 'flex'
        imgCard4On = 2
    }
    else{
        proyectCard4Imgs1.style.display = 'flex'
        proyectCard4Imgs2.style.display = 'none'
        proyectCard4Imgs3.style.display = 'flex'
        proyectCard4Imgs4.style.display = 'none'
        imgCard4On = 1
    }
}

// TARJETA 5 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const proyectCard5Imgs1 = document.querySelector(".proyect-card5-img1");
const proyectCard5Imgs2 = document.querySelector(".proyect-card5-img2");
const proyectCard5Imgs3 = document.querySelector(".proyect-card5-img3");
const proyectCard5Imgs4 = document.querySelector(".proyect-card5-img4");

let imgCard5On = 1

const changeImgCard5 = () => {
    if(imgCard5On == 1){
        proyectCard5Imgs1.style.display = 'none'
        proyectCard5Imgs2.style.display = 'flex'
        proyectCard5Imgs3.style.display = 'none'
        proyectCard5Imgs4.style.display = 'flex'
        imgCard5On = 2
    }
    else{
        proyectCard5Imgs1.style.display = 'flex'
        proyectCard5Imgs2.style.display = 'none'
        proyectCard5Imgs3.style.display = 'flex'
        proyectCard5Imgs4.style.display = 'none'
        imgCard5On = 1
    }
}

// FUNCIÓN MAYOR - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

changeImgCards = () => {
    setInterval(() => {
        changeImgCard1()
        changeImgCard2()
        changeImgCard3()
        changeImgCard4()
        changeImgCard5()
    }, 3000);
}

changeImgCards()









































const proyectCard1 = document.querySelector(".proyect-card1")
const proyectCard1Height = proyectCard1.clientHeight
const proyectCard1Width = proyectCard1.clientWidth

proyectCard1.addEventListener("mousemove",(e)=>{
    const {layerX, layerY} = e

    const yRotation = (
        (layerY - proyectCard1Height / 2) / proyectCard1Height
    ) * 5

    const xRotation = (
        (layerX - proyectCard1Width / 2) / proyectCard1Width
    ) * 5

    proyectCard1.style.transform = `perspective(500px) scale(1.03) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
})

proyectCard1.addEventListener("mouseout",()=>{
    proyectCard1.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`
})










const proyectCard2 = document.querySelector(".proyect-card2")
const proyectCard2Height = proyectCard1.clientHeight
const proyectCard2Width = proyectCard1.clientWidth

proyectCard2.addEventListener("mousemove",(e)=>{
    const {layerX, layerY} = e

    const yRotation = (
        (layerY - proyectCard1Height / 2) / proyectCard2Height
    ) * 5

    const xRotation = (
        (layerX - proyectCard1Width / 2) / proyectCard2Width
    ) * 5

    proyectCard2.style.transform = `perspective(500px) scale(1.03) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
})

proyectCard2.addEventListener("mouseout",()=>{
    proyectCard2.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`
})


















const proyectCard3 = document.querySelector(".proyect-card3")
const proyectCard3Height = proyectCard1.clientHeight
const proyectCard3Width = proyectCard1.clientWidth

proyectCard3.addEventListener("mousemove",(e)=>{
    const {layerX, layerY} = e

    const yRotation = (
        (layerY - proyectCard1Height / 2) / proyectCard3Height
    ) * 5

    const xRotation = (
        (layerX - proyectCard1Width / 2) / proyectCard3Width
    ) * 5

    proyectCard3.style.transform = `perspective(500px) scale(1.03) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
})

proyectCard3.addEventListener("mouseout",()=>{
    proyectCard3.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`
})














const proyectCard4 = document.querySelector(".proyect-card4")

proyectCard4.addEventListener("mousemove",(e)=>{
    const proyectCard4Height = proyectCard1.clientHeight
    const proyectCard4Width = proyectCard1.clientWidth

    const {layerX, layerY} = e

    const yRotation = (
        (layerY - proyectCard1Height / 2) / proyectCard4Height
    ) * 5

    const xRotation = (
        (layerX - proyectCard1Width / 2) / proyectCard4Width
    ) * 5

    proyectCard4.style.transform = `perspective(500px) scale(1.03) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
})

proyectCard4.addEventListener("mouseout",()=>{
    proyectCard4.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`
})















const proyectCard5 = document.querySelector(".proyect-card5")

proyectCard5.addEventListener("mousemove",(e)=>{

    const proyectCard5Height = proyectCard5.clientHeight
    const proyectCard5Width = proyectCard5.clientWidth  
    
    const {layerX, layerY} = e

    const yRotation = (
        (layerY - proyectCard5Height / 2) / proyectCard5Height
    ) * 5

    const xRotation = (
        (layerX - proyectCard5Width / 2) / proyectCard5Width
    ) * 5

    proyectCard5.style.transform = `perspective(500px) scale(1.03) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
})

proyectCard5.addEventListener("mouseout",()=>{
    proyectCard5.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`
})
























const seeMoreProyectsContainer = document.querySelector(".see-more-proyects-container");
const seeMoreProyectsButton = document.getElementById("see-more-proyects-button");

let seeMoreProyectsCounter = 0

seeMoreProyectsButton.addEventListener("click",()=>{
    if(seeMoreProyectsCounter == 0){
        proyectCard4.style.display = 'flex'
        seeMoreProyectsCounter = 1
    }
    else if(seeMoreProyectsCounter == 1){
        proyectCard5.style.display = 'flex'
        seeMoreProyectsCounter = 2
        seeMoreProyectsContainer.style.display = 'none'
    }
})



// Seleccionamos los botones de los certificados
let verifyButton1 = document.querySelector(".verify-cert-1");
let verifyButton2 = document.querySelector(".verify-cert-2");
let verifyButton3 = document.querySelector(".verify-cert-3");
let verifyButton4 = document.querySelector(".verify-cert-4");

// Códigos de los certificados
const codigos = [
    "4504-2640-3403-2048",  // Código para verifyButton1
    "1392-5466-3623-3975",  // Código para verifyButton2
    "1360-2020-7947-3576",  // Código para verifyButton3
    "3454-3986-1987-5371"   // Código para verifyButton4
];

// Objeto que guarda el estado individual de cada botón (habilitado/deshabilitado)
const botonState = {
    "verify-cert-1": { disabled: false },
    "verify-cert-2": { disabled: false },
    "verify-cert-3": { disabled: false },
    "verify-cert-4": { disabled: false }
};

// Función para copiar el código al portapapeles
function copiarCodigos(event) {
    // Obtenemos el botón que fue presionado
    let boton = event.target.closest('p');
    
    // Buscar la clase que comienza con 'verify-cert-' (asegurándonos de obtener solo la correcta)
    let botonId = Array.from(boton.classList).find(cls => cls.startsWith('verify-cert-'));

    // Verificar si el botón tiene el estado correcto en botonState
    if (!botonId || !botonState[botonId]) {
        console.error("Estado de botón no encontrado:", botonId);
        return;
    }

    // Si el botón está deshabilitado, no hacer nada
    if (botonState[botonId].disabled) return;

    // Deshabilitar el botón para evitar clics adicionales
    botonState[botonId].disabled = true;
    boton.classList.add("disabled");  // Añadimos la clase "disabled" para cambiar el estilo

    // Determinar cuál botón fue presionado y obtener el código correspondiente
    let botonIndex = parseInt(botonId.split('-')[2]) - 1;  // Esto obtiene el índice (0, 1, 2, 3)
    
    // Obtener el código correspondiente usando el índice
    let textoParaCopiar = codigos[botonIndex];

    // Usar la API Clipboard para copiar el texto al portapapeles
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        // Guardamos el contenido original del texto
        let originalTexto = boton.textContent.trim();
        
        // Cambiar el texto dentro del <p> a "¡Código Copiado!" (sin modificar el ícono)
        boton.innerHTML = `<i class="fa-solid fa-check"></i> ¡Código Copiado!`;

        // Esperar 2 segundos y restaurar el texto original
        setTimeout(() => {
            // Restauramos solo el texto original, manteniendo el ícono intacto
            boton.innerHTML = `<i class="fa-regular fa-copy"></i> ${originalTexto}`;
            
            // Habilitar el botón nuevamente después de 2 segundos
            botonState[botonId].disabled = false;  // Rehabilitamos el botón
            boton.classList.remove("disabled");  // Quitamos la clase "disabled"
        }, 2000);
    }).catch(err => {
        console.error("Error al copiar al portapapeles: ", err);
    });
}

// Event listeners para los botones
verifyButton1.addEventListener("click", copiarCodigos);
verifyButton2.addEventListener("click", copiarCodigos);
verifyButton3.addEventListener("click", copiarCodigos);
verifyButton4.addEventListener("click", copiarCodigos);
































const phoneNumberIcon = document.querySelector(".fa-square-phone")
const phoneNumberContainer = document.querySelector(".phone-number-main-container")

phoneNumberIcon.addEventListener("mouseover",()=>{
    phoneNumberContainer.style.display = `flex`
    phoneNumberContainer.style.opacity = 1
})

phoneNumberIcon.addEventListener("mouseout",()=>{
    phoneNumberContainer.style.opacity = 0
    phoneNumberContainer.style.display = `none`
})

phoneNumberIcon.addEventListener("click",()=>{
    navigator.clipboard.writeText('1127528837')
})
















// HACER APARECER LAS IMAGENENS DE LA SEECCION DE EXPERIENCIA
const img1Exp1 = document.querySelector(".img-div-container-1--1")
const img2Exp1 = document.querySelector(".img-div-container-1--2")
const img3Exp1 = document.querySelector(".card-smartphone-img-container-1")

const img1Exp2 = document.querySelector(".img-div-container-2--1")
const img2Exp2 = document.querySelector(".img-div-container-2--2")
const img3Exp2 = document.querySelector(".card-smartphone-img-container-2")

const imgShadow1Exp1 = document.querySelector(".shadow1-1")
const imgShadow2Exp1 = document.querySelector(".shadow2-1")
const imgShadow3Exp1 = document.querySelector(".shadow3-1")

const imgShadow1Exp2 = document.querySelector(".shadow1-2")
const imgShadow2Exp2 = document.querySelector(".shadow2-2")
const imgShadow3Exp2 = document.querySelector(".shadow3-2")

let ExpSectionContainerIsVisible = false

const appearImgsExpContainer = () => {


    img1Exp2.style.transform = 'rotate3d(2, 1, 1, -0.1turn) translate(-140px,-260px)'
    imgShadow1Exp2.style.transform = 'rotate3d(2, 1, 1, -0.1turn) translate(0px,35px)'
    img2Exp2.style.transform = 'rotate3d(2, 1, 1, -0.05turn) scale(0.9) translate(-220px, -340px)'
    imgShadow2Exp2.style.transform = 'rotate3d(5, 1, 1, -0.05turn) scale(0.9) translate(-25px, -15px)'
    img3Exp2.style.transform = 'translate(-200px,260px)'

    if(ExpSectionContainerIsVisible == true){
        img3Exp1.style.opacity = 1
        img3Exp1.style.transform = 'translate(-200px,260px)'
        img3Exp2.style.opacity = 1
        
        setTimeout(() => {
            img1Exp1.style.opacity = 1
            imgShadow1Exp1.style.opacity = 1
            img1Exp1.style.transform = 'rotate3d(2, 1, 1, -0.1turn) translate(-140px,-260px)'
            imgShadow1Exp1.style.transform = 'rotate3d(2, 1, 1, -0.1turn) translate(0px,35px)'
            imgShadow1Exp2.style.opacity = 1
            img1Exp2.style.opacity = 1
            
            setTimeout(() => {
                img2Exp1.style.opacity = .8
                imgShadow2Exp1.style.opacity = 1
                img2Exp1.style.transform = 'rotate3d(2, 1, 1, -0.05turn) scale(0.9) translate(-220px, -340px)'
                imgShadow2Exp1.style.transform = 'rotate3d(5, 1, 1, -0.05turn) scale(0.9) translate(-25px, -15px)'
                img2Exp2.style.opacity = .8
                imgShadow2Exp2.style.opacity = 1

            }, 250);
        }, 250);
        


        ExpSectionContainerIsVisible = false
    }
    else{
        ExpSectionContainerIsVisible = true
    }
}

const expSectionContainer = document.querySelector(".exp-section-container")

const observerExpSection = new IntersectionObserver(appearImgsExpContainer,{
    threshold: 0.5
})
observerExpSection.observe(expSectionContainer)




































// sepador binario

document.addEventListener('DOMContentLoaded', () => {
    const binaryText = document.getElementById('binary-text');
    const text = '01100100 01100001 01101110 01101001 01100101 01101100 01100100 01100001 01101110 01101001 01100101 01101100 01100100 01100001 01101110 01101001 01100101 01101100';

    // Duplicar el texto para crear un efecto de transición infinita
    binaryText.innerHTML = text + text;

    // Genera una cadena de texto con clases aleatorias para el parpadeo y glitch
    const characters = binaryText.innerHTML.split('');
    const updatedText = characters.map((char, index) => {
        let newChar = char;
        if (Math.random() < 0.3) { // Ajusta la probabilidad de parpadeo (0.3 = 30%)
            newChar = `<span class="blink">${char}</span>`;
        }
        if (Math.random() < 0.1) { // Ajusta la probabilidad de glitch (0.1 = 10%)
            newChar = `<span class="glitch" data-char="${char}">${char}</span>`;
        }
        return newChar;
    }).join('');
    
    binaryText.innerHTML = updatedText;

    // Función para generar el efecto glitch
    const glitchEffect = () => {
        const glitchChars = document.querySelectorAll('.glitch');
        glitchChars.forEach(char => {
            setTimeout(() => {
                char.textContent = String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33)); // Caracter aleatorio
                setTimeout(() => {
                    char.textContent = char.getAttribute('data-char'); // Volver al caracter original
                }, Math.random() * 500); // Duración aleatoria del glitch
            }, Math.random() * 2000); // Intervalo aleatorio del glitch
        });
    };

    // Iniciar el efecto glitch
    setInterval(glitchEffect, 2000);
});

