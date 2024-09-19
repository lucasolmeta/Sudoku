window.addEventListener('resize', resizeScreen);

resizeScreen();

function signInButtonPressed(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
}

function resizeScreen (){

    let scalingMultiplier = 0.91;

    if(window.innerWidth/window.innerHeight < 1){
        scalingMultiplier*=window.innerWidth/window.innerHeight;
    }

    const headerHeight = (window.innerHeight/18) * scalingMultiplier;
    const signInTop = (window.innerHeight/9) * scalingMultiplier;
    const signInWidth = (window.innerWidth*0.5) * scalingMultiplier;
    const signInHeight = (window.innerHeight*0.4) * scalingMultiplier;

    const header = document.getElementById('header');
    const favicon = document.getElementById('favicon');
    const playButton = document.getElementById('playButton');
    const signInBox = document.getElementById('signInBox');
    const signInBoxGreeting = document.getElementById('signInBoxGreeting');
    const signInButton = document.getElementById('signInButton');
    const signUpButton = document.getElementById('signUpButton');
    
    if(window.innerHeight<1050){
        header.style.height = headerHeight + 'px';
    } else {
        header.style.height = '70px';
    }

    favicon.style.height = headerHeight/2 +'px';
    favicon.style.margin = headerHeight/4 + 'px';
    favicon.style.marginRight = window.innerWidth - headerHeight - 175*scalingMultiplier + 'px';

    playButton.style.height = headerHeight*3/4 + 'px';
    playButton.style.width = 200 * scalingMultiplier + 'px';
    playButton.style.margin = headerHeight/8 + 'px';
    playButton.style.fontSize = headerHeight/2 * scalingMultiplier + 'px'
    playButton.style.lineHeight = headerHeight*3/4 + 'px';

    signInBox.style.top = signInTop + 'px';
    signInBox.style.width = signInWidth +'px';
    signInBox.style.height = signInHeight + 'px';
    signInBox.style.padding = signInHeight*0.08 + 'px';
    signInBox.style.fontSize = (signInHeight/14) * scalingMultiplier + 'px';
    signInBox.style.lineHeight = (signInHeight/14) * scalingMultiplier + 'px';

    signInBoxGreeting.style.fontSize = (signInHeight/10) * scalingMultiplier + 'px';

    signInButton.style.fontSize = (signInHeight/14) * scalingMultiplier + 'px';
    signInButton.style.height = signInHeight/8 + 'px';
    signInButton.style.width = signInWidth*0.7 + 'px';

    signUpButton.style.fontSize = (signInHeight/20) * scalingMultiplier + 'px';

}