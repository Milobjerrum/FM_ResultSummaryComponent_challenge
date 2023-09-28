
document.addEventListener('DOMContentLoaded', function(){
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.array.for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }
        }
            document.querySelector('#results').innerHTML = `${element}`
        });

    })
})