const fs = require('fs');
// //create a file
 // fs.writeFile('example.txt', "This is an \nExample", (err)=>{
 //    if(err){
 //      console.log(err);
 //    }
 //
 //    else {
 //      console.log("File success!");
 //      // fs.readFile('example.txt', 'utf8',(err, file)=>{
 //      //   if(err){
 //      //     console.log(err);
 //      //   }
 //      //
 //      //   else {
 //      //     console.log(file);
 //      //   }
 //      // })
 //    }
 // })

// fs.rename('example.txt', 'example2.txt', (err)=>{
//   if(err){
//     console.log(err);
//   }
//
//   else {
//     console.log("Successful rename!");
//   }
// })

// fs.appendFile('example2.txt', '\nAppended stuff!', (err)=>{
//   if (err) {
//     console.log(err);
//   }
//
//   else {
//     console.log("Successful append!");
//   }
//
// })

//Deleting a File

// fs.unlink('example2.txt', (err)=>{
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("delete success!");
//   }
// })

//Working with Folders!

// fs.mkdir('tut', (err)=>{
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("Created!");
//     fs.writeFile('./tut/example.txt', "Hello to the file!", (err)=>{
//       if (err) {
//         console.log(err);
//       }
//       else {
//         console.log("File in folder!");
//       }
//     })
//   }
// })
//
// fs.writeFile('./tut/example2.txt', "Hello to second file!", (err)=>{
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("Another File in folder!");
//   }
// })


// fs.unlink('./tut/example.txt', (err)=>{
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("delete success!");
//   }
// })

// FILE DELETION

// fs.rmdir('tut', (err)=>{
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("Deleted!");
//   }
// })

//rmdir must be on an empty Folder

// fs.readdir('tut', (err, files)=>{
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log("The files are: ", files);
//     var count =1;
//
//     for (let file of files){
//       fs.unlink('./tut/' + file, (err)=>{
//         if (err) {
//           console.log(err);
//         }
//         else {
//           console.log(`Deleted file ${count}` );
//         }
//       })
//       count ++;
//     }
//
//     console.log("count = ", count);
//   }
// })

// // Readstreams
// var num = 1;
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.txt.gz');
// readStream.on('data', (chunk)=>{
//   console.log(`chunk number: ${num}`);
//   console.log(chunk);
//   writeStream.write(chunk);
//   num ++;
// })
// simpler way

// readStream.pipe(writeStream);

const zlib = require('zlib');
// const gzip = zlib.createGzip();
// readStream.pipe(gzip).pipe(writeStream);

//Reversing the pipe - from compressed to regular

const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('example3.txt');
readStream.pipe(gunzip).pipe(writeStream);
