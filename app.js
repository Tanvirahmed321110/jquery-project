
$(window).scroll(function(){
      $('.header-wraper').toggleClass('scroll',$(this).scrollTop()>100)
})

// text animation
let typed = new Typed('.title',{
      strings:['','Hello Everyone','Web Developer','Softare Engeinnering'],
      typeSpeed : 122,
      loop:true
})


// todo add
let display = $('#display-todo')
$('#btn-add').click(function(){
      let input = $('#input-add')
      display.append('<li>'+ input.val() + '<i id="btn-delete" class="m-2 fa-solid fa-trash-can"></i>'+ '</li>')
})


// delete 
$('#display-todo').on('click','#btn-delete',function(){
      $(this).parent().hide()
})

// chart 
window.onload = function () {

      var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "light1", // "light1", "light2", "dark1", "dark2"
            title:{
                  text: "Last 10 Year Income "
            },
            axisY: {
                  title: "Our Company"
            },
            data: [{        
                  type: "column",  
                  showInLegend: true, 
                  legendMarkerColor: "grey",
                  legendText: "All item income in Our Company",
                  dataPoints: [      
                        {t:'$', y: 22181, label: "2012" },
                        { y: 24111,  label: "2013" },
                        { y: 19223,  label: "2014" },
                        { y: 25121,  label: "2015" },
                        { y: 27211,  label: "2016" },
                        { y: 29121, label: "2017" },
                        { y: 31211,  label: "2019" },
                        { y: 19211,  label: "2020" },
                        { y: 24122,  label: "2021" },
                        { y: 32112,  label: "2022" }
                  ]
            }]
      });
      chart.render();
      
      }

      
      
// counter 
$(".count").counterUp({
      time:1000,
})




// slider 
$('.owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      stagePadding: 150,
      autoplay:true,
      autoplayTimeout:1000,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:1
          }
      }
  })

  
  

  
  
// //  js code 
// window.addEventListener('scroll', function() {
//       let header = document.querySelector(".header-wraper");
//       if (window.scrollY > 100) {
//         header.classList.add('scroll');
//       } else {
//         header.classList.remove('scroll');
//       }
    
//       // Remove the event handler after it has been called once
//       window.removeEventListener('scroll', this);
//     });
    

// to do app  add

// const btnTodo = document.getElementById('btn-add');
// const display = document.getElementById('display-todo');

// btnTodo.addEventListener('click',function(){
//       const input = document.getElementById('input-add') 
//       const li = document.createElement('li');
//       li.innerText = input.value;
//       display.appendChild(li)
      
//       // clear input
//       input.value= ''
// })

// todo item delete
// document.getElementById('display-todo').addEventListener('click',function(event){
//       if(event.target.id==='btn-delete'){
//             event.target.parentNode.style.display='none'
//       }
// })