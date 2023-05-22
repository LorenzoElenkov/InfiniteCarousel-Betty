#   Infinite Image Carousel
![ezgif com-video-to-gif](https://github.com/LorenzoElenkov/InfiniteCarousel-Betty/assets/95830881/deb4a625-2fbb-4933-a607-78f9c77e9451)

##  Purpose
This exercise was given to me as a hometask for a frontend position. I was given the task on 22nd May, 2023.
While I had been given a full week to complete the task, I really focused and managed to finish it in the same day.

##  Requirements
Create an infinite image carousel (the items loop when the end is reached) using React.
Navigation inside the carousel should only be triggered by scroll, rather than arrows or buttons.

The component must:
1.  Work with images of different sizes and aspect ratios
2.  Work on devices with different screen sizes
3.  Work on both mobile and desktop
4.  Work equally well with a dozen of images, as well as 1000+ images
5.  Be reusable

##  Solution
I decided that I am going to focus on 4th requirement point, where performance is of upmost importance. Regardless of the amount of images, the carousel should perform equally well.

Therefore, I decided that I have to think of a way to only show a small number of the images in the carousel at a time.

That is how I came up with the following solution:
1.  Show the current image on screen
2.  Have the previous image ready to the left of the current one
3.  Have the next image ready to the right of the current one
4.  Any other image that is not previous, current or next should not be rendered.

I used a combination of snapping technique in CSS + flexbox to make sure that images are always centered when viewing them, thus making sure that no states in between will be seen.

Every time, the user scrolls either to the left or right, a new calculation is made and the new previous, current and next images are rendered, while making sure that the scroll coordinates of the container are in the middle.

##  Accessibility
The image carousel has a height of 50% of the small viewport height. It is important that I used (svh) here instead of (vh), because mobile phones and tablets tend to have a bar either on top or bottom that is not taken into consideration in vh units. The usage of SVH takes into account the bar, which ensures that it will be exactly half of the vertical viewport.

By using the dynamic unit SVH, I eliminated the need to use media queries.

Therefore, the image carousel is responsive across all kinds of devices.

##  Accountability
I started working on the hometask at 11.30AM (10 minutes after the intro interview) and finished at 6.00PM. I had a few breaks but all in all, it took me around 4 hours to complete the task.
