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
    textLower : 'Desarrollador full-stack'
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
                }, 900);
                
            }
        }
        else{
            if(textForWriteOnce.textLower[iTextForWriteOnceLOWER]){
                if(textForWriteOnce.textLower[iTextForWriteOnceLOWER] == 'f'){
                    textContainer.style.width = `448px`
                }
                textForEdit.innerHTML = textForEdit.innerHTML + textForWriteOnce.textLower[iTextForWriteOnceLOWER]
                iTextForWriteOnceLOWER ++
            }
            else{
                stick.style.cssText = `animation-name: turnOnOffStick;`
                clearInterval(writingUpperLetters)
                setTimeout(() => {
                    deleteLetters()
                }, 2000);
                
            }
        }


    }, 100)
}




















































let str
let deleteLettersInterval

deleteLetters = () => {
    str = textForEdit.innerHTML 
    stick.style.cssText = `animation-name:none;`
    str = str.slice(0, str.length - 1);
    textForEdit.innerHTML = str
    setTimeout(() => {
        deleteLettersInterval = setInterval(() => {
            str = str.slice(0, str.length - 1);
            textForEdit.innerHTML = str
            stopDeleteLetters()
        }, 50);
    }, 250);

}

stopDeleteLetters = () =>{
    str = textForEdit.innerHTML 
    if(str.split('')[str.length - 1] == ' '){
        stick.style.cssText = `animation-name: turnOnOffStick;`
        clearInterval(deleteLettersInterval)
        str = str.slice(0, str.length - 1)
        textForEdit.innerHTML = str
        textForEdit.innerHTML = textForEdit.innerHTML + " "

        setTimeout(() => {
            startWriteLetters()
            stick.style.cssText = `animation-name:none;`
        }, 500);
    }
    else{
    }
}

const textForChange = [{
    text:"front-end",
    letterAmount: 9
},{
    text:"back-end",
    letterAmount: 8
},{
    text:"full-stack",
    letterAmount: 10
}]
    
let iTextForChange = 0
let iText

startWriteLetters = () =>{
    let iText = 0
    str = str + ' '
    let writingLetters = setInterval(() => {
        if(typeof(textForChange[iTextForChange].text[iText]) == 'string'){
            textForEdit.innerHTML = textForEdit.innerHTML + textForChange[iTextForChange].text[iText]
            str = str + textForChange[iTextForChange].text[iText]
            iText++
        }
        else{
            stick.style.cssText = `animation-name: turnOnOffStick;`
            clearInterval(writingLetters)
            setTimeout(() => {
                deleteLetters()
            }, 2000);
            if(iTextForChange == 0){
                iTextForChange++
            }
            else if(iTextForChange == 1){
                iTextForChange++
            }
            else{
                iTextForChange = 0
            }
        }
    }, 100)
}

// deleteLetters()









// aparecer las figuras del fondo

// const figure1 = document.querySelector(".figure1");
// const figure2 = document.querySelector(".figure2");
// const figure3 = document.querySelector(".figure3");
// const figure4 = document.querySelector(".figure4");
// const figure5 = document.querySelector(".figure5");
// const figure6 = document.querySelector(".figure6");
// const figure7 = document.querySelector(".figure7");
// const figure8 = document.querySelector(".figure8");
// const figure9 = document.querySelector(".figure9");
// const figure10 = document.querySelector(".figure10");
// const tagsContainer = document.querySelector(".tags-container");
// const tag1 = document.querySelector(".tag1");
// const tag2 = document.querySelector(".tag2");
// const tag3 = document.querySelector(".tag3");
// const tag4 = document.querySelector(".tag4");
// const tag5 = document.querySelector(".tag5");
// const tag6 = document.querySelector(".tag6");
// const tag7 = document.querySelector(".tag7");
// const tag8 = document.querySelector(".tag8");
// const tag9 = document.querySelector(".tag9");

// const appearFigures = () => {
//     setTimeout(() => {
//         figure3.style.opacity = 1
//         setTimeout(() => {
//             figure4.style.opacity = 1
//             setTimeout(() => {
//                 figure5.style.opacity = 1
//                 setTimeout(() => {
//                     figure6.style.opacity = 1
//                     setTimeout(() => {
//                         figure7.style.opacity = 1
//                         setTimeout(() => {
//                             figure1.style.opacity = 1
//                             setTimeout(() => {
//                                 figure2.style.opacity = 1
//                                 setTimeout(() => {
//                                     figure8.style.opacity = 1
//                                     tag1.style.opacity = 1
//                                     tag5.style.opacity = 1
//                                     setTimeout(() => {
//                                         tag7.style.opacity = 1
//                                         tag3.style.opacity = 1
//                                         figure9.style.opacity = 1
//                                         setTimeout(() => {
//                                             tag2.style.opacity = 1
//                                             tag4.style.opacity = 1
//                                             tag9.style.opacity = 1
//                                             figure10.style.opacity = 1
//                                             setTimeout(() => {
//                                                 tag8.style.opacity = 1
//                                                 tag6.style.opacity = 1
//                                             }, 500);
//                                         }, 500);
//                                     }, 500);
//                                 }, 500);
//                             }, 500);
//                         }, 500);
//                     }, 1500);
//                 }, 100);
//             }, 100);
//         }, 100);
//     }, 500);
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
                                setTimeout(() => {
                                    tag2.style.opacity = 1
                                    tag4.style.opacity = 1
                                    tag9.style.opacity = 1
                                    setTimeout(() => {
                                        tag8.style.opacity = 1
                                        tag6.style.opacity = 1
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

window.addEventListener("load",()=>{
    setTimeout(() => {
        writeUpperLetters()
    }, 1000);
})


















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
const seeMoreProyectsButton = document.querySelector(".see-more-proyects-button");
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
const img1Exp = document.querySelector(".img-div-container1")
const img2Exp = document.querySelector(".img-div-container2")
const img3Exp = document.querySelector(".card-smartphone-img-container")

const imgShadow1Exp = document.querySelector(".shadow1")
const imgShadow2Exp = document.querySelector(".shadow2")

let ExpSectionContainerIsVisible = false

const appearImgsExpContainer = () => {
    if(ExpSectionContainerIsVisible == true){
        img3Exp.style.opacity = 1
        img3Exp.style.transform = 'translate(-200px,260px)'
        setTimeout(() => {
            img1Exp.style.opacity = 1
            imgShadow1Exp.style.opacity = 1
            img1Exp.style.transform = 'rotate3d(2, 1, 1, -0.1turn) translate(-140px,-260px)'
            imgShadow1Exp.style.transform = 'rotate3d(2, 1, 1, -0.1turn) translate(0px,35px)'
            setTimeout(() => {
                img2Exp.style.opacity = .7
                imgShadow2Exp.style.opacity = 1
                img2Exp.style.transform = 'rotate3d(2, 1, 1, -0.05turn) scale(0.9) translate(-220px, -340px)'
                imgShadow2Exp.style.transform = 'rotate3d(5, 1, 1, -0.05turn) scale(0.9) translate(-25px, -15px)'
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