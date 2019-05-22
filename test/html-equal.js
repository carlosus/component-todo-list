const pattern = /[\f\n\r\t\v ]{2,}/g;
const replacement = ' ';

function normalize(html) {
    // normalize whitespace, everything becomes one space
    const replaced = html.replace(pattern, replacement);
    // trim leading and 
    const trimmed = replaced.trim();
    return trimmed;
}

// add the custom assertion to QUnit
QUnit.assert.htmlEqual = function(actual, expected) {
    const normalizedActual = normalize(actual);
    const normalizeExpected = normalize(expected);
    QUnit.assert.equal(normalizedActual, normalizeExpected);
};