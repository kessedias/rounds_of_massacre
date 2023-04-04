var props = new Object();
props.width = "804px";
props.height = "201px";
var img = "https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg";

function render_banner(img, props) {

    const banner = document.querySelector('#profile-background-image-target-image');
    banner.src = img;
    banner.style.width = props.width;
    banner.style.height = props.height;
    banner.style.backgroundRepeat = 'no-repeat';
    banner.style.backgroundSize = 'cover';
}
render_banner(img, props)