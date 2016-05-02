var crypto = require('crypto');
var https = require('https');

module.exports.lookup = function lookup(email, timeout) {
    var gravatarUrl = '//www.gravatar.com/avatar/' +
        crypto.createHash('md5').update(email.toLowerCase().trim()).digest('hex') +
        '?s=250';

    return new Promise((resolve) => {
        var request, timer, timerEnded = false;

        request = https.get('https:' + gravatarUrl + '&d=404&r=x', function (response) {
            clearTimeout(timer);
            if (response.statusCode !== 404 && !timerEnded) {
                gravatarUrl += '&d=mm&r=x';
            }

            resolve(gravatarUrl);
        });

        request.on('error', function () {
            clearTimeout(timer);
            // just resolve with no image url
            if (!timerEnded) {
                return resolve(null);
            }
        });

        timer = setTimeout(function () {
            timerEnded = true;
            request.abort();
            return resolve(null);
        }, timeout || 2000);
    });
};
