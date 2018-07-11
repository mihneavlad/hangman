(function(){

    const baseURL = 'https://od-api.oxforddictionaries.com/api/v1';
    const proxy = `http://localhost:2337/${baseURL}`;
    const appKey = 'c8ee174b1558a4e00bab2e6b38df6fee';
    const appId = '47516d19';

    document.body.querySelector('.button-container').addEventListener('click', event => {
        event.preventDefault();

        let element = event.target;
        let category = element.dataset.category;
        let endpoint = `/wordlist/en/domains= ${category}`;

        $.ajax(proxy + endpoint, {
            method: 'GET',
            headers: {
                'app_key': appKey,
                'app_id': appId
            }
        }).done(response => {
            document.body.querySelector('#response').innerText = JSON.stringify(response, null, 2);
        });
    });

    //
})();
