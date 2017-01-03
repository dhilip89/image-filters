/**
 * @name getPixelsFromImage
 * @param {object} canvas
 * @param {object} context
 * @param {object} imageData
 */
function getPixelsFromImage(canvas, context, element) {
    if (element.tagName !== 'IMG') {
        throw new Error('image-filters:: invalid origin');
    }

    context.drawImage(element, 0, 0);
    return context.getImageData(0, 0, canvas.width, canvas.height);
}

/**
 * @name convertToDataURL
 * @param {object} canvas
 * @param {object} context
 */
function convertToDataURL(canvas, context, imageData) {
    context.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
}

module.exports = {
    getPixelsFromImage: getPixelsFromImage,
    convertToDataURL: convertToDataURL
};
