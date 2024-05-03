$(document).ready(function() {
    const videos = [
        '824804225', // Replace with Vimeo video IDs
        // Add more video IDs here
    ];

    const slider = $('.slider');

    for (let i = 0; i < videos.length; i++) {
        const videoId = videos[i];
        const videoThumbnail = `https://vumbnail.com/${videoId}`;
        const videoURL = `https://player.vimeo.com/video/${videoId}`;
        const videoLink = `<a data-fancybox="gallery" data-type="iframe" href="${videoURL}" data-src="${videoURL}" data-thumb="${videoThumbnail}"></a>`;
        slider.append(videoLink);
    }

    $('[data-fancybox]').fancybox({
        loop: true,
        thumbs: {
            autoStart: true,
            axis: 'x'
        },
        iframe: {
            preload: false
        }
    });
});
