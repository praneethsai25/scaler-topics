// const video = document.createElement('video');
// navigator.mediaDevices.getUserMedia({ video: true })
//   .then(stream => {
//     video.srcObject = stream;
//     video.play();
//   })
//   .catch(error => {
//     console.error('Error accessing video stream:', error);
//   });

// let prev_x = 0, prev_y = 0, prev_w = 0, prev_h = 0;
// const trajectory = [];

// function processFrame() {
//   const canvas = document.createElement('canvas');
//   const context = canvas.getContext('2d');
//   context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  
//   const imageData = context.getImageData(0, 0, video.videoWidth, video.videoHeight);
//   const data = imageData.data;
  
//   const hsv = new cv.Mat(video.videoHeight, video.videoWidth, cv.CV_8UC3);
//   cv.cvtColor(imageData, hsv, cv.COLOR_RGB2HSV);
  
//   const lower_bound = new cv.Scalar(0, 20, 0);
//   const upper_bound = new cv.Scalar(20, 255, 255);
  
//   const mask = new cv.Mat(video.videoHeight, video.videoWidth, cv.CV_8UC1);
//   cv.inRange(hsv, lower_bound, upper_bound, mask);
  
//   const contours = new cv.MatVector();
//   const hierarchy = new cv.Mat();
//   cv.findContours(mask, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
  
//   if (contours.size() > 0) {
//     let largest_contour = contours.get(0);
//     let largest_area = cv.contourArea(largest_contour);
//     for (let i = 1; i < contours.size(); i++) {
//       const contour = contours.get(i);
//       const area = cv.contourArea(contour);
//       if (area > largest_area) {
//         largest_contour = contour;
//         largest_area = area;
//       }
//     }
    
//     const rect = cv.boundingRect(largest_contour);
//     const x = rect.x;
//     const y = rect.y;
//     const w = rect.width;
//     const h = rect.height;
    
//     cv.rectangle(imageData, new cv.Point(x, y), new cv.Point(x + w, y + h), new cv.Scalar(1, 255, 255), 2);
    
//     const dx = x - prev_x;
//     const dy = y - prev_y;
    
//     prev_x = x;
//     prev_y = y;
//     prev_w = w;
//     prev_h = h;
    
//     trajectory.push({ x, y });
    
//     for (let i = 1; i < trajectory.length; i++) {
//       const p1 = trajectory[i - 1];
//       const p2 = trajectory[i];
//       cv.line(imageData, new cv.Point(p1.x, p1.y), new cv.Point(p2.x, p2.y), new cv.Scalar(0, 0, 255), 2);
//     }
//   }
  
//   context.putImageData(imageData, 0, 0);
  
//   requestAnimationFrame(processFrame);
// }

// video.addEventListener('loadedmetadata', () => {
//   const canvas = document.createElement('canvas');
//   canvas.width = video.videoWidth;
//   canvas.height = video.videoHeight;
//   document.body.appendChild(canvas);
  
//   const context = canvas.getContext('2d');
//   context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  
//   const imageData = context.getImageData(0, 0, video.videoWidth, video.videoHeight);
//   const data = imageData.data;
  
//   cv.onRuntimeInitialized = () => {
//     processFrame();
//   };
// });