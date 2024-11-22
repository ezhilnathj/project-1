document.querySelectorAll('.image-container img').forEach(image=>{
    image.onclick=()=>{
        document.querySelector('.pop-image').computedStyleMap.display='block';
        document.querySelector('.pop-image img').src=image.getAttribute('src');
    }
});

document.querySelector('.pop-image span').onclick=()=>{
    document.querySelector('.pop-image').computedStyleMap.display='none';
}