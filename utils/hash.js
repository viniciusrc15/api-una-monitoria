const crypto = require('crypto');

function  createHash(data){
    if (!data){
        throw new Error('Necessário conter dados para criar Hash!');
    }

    const hash = crypto.createHash('sha256');

    hash.update(data);

    return hash.digest('base64');
}

module.exports = {
    createHash: createHash
}