let data={
    photo: './photo/kep1.jpg',
    title: 'My title',
    description: 'What happened here, why it this a very nice image'
};


let currentPhoto=0;
let imgagesData=['./photo/kep1.jpg','./photo/kep2.jpg','./photo/kep3.jpg','./photo/kep4.jpg','./photo/kep5.jpg','./photo/kep6.jpg','./photo/kep7.jpg','./photo/kep8.jpg'];
$('#photo').attr('src', imgagesData[currentPhoto]);

$('#balnyil').click(()=>{
    if(currentPhoto>0)
    {
        currentPhoto--;
    }
    $('#photo').attr('src', imgagesData[currentPhoto]);

})

$('#jobbnyil').click(()=>{
    if(currentPhoto<7)
    {
        currentPhoto++;
    }
    $('#photo').attr('src', imgagesData[currentPhoto]);

})

$('.kepek').click((event)=>{
    let indexClicked=$(event.target).attr('data-number');
    currentPhoto=indexClicked;
    $('#photo').attr('src', imgagesData[currentPhoto]);
    
});


    // $('#kozep').append('<div id="elso" class="feliratok"></div>');
    // $('.feliratok').css('position', 'absolute');
    // $('.feliratok').append('<h1>New York city</h1>');
    // $('.feliratok').append('<p>New York City (NYC) is the most populous city in the United States. With an estimated 2018 population of 8,398,748 distributed over about 302.6 square miles (784 km2).</p>');

























































































// $('#kep1').click(()=>{
//     $('#photo').attr('src', './photo/kep1.jpg');
//     currentPhoto=0;
// });
// $('#kep2').click(()=>{
//     $('#photo').attr('src', './photo/kep2.jpg');
//     currentPhoto=1;
// });
// $('#kep3').click(()=>{
//     $('#photo').attr('src', './photo/kep3.jpg');
//     currentPhoto=2;
// });
// $('#kep4').click(()=>{
//     $('#photo').attr('src', './photo/kep4.jpg');
//     currentPhoto=3;
// });
// $('#kep5').click(()=>{
//     $('#photo').attr('src', './photo/kep5.jpg');
//     currentPhoto=4;
// });
// $('#kep6').click(()=>{
//     $('#photo').attr('src', './photo/kep6.jpg');
//     currentPhoto=5;
// });
// $('#kep7').click(()=>{
//     $('#photo').attr('src', './photo/kep7.jpg');
//     currentPhoto=6;
// });
// $('#kep8').click(()=>{
//     $('#photo').attr('src', './photo/kep8.jpg');
//     currentPhoto=7;
// });
