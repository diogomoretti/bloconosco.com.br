
function createPhotoElement(photo) {
    var innerHtml = $('<img>')
            .addClass('instagram-image')
            .attr('src', photo.images.low_resolution.url);

        innerHtml = $('<a>')
            .addClass('instagram-link')
            .attr('target', '_blank')
            .attr('href', photo.link)
            .append(innerHtml);

        return $('<div>')
            .addClass('instagram-placeholder')
            .attr('id', photo.id)
            .append(innerHtml);
}

$('.instagram').on('didLoadInstagram', function(event, response) {
    console.log(response);
});   

function didLoadInstagram(event, response) {
    var that = this;

    $.each(response.data, function(i, photo) {
        $(that).append(createPhotoElement(photo));
    });
}

$('.instagram').on('didLoadInstagram', didLoadInstagram);

$('.instagram').instagram({
    hash: 'love',
    count: 20,
    clientId: 'f21ae0f72aec4d1a8ad74045e6fb7a8f'
});