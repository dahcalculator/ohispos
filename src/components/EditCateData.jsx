import React from 'react'

export const EditCateData = () => {

  var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('name', 'judefileYYY');
data.append('code', '3777222');
data.append('barcode', '2238837373737');
data.append('price', '3334');
data.append('category', 'cloths');
data.append('image', fs.createReadStream('/C:/Users/DELL/Pictures/MEmu Photo/ama.JPG'));

var config = {
  method: 'post',
  url: 'http://ohisstores.pgis.org.ng/api/product ',
  headers: { 
    'Accept': 'application/json', 
    'Authorization': 'Bearer 6|njvRDzgitMKpUMFDTKZDhIfdofEchrgfJ4rxI0kt', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

  return (
    <div>EditCateData</div>
  )
}
