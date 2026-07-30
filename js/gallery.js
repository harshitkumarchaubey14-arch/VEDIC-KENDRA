// ============================================
// GALLERY PAGE JAVASCRIPT
// Handles: Image Lightbox (prev/next/close/keyboard)
//          Video Popup Player
// This file works automatically with any number of
// photos/videos — no changes needed when you add more.
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    /* ---------- IMAGE LIGHTBOX ---------- */
    const photoItems = Array.from(document.querySelectorAll('#photoGrid .gallery-item img'));
    const imageLightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentPhotoIndex = 0;

    function openLightbox(index) {
        currentPhotoIndex = index;
        lightboxImage.src = photoItems[currentPhotoIndex].src;
        imageLightbox.classList.add('active');
    }

    function closeLightbox() {
        imageLightbox.classList.remove('active');
        lightboxImage.src = '';
    }

    function showNextPhoto() {
        currentPhotoIndex = (currentPhotoIndex + 1) % photoItems.length;
        lightboxImage.src = photoItems[currentPhotoIndex].src;
    }

    function showPrevPhoto() {
        currentPhotoIndex = (currentPhotoIndex - 1 + photoItems.length) % photoItems.length;
        lightboxImage.src = photoItems[currentPhotoIndex].src;
    }

    photoItems.forEach(function (img, index) {
        img.addEventListener('click', function () {
            openLightbox(index);
        });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', showNextPhoto);
    if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevPhoto);

    // click outside image closes lightbox
    imageLightbox.addEventListener('click', function (e) {
        if (e.target === imageLightbox) closeLightbox();
    });

    /* ---------- VIDEO POPUP ---------- */
    const videoItems = Array.from(document.querySelectorAll('#videoGrid .video-item'));
    const videoLightbox = document.getElementById('videoLightbox');
    const videoLightboxPlayer = document.getElementById('videoLightboxPlayer');
    const videoLightboxClose = document.getElementById('videoLightboxClose');

    function openVideoLightbox(sourceUrl) {
        videoLightboxPlayer.src = sourceUrl;
        videoLightbox.classList.add('active');
        videoLightboxPlayer.play();
    }

    function closeVideoLightbox() {
        videoLightboxPlayer.pause();
        videoLightboxPlayer.src = '';
        videoLightbox.classList.remove('active');
    }

    videoItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const source = item.querySelector('video source').getAttribute('src');
            openVideoLightbox(source);
        });
    });

    if (videoLightboxClose) videoLightboxClose.addEventListener('click', closeVideoLightbox);

    videoLightbox.addEventListener('click', function (e) {
        if (e.target === videoLightbox) closeVideoLightbox();
    });

    /* ---------- KEYBOARD NAVIGATION ---------- */
    document.addEventListener('keydown', function (e) {
        if (imageLightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNextPhoto();
            if (e.key === 'ArrowLeft') showPrevPhoto();
        }
        if (videoLightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeVideoLightbox();
        }
    });

});