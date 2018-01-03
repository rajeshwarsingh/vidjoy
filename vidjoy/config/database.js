if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://rajan:rajan@ds131687.mlab.com:31687/vidjoy-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost:27017/vidjot-dev'}
}