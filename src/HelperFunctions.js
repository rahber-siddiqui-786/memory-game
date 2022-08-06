const randomizeArr = (arr_old) => {
    let arr = [...arr_old]
    const shuffeled_arr = [];
    const size = arr.length;
    for(let i = 0; i < size; i++){
       const random_idx = Math.floor(Math.random() * arr.length);
       shuffeled_arr.push(arr[random_idx]);
       arr.splice(random_idx, 1);
    }

    return shuffeled_arr;
}

export{randomizeArr}