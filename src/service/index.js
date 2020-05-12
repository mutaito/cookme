const baseUrl = `http://localhost:3001/api/v1`;

export function getAuth() {
    return fetch(`${baseUrl}/auth`,
        {
            method: 'GET'
        }).then(function (response) {
            return response.json();
        }).then(function (jsonResponse) {
            if (jsonResponse.code === 200) {
                return true
            }
            //return false

        });
}
