export async function postRequest(data) {
    try {
        console.log(data.id);
        const apiUrl = `${process.env.REACT_APP_POST}${data.id}/`;
        //process.env.REACT_APP_API_Server
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('POST 요청 실패');
        }

        const responseData = await response.json();
        console.log('POST 성공:', responseData);
        return responseData;
    } catch (error) {
        console.error('POST 실패:', error);
        throw error;
    }
}
