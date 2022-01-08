const fs = require('fs');
require('dotenv').config();

async function write() {
  console.log('Writing Metadata');
  const metaData = require('./metadata.json');
  for (var key in metaData) {
    metaData[key].name = 'Jack In The Blocks #' + key;
    metaData[key].description =
      '2978 Jack In the Blocks living on the Solana Blockchain.';
    metaData[key].image = key + '.png';
    metaData[key]['seller_fee_basis_points'] = 500;
    metaData[key].collection = {
      name: 'Jack In The Blocks #' + key,
      family: 'Jack In The Blocks',
    };
    metaData[key]['properties'] = {};
    metaData[key]['properties'].files = [
      {uri: key + '.png', type: 'image/png'},
    ];
    metaData[key]['properties'].category = 'image';
    metaData[key]['properties'].creators = [
      {address: 'H4bsEXa1EfE9GjYSaXHnsggKQrAk2h3TNt7gUjDU2NsR', share: 100},
    ];

    let _obj = JSON.stringify(metaData[key]);
    fs.writeFile(__dirname + `/metadata/${key}.json`, _obj, function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }
}

write();
