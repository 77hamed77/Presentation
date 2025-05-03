// effect photo
// const canvas  =document.querySelector('canvas')
// const ctx = canvas.getContext('2d')
// const particles = []
// let mouseX = Infinity
// let mouseY = Infinity

// canvas.addEventListener('mousemove', (event)=>{
//     mouseX = event.offsetX
//     mouseY = event.offsetY
// })

// canvas.addEventListener('mouseleave',()=>{
//     mouseX = event.offsetX
//     mouseY = event.offsetY
// })

// const img = new Image()
// img.src = 'images/hamed1.jpg'

// const PARTICLE_DIAMETER = 6
// img.addEventListener('load',()=>{
//     canvas.width = img.width
//     canvas.height = img.height

//     ctx.drawImage(img , 0 ,0)
//     const imagesData = ctx.getImageData(0,0,img.width,img.height).data

//     const numRows = Math.round(img.height / PARTICLE_DIAMETER)
//     const numColumns = Math.round(img.width / PARTICLE_DIAMETER)

//     for(let row=0; row< numRows; row++){
//         for(let column=0; column< numColumns; column++){
//             const pixelIndex = (row * PARTICLE_DIAMETER * img.width * column * PARTICLE_DIAMETER) * 4

//             const red = imagesData[pixelIndex]
//             const green = imagesData[pixelIndex +1]
//             const blue = imagesData[pixelIndex +2]
//             const alpha = imagesData[pixelIndex +3]

//             particles.push({
//                 x: Math.floor(Math.random() * numColumns * PARTICLE_DIAMETER),
//                 y: Math.floor(Math.random() * numRows * PARTICLE_DIAMETER),
//                 originX: column * PARTICLE_DIAMETER + PARTICLE_DIAMETER/2,
//                 originY: row + PARTICLE_DIAMETER + PARTICLE_DIAMETER /2,
//                 color: `rgba(${red}, ${green}, ${blue}, ${alpha / 255})`
//             })
//         }
//     }
//     drawParticles()
// })
// function drawParticles(){
//     updateParticles()
//     ctx.clearRect(0,0,canvas.width,canvas.height)

//     particles.forEach((particle)=>{
//         ctx.beginPath()
//         ctx.arc(particle.x,particle.y,PARTICLE_DIAMETER /2, 0, 2 * Math.PI)
//         ctx.fillStyle = particle.color
//         ctx.fill()
//     })
//     requestAnimationFrame(drawParticles)
// }
// function updateParticles(){
//     const REPEL_RADIUS =50
//     const REPEL_SREED = 5
//     const RETURN_SPEED = 0.1

//     particles.forEach((particle)=>{
//         const distanceFromMouseX = mouseX - particle.x
//         const distanceFromMouseY = mouseY - particle.y
//         const distanceFromMouse = Math.sqrt(
//             distanceFromMouseX **2 + distanceFromMouseY **2 
//         )

//         if(distanceFromMouse < REPEL_RADIUS){
//             const angle = Math.atan2(distanceFromMouseY , distanceFromMouseX)
//             const force = (REPEL_RADIUS - distanceFromMouse) / REPEL_RADIUS
//             const moveX = Math.cos(angle) * force * REPEL_SREED
//             const moveY = Math.sin(angle) * force * REPEL_SREED

//             particle.x -= moveX
//             particle.y -= moveY
//         } else if( particle.x !== particle.originX || particle.y !== particle.originY){
//             const distanceFromOriginX = particle.originX - particle.x
//             const distanceFromOriginY = particle.originY - particle.y
//             const distanceFromOrigin = Math.sqrt( distanceFromOrigin ** 2 + distanceFromOriginY **2)
//             const angle = Math.atan2(distanceFromOriginY, distanceFromOriginX)
//             const moveX = Math.cos(angle)* distanceFromOrigin * RETURN_SPEED
//             const moveY = Math.sin(angle)* distanceFromOrigin * RETURN_SPEED

//             particle.x += moveX
//             particle.y += moveY
//         }
        
//     })
// }
//  effect text 
// const canvas = document.getElementById('cavas1')
// const ctx = canvas.getContext('2d')
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight
// let particleArray =[]
// // handle mouse
// const mouse ={
//     x: null,
//     y:null,
//     radius:250
// }
// window.addEventListener('mousemove', function(event){
//     mouse.x = event.x
//     mouse.y = event.y
// })
// ctx.fillStyle = 'white'
// ctx.font = '30px Verdana'
// ctx.fillText('HAMED',0,30)
// const textCoordinates = ctx.getImageData(0,0,100,100)

// class particle{
//     constructor(x,y) {
//         this.x=x
//         this.y=y
//         this.size = 3
//         this.baseX = this.x
//         this.baseY = this.y
//         this.density = (Math.random() *30 +1)
//     }
//     drow(){
//         ctx.fillStyle = 'red'
//         ctx.beginPath()
//         ctx.ard(this.x,this.y,this.size,0,Math.PI *2)
//         ctx.closePath()
//         ctx.fill()
//     }
//     update(){
//         let dx = mouse.x  - this.x
//         let dy = mouse.y - this.y
//         let distance = Math.sqrt(dx * dx + dy * dy)
//         let forceDirectionX = dx / distance
//         let forceDirectionY = dy / distance
//         let maxDistance = mouse.radius
//         let force = (maxDistance - distance) / maxDistance
//         let directionX = forceDirectionX * force * this.density
//         let directionY = forceDirectionY * force 
//         if(distance < mouse.radius){
//             this.x +=directionX
//             this.y +=directionY
//             }else{
//                 if(this.x !== this.baseX){
//                     let dx = this.x - this.baseX
//                     this.x -= dx /5

//                 } 
//                 if(this.x !== this.baseY){
//                     let dy = this.y - this.baseY
//                     this.y -= dy /5
//                 }
//         }
//     }
// }
// function init(){
//     particleArray =[]
//     for(let y=0,y2 = textCoordinates.height;y<y2;y++){
//         for()
//     }
// }
// init()

// function animate(){
//     ctx.clearRect(0,0,canvas.width, canvas.height)
//     for(let i=0; i < 500;i++){
//         particleArray[i].drow()
//         particleArray[i].update()

//     }
//     requestAnimationFrame(animate)
// }
// animate()

// 
window.addEventListener('load', function() {
    // canvas setup
      const textInput = document.getElementById('textInput');
      const canvas = document.getElementById('canvas1');
      const ctx = canvas.getContext('2d', {
        willReadFrequently: true
      });
      console.log(ctx)
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      class Particle {
        constructor(effect, x, y, color){
            this.effect = effect;
            //this.x = Math.random() * this.effect.canvasWidth;
            //this.y = Math.random() * this.effect.canvasHeight;
            this.x = Math.random() * this.effect.canvasWidth;
            this.y = this.effect.canvasHeight;
            this.originX = x;
            this.originY = y;
            this.size = this.effect.gap;
            this.color = color;
            this.dx = 0;
            this.dy = 0;
            this.vx = 0;
            this.vy = 0;
            this.force = 0;
            this.angle = 0;
            this.distance = 0;
            this.friction = Math.random() * 0.1 + 0.2;
            this.ease = Math.random() * 0.1 + 0.05;
        }
        update(){
            this.dx = this.effect.mouse.x - this.x;
            this.dy = this.effect.mouse.y - this.y;
            this.distance = this.dx * this.dx + this.dy * this.dy;
            this.force = -this.effect.mouse.radius / this.distance;
            if(this.distance < this.effect.mouse.radius) {
                this.angle = Math.atan2(this.dy, this.dx);
                this.vx += this.force * Math.cos(this.angle);
                this.vy += this.force * Math.sin(this.angle);
            }
            this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
            this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
        }
        draw(){
          // only change colours when this colour is different than previous
          this.effect.context.fillStyle = this.color;
          this.effect.context.fillRect(this.x, this.y, this.size, this.size);
        }
      }
  
      class Effect {
        constructor(context, canvasWidth, canvasHeight){
          this.context = context;
          this.canvasWidth = canvasWidth;
          this.canvasHeight = canvasHeight;
          this.maxTextWidth = this.canvasWidth * 0.8;
          this.fontSize = 100;
          this.textVerticalOffset = 0;
          this.lineHeight = this.fontSize * 1.2;
          this.textX = this.canvasWidth / 2;
          this.textY = this.canvasHeight / 2 - this.lineHeight / 2;
          this.textInput = document.getElementById('textInput');
          this.textInput.addEventListener('keyup', e => {
              this.context.clearRect(0, 0, canvas.width, canvas.height);
              if (e.key !==' ') this.wrapText(e.target.value);
          });
  
          this.particles = [];
          this.gap = 1;
          this.mouse = {
              radius: 20000,
              x: 0,
              y: 0
          }
          window.addEventListener("mousemove", e => {
              this.mouse.x = e.x;
              this.mouse.y = e.y;
          });
        }
        /* Examples of analogous combinations:
        Violet, blue, and teal.
        Red, fuchsia, and purple.
        Red, orange, and yellow.
        Green, blue, and purple.*/
        wrapText(text){
          this.context.font = this.fontSize + 'px Bangers';
          this.context.textAlign = 'bottom';
          this.context.textBaseline = 'middle';
          this.context.strokeStyle = 'transparent';
          this.context.lineWidth = 1;
          this.context.letterSpacing = "10px"; // experimental property
          this.context.imageSmoothingEnabled = false
          //this.context.fillStyle = 'white';
          const edge = this.canvasWidth * 0.2;
          const gradient = this.context.createLinearGradient(edge, edge, this.canvasWidth - edge, this.canvasHeight - edge);
          gradient.addColorStop(0, 'white');
          gradient.addColorStop(1, 'white');
          gradient.addColorStop(0.5, 'black');
          this.context.fillStyle = gradient;
          let linesArray = [];
          let words = text.split(' ');
          let lineCounter = 0;
          let line = '';
          for (let i = 0; i < words.length; i++){
            let testLine = line + words[i] + ' ';
            if (this.context.measureText(testLine).width > this.maxTextWidth){       
              line = words[i] + ' ';
              lineCounter++;
            } else {
              line = testLine;
            }
            linesArray[lineCounter] = line;
          }
          let textHeight = this.lineHeight * lineCounter;
          this.textY = this.canvasHeight/2 -  textHeight/2 + this.textVerticalOffset;
          linesArray.forEach((el, index) => {
              this.context.fillText(el, this.textX, this.textY + (index * this.lineHeight));
              this.context.strokeText(el, this.textX, this.textY + (index * this.lineHeight));
          });
          this.convertToParticles();
        }
        convertToParticles(){
          this.particles = [];
          const pixels = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
          for(let y = 0; y < this.canvasHeight; y += this.gap) {
              for(let x = 0; x < this.canvasWidth; x += this.gap) {
                  const index = (y * this.canvasWidth + x) * 4;
                  const alpha = pixels[index + 3];
                  if(alpha > 0) {
                    const red = pixels[index];
                    const green = pixels[index + 1];
                    const blue = pixels[index + 2];
                    const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
                    this.particles.push(new Particle(this, x, y, color));
                  }
              }
          }
          this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        }
        render(){
          this.particles.forEach(particle => {
            particle.update();
            particle.draw();
          })
        }
      }
      
      let effect = new Effect(ctx, canvas.width, canvas.height);
      effect.wrapText(effect.textInput.value);
  
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.render();
        requestAnimationFrame(animate);
      }
      animate();
  
      window.addEventListener('resize', function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
          effect = new Effect(ctx, canvas.width, canvas.height);
        effect.wrapText(effect.textInput.value);
        console.log('resize')
      });
  });

