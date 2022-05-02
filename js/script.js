//MAKE THE MAGIC HAPPEN

// Fixing the Z position of the net (relative to the other elements)
basket = $("#basketfront")

$("#net").css({
    'z-index': 15
})

basket.css({
    'z-index': 14
})

$("#butterfly").css({
    'z-index': 14
})

$(".apple").css({
    'z-index': 13
})

//Spawning apples (within margins on the crown of the tree)
tree = $("#tree")
treePos = tree.position()
treeWidth = tree.width()
treeHeight = tree.height()

$("#apple1").css({
    left: treePos.left + Math.floor(Math.random() * (treeWidth * 0.8)) + (treeWidth * 0.1),
    top: treePos.top + Math.floor(Math.random() * (treeHeight * 0.3)) + (treeHeight * 0.1)
})
$("#apple2").css({
    left: treePos.left + Math.floor(Math.random() * (treeWidth * 0.8)) + (treeWidth * 0.1),
    top: treePos.top + Math.floor(Math.random() * (treeHeight * 0.3)) + (treeHeight * 0.1)
})
$("#apple3").css({
    left: treePos.left + Math.floor(Math.random() * (treeWidth * 0.8)) + (treeWidth * 0.1),
    top: treePos.top + Math.floor(Math.random() * (treeHeight * 0.3)) + (treeHeight * 0.1)
})

// Moving net on cursor
$(window).mousemove(function(event) {
    $("#net").css({
        left: event.pageX,
        top: event.pageY
    })
})

//Moving apples to basket on hover
basketPos = basket.position()
basketWidth = basket.width()
basketHeight = basket.height()

for (let i = 1; i <= 3; i++) {
    $("#apple" + i).hover(function () {
        $("#apple" + i).animate({
            top: basketPos.top + (basketHeight * 0.03),
            left: basketPos.left + (basketWidth * (0.2 * i))
        })
    })
}

// Tilting the watercan on hover
wateringcan = $("#wateringcan")
wateringcan_tilt = false

wateringcan.hover(function() {
    let degrees;
    if(wateringcan_tilt){
        degrees =1;
    }else{
        degrees=-1;
    }
    $("#wateringcan").animate(
        { deg: 30*degrees },
        {
          duration: 1200,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          },
          done: function(){
              wateringcan_tilt = !wateringcan_tilt
          }
        }
      );

})

// Moving the butterfly across the screen
function animateButterfly () {
    $("#butterfly").animate({
        top: Math.floor(Math.random() * ($(window).height() - $("#butterfly").height())),
        left: Math.floor(Math.random() * ($(window).width() - $("#butterfly").width()))
    }, 3000, function() {
        animateButterfly()
    })
}

animateButterfly()

//Hovering the butterfly, making it move to a random position
$("#butterfly").hover(function() {
    $("#butterfly").stop()
    $("#butterfly").animate({
        top: Math.floor(Math.random() * ($(window).height() - $("#butterfly").height())),
        left: Math.floor(Math.random() * ($(window).width() - $("#butterfly").width()))
    }, 1000, function() {
        animateButterfly()
    })
})


