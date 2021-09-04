// console.log('iam hear');

// alert('mom is coming!!');

const momComing = () => {
    alert('mom is coming');
}

const goingPicnic = () => {
    const response = confirm('are you going to picnic??');
    console.log(response);
    if (response === true) {
        alert('sent me the fee in bkash');
        console.log('ok sent me 500 tk in bkash');
    }
    else {
        console.log('ok then see you after the picnic')
    }
};


const tellName = () => {
    const name = prompt('what is your name?');
    // console.log(name);
    if (name) {
        console.log(name);
    }
}

