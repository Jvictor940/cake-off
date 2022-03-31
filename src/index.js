let cakeList = document.getElementById('cake-list')
let cakeName = document.getElementById('cake-name')
let cakeImage = document.getElementById('cake-image')
let description = document.getElementById('cake-description')
let reviews = document.getElementById('review-list')
let form = document.getElementById('review-form')
let newReview = document.getElementById('review')


const request = async () => {
    let req = await fetch('http://localhost:3000/cakes')
    let res = await req.json()
    cakeImage.src = res[0].image_url
    cakeName.innerHTML = res[0].name
    description.innerHTML = res[0].description
    reviews.innerHTML = res[0].reviews

    res.forEach((element) => {
        let li = document.createElement('li')
        li.innerHTML = element.name
        cakeList.append(li)
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(newReview.value)
        reviews.append(newReview.value)
    })
}
request()





// let cakeList = document.getElementById('cake-list')
// let cakeName = document.getElementById('cake-name')
// let cakeImage = document.getElementById('cake-image')
// let description= document.getElementById('cake-description')
// let reviews = document.getElementById('review-list')
// let form = document.getElementById('review-form')
// let newReview = document.getElementById('review')

// const request = async () => {
//     let req = await fetch('http://localhost:3000/cakes')
//     let res = await req.json()
//     cakeImage.src = res[0].image_url
//     cakeName.innerHTML = res[0].name
//     description.innerHTML = res[0].description
//     //reviews.innerHTML = res[0].reviews
//     console.log(res[0].reviews[0])

//     res.forEach((element) => {
//         let li = document.createElement('li')
//         let li2 = document.createElement('li')
//         li.innerHTML = element.name
//         li2.innerHTML = element.reviews[0]
//         cakeList.append(li)
//         reviews.append(li2)
//     });
    
    
//     form.addEventListener('submit', (e) => {
//         e.preventDefault()
//         console.log(newReview.value)
//         reviews.append(newReview.value)
//     })

// }
// request()